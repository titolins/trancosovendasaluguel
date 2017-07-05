package admin

import (
    //"net/http"
    "io"
    "os"
    "fmt"
    "path"
    "strings"
    //"errors"
    "mime/multipart"
    "log"
    //"encoding/json"

    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    "gopkg.in/mgo.v2"
    "gopkg.in/mgo.v2/bson"

    "github.com/titolins/trancosovendasaluguel/server/models"
)

var ACCEPTED_EXT = map[string]bool{
    ".png": true,
    ".jpg": true }

type API struct{
    DB *mgo.Session
}

func (api *API) Bind(group *echo.Group) {
    // auth middleware
    group.Use(middleware.JWT([]byte("secret")))

    group.GET("/picture", api.getAllPictures)
    group.PUT("/picture", api.uploadPictures)
    group.DELETE("/picture", api.deletePicture)

    group.GET("/house", api.getAllHouses)
    group.PUT("/house", api.createHouse)
    group.DELETE("/house", api.deleteHouse)
}

func (api *API) deleteHouse(c echo.Context) (err error) {
    var h models.House
    if err = c.Bind(&h); err != nil {
        log.Printf("%s", err)
        return
    }
    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("categories").Update(&bson.M{
        "name": h.Category.Name,
    }, map[string]interface{}{
        "$pull": map[string]interface{}{ "items": h },
    }); err != nil {
        log.Printf("error getting category")
    }

    if err = db.DB("tva").C("houses").RemoveId(h.ID); err != nil {
        log.Printf("%s", err)
        return
    }
    return
}

func (api *API) deletePicture(c echo.Context) (err error) {
    var p models.Picture
    if err = c.Bind(&p); err != nil {
        return
    }

    // here, we will need to removed any references made to pictures from other collections

    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("pictures").Remove(p); err != nil {
        return
    }

    return os.Remove(path.Join("server",p.Url))
}

func (api *API) getAllHouses(c echo.Context) (err error) {
    var hs []models.House

    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("houses").Find(bson.M{}).All(&hs); err != nil {
        return
    }

    return c.JSON(200, hs)
}

func (api *API) getAllPictures(c echo.Context) (err error) {
    var ps []models.Picture
    /*
    if err = c.Bind(&ps); err != nil {
        return
    }
    */
    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("pictures").Find(bson.M{}).All(&ps); err != nil {
        return
    }

    return c.JSON(200, ps)
}

func (api *API) createHouse(c echo.Context) (err error) {
    var h models.House

    if err = c.Bind(&h); err != nil {
        log.Printf("%s", err)
        return
    }
    log.Printf("%s", h)

    ptContent := h.Content.PT_BR.(map[string]interface{})
    enContent := h.Content.EN_US.(map[string]interface{})

    /* validation should be done below
    */
    hErrors := map[string]interface{}{
        "name": nil,
        "description": nil,
        "cover": nil,
    }
    /*
    if len(res.errors) == 0 {
        err = db.DB("tva").C("pictures").Insert(&models.Picture{ Url: url })
    }
    */
    if len(ptContent["name"].(string)) < 4 || len(enContent["name"].(string)) < 4 {
        hErrors["name"] = "Campo 'nome' deve ter ao menos 4 caractéres"
    }

    if len(ptContent["description"].(string)) < 10 || len(enContent["description"].(string)) < 10 {
        hErrors["description"] = "Campo 'descrição' deve ter ao menos 10 caractéres"
    }

    /*
    for _, f := range h.Content.Features {
    }
    */

    db := api.DB.Clone()
    defer db.Close()
    if n, err := db.DB("tva").C("pictures").FindId(h.Cover.ID).Count(); err != nil || n == 0 {
        hErrors["cover"] = "Selecione uma imagem válida"
    }

    if hErrors["name"] != nil ||
        hErrors["description"] != nil ||
        //hErrors["featured"] != nil ||
        hErrors["cover"] != nil {
        return c.JSON(500, map[string]interface{}{
            "error": true,
            "errors": hErrors,
        })
    }

    h.ID = bson.NewObjectId()
    if err = db.DB("tva").C("houses").Insert(&h); err != nil {
        log.Printf("error inserting house into db:\n%s", err)
        return
    }

    log.Printf("category from house:\n%s", h.Category)
    if err = db.DB("tva").C("categories").Update(&bson.M{
        "name": h.Category.Name,
    }, map[string]interface{}{
        "$push": map[string]interface{}{ "items": h },
    }); err != nil {
        log.Printf("error getting category")
    }

    return c.JSON(200, map[string]bool{
        "error": false,
    })
}

func (api *API) uploadPictures(c echo.Context) (err error) {
    var form *multipart.Form
    if form, err = c.MultipartForm(); err != nil {
        return
    }

    db := api.DB.Clone()
    defer db.Close()
    res := map[string][]string{
        "errors": []string{} }
    for _, file := range form.File["pictures"] {
        func() (fErr error) {
            // Source
            src, fErr := file.Open()
            if fErr != nil {
                res["errors"] = append(res["errors"], fmt.Sprintf("Erro ao tentar abrir arquivo '%s'", file.Filename))
                return
            }
            defer src.Close()

            if !ACCEPTED_EXT[strings.ToLower(path.Ext(file.Filename))] {
                res["errors"] = append(res["errors"], fmt.Sprintf("Extensão '%s' inválida ('%s')", path.Ext(file.Filename), file.Filename))
                return
            }

            filepath := fmt.Sprintf("/srv/http/server/static/uploads/%s", file.Filename)
            dst, fErr := os.Create(filepath)
            if fErr != nil {
                res["errors"] = append(res["errors"], fmt.Sprintf("Erro ao tentar criar arquivo '%s'", file.Filename))
                return
            }
            defer dst.Close()

            // Copy
            if _, fErr = io.Copy(dst, src); err != nil {
                res["errors"] = append(res["errors"], fmt.Sprintf("Erro ao tentar copiar arquivo '%s'", file.Filename))
                return
            }

            url := fmt.Sprintf("/static/uploads/%s", file.Filename)
            if fErr = db.DB("tva").C("pictures").Insert(&models.Picture{ Url: url }); err != nil {
                res["errors"] = append(res["errors"], fmt.Sprintf("Erro ao tentar inserir arquivo '%s' no banco de dados", file.Filename))
            }
            return
        }()

    }
    return c.JSON(200, res )
}

