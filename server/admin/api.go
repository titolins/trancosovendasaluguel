package admin

import (
    //"net/http"
    "io"
    "os"
    "fmt"
    "path"
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

    group.GET("/picture", api.GetAllPictures)
    group.PUT("/picture", api.UploadPictures)
}

func buildErrorResponse(err error) map[string]string{
    return map[string]string{
        "error": "true",
        "message": err.Error() }
}

func (api *API) GetAllPictures(c echo.Context) (err error) {
    var ps []models.Picture
    /*
    if err = c.Bind(ps); err != nil {
        return
    }
    */
    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("pictures").
        Find(bson.M{}).All(&ps); err != nil {
            return
    }

    log.Printf("%s", ps)
    return c.JSON(200, ps)
}

func (api *API) UploadPictures(c echo.Context) (err error) {
    var form *multipart.Form
    if form, err = c.MultipartForm(); err != nil {
        return c.JSON(500, buildErrorResponse(err))
    }

    res := map[string][]string{
        "errors": []string{} }
    //files := form.File["pictures"]
    for _, file := range form.File["pictures"] {
        func() (fErr error) {
            // Source
            src, fErr := file.Open()
            if fErr != nil {
                res["errors"] = append(res["errors"], fmt.Sprintf("Erro ao tentar abrir arquivo '%s'", file.Filename))
                return
            }
            defer src.Close()

            if !ACCEPTED_EXT[path.Ext(file.Filename)] {
                res["errors"] = append(res["errors"], fmt.Sprintf("Extensão '%s' inválida ('%s')", path.Ext(file.Filename), file.Filename))
                return
            }

            // dst = "server/static/uploads"
            filepath := fmt.Sprintf("server/static/uploads/%s", file.Filename)

            // Destination
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

            db := api.DB.Clone()
            defer db.Close()

            url := fmt.Sprintf("/static/uploads/%s", file.Filename)
            if fErr = db.DB("tva").C("pictures").Insert(&models.Picture{ Url: url }); err != nil {
                res["errors"] = append(res["errors"], fmt.Sprintf("Erro ao tentar inserir arquivo '%s' no banco de dados", file.Filename))
            }
            return
        }()

    }
    return c.JSON(200, res )
}

