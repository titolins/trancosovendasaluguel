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
    group.PATCH("/house", api.editHouse)

    group.GET("/folder", api.getAllFolders)
    group.PUT("/folder", api.createFolder)
    group.DELETE("/folder", api.deleteFolder)

    group.PUT("/folder/cover", api.selectCover)
}

func (api *API) deleteHouse(c echo.Context) (err error) {
    var h models.House
    if err = c.Bind(&h); err != nil {
        log.Printf("%s", err)
        return
    }
    db := api.DB.Clone()
    defer db.Close()

    for _, c := range h.Categories {
        if err = db.DB("tva").C("categories").Update(&bson.M{
            "name": c,
        }, &bson.M{
            "$pull": &bson.M{ "items": h.ID },
        }); err != nil {
            log.Printf("error removing house from category:\n%s", err)
            return
        }
    }

    if err = db.DB("tva").C("houses").RemoveId(h.ID); err != nil {
        log.Printf("%s", err)
        return
    }
    return
}

func (api *API) deleteFolder(c echo.Context) (err error) {
    var f models.PictureFolder

    if err = c.Bind(&f); err != nil {
        log.Printf("error binding picturefolder model:\n%s", err)
        return
    }

    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("folders").RemoveId(f.ID); err != nil {
        log.Printf("error removing folder:\n%s", err)
        return
    }

    if err = updateHouseFolder(db, f.ID); err != nil && err != mgo.ErrNotFound {
        log.Printf("error updating house folder:\n%s", err)
        return
    }

    return
}

func (api *API) deletePicture(c echo.Context) (err error) {
    var d models.PictureOpPayload
    if err = c.Bind(&d); err != nil {
        return
    }

    // here, we will need to removed any references made to pictures from other collections

    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("folders").UpdateId(d.Folder.ID, &bson.M{
        "$pull": &bson.M{ "pictures": d.Picture },
    }); err != nil {
        log.Printf("error pulling picture from folder:\n%s", err)
        return
    }

    if err = updateHouseFolder(db, d.Folder.ID); err != nil && err != mgo.ErrNotFound {
        log.Printf("error updating house folder:\n%s", err)
        return
    }

    return
    //return os.Remove(path.Join("server",p.Url))
}

func (api *API) getAllFolders(c echo.Context) (err error) {
    var fs []models.PictureFolder

    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("folders").Find(bson.M{}).All(&fs); err != nil {
        log.Printf("error getting all folders:\n%s", err)
        return
    }

    return c.JSON(200, fs)
}

func (api *API) getAllHouses(c echo.Context) (err error) {
    var hs []models.House

    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("houses").Find(bson.M{}).All(&hs); err != nil {
        log.Printf("error getting all houses:\n%s", err)
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
        log.Printf("error getting all pictures:\n%s", err)
        return
    }

    return c.JSON(200, ps)
}

func (api *API) editHouse(c echo.Context) (err error) {
    var h models.House
    var category models.Category

    if err = c.Bind(&h); err !=nil {
        log.Printf("error binding house model:\n%s", err)
        return
    }

    if hErrors := validateHouse(h); hErrors != nil {
        return c.JSON(500, map[string]interface{}{
            "error": true,
            "errors": hErrors,
        })
    }

    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").C("houses").UpdateId(h.ID, h); err != nil {
        log.Printf("error updating house:\n%s", err)
        return
    }

    iter := db.DB("tva").C("categories").Find(&bson.M{"items":h.ID}).Iter()
    // iter.Next returns a boolean
    for iter.Next(&category) {
        found := false
        for _, houseC := range h.Categories {
            if houseC == category.Name {
                found = true
            }
        }
        if !found {
            if err = db.DB("tva").C("categories").Update(&bson.M{
                "name": category.Name,
            }, &bson.M{
                "$pull": &bson.M{ "items": h.ID },
            }); err != nil {
                log.Printf("error removing house from category:\n%s", err)
                return
            }
        }
    }

    for _, houseC := range h.Categories {
        log.Printf("categoryName = %s", houseC)
        if err = db.DB("tva").C("categories").Update(&bson.M{
            "name": houseC,
        }, &bson.M{
            "$addToSet": &bson.M{ "items": h.ID },
        }); err != nil {
            log.Printf("error pushing house into category:\n%s", err)
            return
        }
    }

    if err = iter.Close(); err != nil {
        log.Printf("error closing iter:\n%s", err)
        return
    }

    return c.JSON(200, map[string]bool{
        "error": false,
    })
}

func (api *API) createHouse(c echo.Context) (err error) {
    var h models.House

    if err = c.Bind(&h); err != nil {
        log.Printf("error binding house model:\n%s", err)
        return
    }

    if hErrors := validateHouse(h); hErrors != nil {
        return c.JSON(500, map[string]interface{}{
            "error": true,
            "errors": hErrors,
        })
    }

    db := api.DB.Clone()
    defer db.Close()
    h.ID = bson.NewObjectId()
    if err = db.DB("tva").C("houses").Insert(&h); err != nil {
        log.Printf("error inserting house into db:\n%s", err)
        return
    }

    for _, c := range h.Categories {
        if err = db.DB("tva").C("categories").Update(&bson.M{
            "name": c,
        }, &bson.M{
            "$push": &bson.M{ "items": h.ID },
        }); err != nil {
            log.Printf("error pushing house into category:\n%s", err)
            return
        }
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

    var errors []string

    if len(form.File["pictures"]) < 1 {
        errors = append(errors, "Nenhum arquivo para subir")
    } else {
        var validPictures []models.Picture
        for _, file := range form.File["pictures"] {
            func() (fErr error) {
                // Source
                src, fErr := file.Open()
                if fErr != nil {
                    log.Printf("error on file.Open:\n%s", err)
                    errors = append(errors, fmt.Sprintf("Erro ao tentar abrir arquivo '%s'", file.Filename))
                    return
                }
                defer src.Close()

                if !ACCEPTED_EXT[strings.ToLower(path.Ext(file.Filename))] {
                    log.Printf("invalid ext")
                    errors = append(errors, fmt.Sprintf("Extensão '%s' inválida ('%s')", path.Ext(file.Filename), file.Filename))
                    return
                }

                filepath := fmt.Sprintf("/srv/http/server/static/uploads/%s", file.Filename)
                dst, fErr := os.Create(filepath)
                if fErr != nil {
                    log.Printf("error on os.Create:\n%s", err)
                    errors = append(errors, fmt.Sprintf("Erro ao tentar criar arquivo '%s'", file.Filename))
                    return
                }
                defer dst.Close()

                // Copy
                if _, fErr = io.Copy(dst, src); err != nil {
                    log.Printf("error on io.Copy:\n%s", err)
                    errors = append(errors, fmt.Sprintf("Erro ao tentar copiar arquivo '%s'", file.Filename))
                    return
                }

                url := fmt.Sprintf("/static/uploads/%s", file.Filename)
                validPictures = append(validPictures, models.Picture{ Url: url})

                return
            }()

        }

        db := api.DB.Clone()
        defer db.Close()

        if bson.IsObjectIdHex(form.Value["folderId"][0]) {
            fId := bson.ObjectIdHex(form.Value["folderId"][0])
            if err = db.DB("tva").C("folders").UpdateId(fId, &bson.M{
                "$push": &bson.M{ "pictures": &bson.M{
                    "$each": validPictures}}}); err != nil {
                errors = append(errors, "Erro ao inserir imagens no banco de dados")
            } else {
                if err = updateHouseFolder(db, fId); err != nil && err != mgo.ErrNotFound {
                    log.Printf("error updating houses:\n%s", err)
                    return
                }
            }
        } else {
            errors = append(errors, "Id da pasta inválido")
        }
    }

    if len(errors) > 0 {
        return c.JSON(500, map[string]interface{}{ "error": true, "errors": errors })
    }

    return c.JSON(200, map[string]bool{ "error": false })
}

func (api *API) selectCover(c echo.Context) (err error) {
    var p models.PictureOpPayload

    if err = c.Bind(&p); err != nil {
        log.Printf("error binding pictureoppayload model:\n%s", err)
        return
    }

    db := api.DB.Clone()
    defer db.Close()
    if err = db.DB("tva").C("folders").UpdateId(p.Folder.ID, &bson.M{ "$set": &bson.M{ "cover": p.Picture }}); err != nil {
        log.Printf("error setting picturefolder cover")
        return
    }
    if err = updateHouseFolder(db, p.Folder.ID); err != nil {
        log.Printf("error updating house folder")
        return
    }
    return c.JSON(200, map[string]bool{ "error": false })

}

func (api *API) createFolder(c echo.Context) (err error) {
    var f models.PictureFolder
    errors := make(map[string]string)

    if err = c.Bind(&f); err != nil {
        log.Printf("error binding picturefolder model:\n%s", err)
        return
    }

    if len(f.Name) < 4 {
        errors["name"] = "Nome da pasta deve ter ao menos 4 caractéres"
        return c.JSON(500, map[string]interface{}{ "error": true, "errors": errors})
    }

    if strings.IndexFunc(f.Name, func(r rune) bool {
        return r == '\\' ||
            r == '\'' ||
            r == '´' ||
            r == '`' ||
            r == ';' ||
            r == ':' ||
            r == '>' ||
            r == '<' ||
            r == ',' ||
            r == '.' ||
            r == '-' ||
            r == '=' ||
            r == '+' ||
            r == '"' ||
            r == '%' ||
            r == '$' ||
            r == '#' ||
            r == '@' ||
            r == '!' ||
            r == '*' ||
            r == '(' ||
            r == ')' ||
            r == '[' ||
            r == '{' ||
            r == '}' ||
            r == ']' ||
            r == '^' ||
            r == '~' ||
            r == '&'
    }) != -1 {
        errors["name"] = "Nome da pasta não pode conter os caractéres especiais '\\'´`;:><,.-=+'\"!@#$%&*()[]~^"
        return c.JSON(500, map[string]interface{}{ "error": true, "errors": errors })
    }


    db := api.DB.Clone()
    defer db.Close()
    if err = db.DB("tva").C("folders").Insert(&f); err != nil {
        // check if error is a duplicate key error, in which case the folder
        // already exists
        if mgo.IsDup(err) {
            errors["create"] = fmt.Sprintf("Pasta com nome '%s' já existe.", f.Name)
        } else {
            errors["create"] = fmt.Sprintf("Erro ao tentar inserir pasta no banco de dados:\n%s", err)
        }
        return c.JSON(500, map[string]interface{}{ "error": true, "errors": errors })
    }

    return c.JSON(200, map[string]bool{"error":false})
}

// helpers

func updateHouseFolder(db *mgo.Session, fId bson.ObjectId) (err error) {
    var f models.PictureFolder
    if err = db.DB("tva").C("folders").FindId(fId).One(&f); err != nil && err != mgo.ErrNotFound {
        log.Printf("error updating house folder:\n%s", err)
        return
    }

    return db.DB("tva").C("houses").Update(&bson.M{"pictureFolder._id":fId}, &bson.M{ "$set": &bson.M{ "pictureFolder": f }})
}

func validateHouse(h models.House) map[string]interface{}{
    hErrors := map[string]interface{}{
        "name": nil,
        "description": nil,
        "categories": nil,
    }

    ptContent := h.Content.PT_BR.(map[string]interface{})
    enContent := h.Content.EN_US.(map[string]interface{})

    // validation should be done below
    if len(h.Categories) < 1 {
        hErrors["categories"] = "A casa deve ter ao menos uma categoria"
    }

    if len(h.Name) < 4 {
        hErrors["name"] = "Campo 'nome' deve ter ao menos 4 caractéres"
    }

    if len(ptContent["description"].(string)) < 10 || len(enContent["description"].(string)) < 10 {
        hErrors["description"] = "Campo 'descrição' deve ter ao menos 10 caractéres"
    }

    // trimming features (all of them)
    for _, feature := range []string{"features", "salesFeatures", "rentFeatures"} {
        for _, content := range []map[string]interface{}{ptContent, enContent} {
            if content[feature] != nil {
                if _, ok := content[feature].([]interface{}); ok {
                    for i, f := range content[feature].([]interface{}) {
                        content[feature].([]interface{})[i] = strings.Trim(f.(string), " ")
                    }
                }
            }
        }
    }

    if hErrors["name"] != nil ||
       hErrors["description"] != nil ||
       hErrors["categories"] != nil {
        return hErrors
    }

    return nil
}

