package admin

import (
    //"net/http"
    "log"
    "mime/multipart"
    //"encoding/json"

    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    "gopkg.in/mgo.v2"
    "gopkg.in/mgo.v2/bson"

    "github.com/titolins/trancosovendasaluguel/server/models"
)

type API struct{
    DB *mgo.Session
}

func (api *API) Bind(group *echo.Group) {
    // auth middleware
    group.Use(middleware.JWT([]byte("secret")))

    group.GET("/picture", api.GetAllPictures)
    group.POST("/picture", api.UploadPictures)
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
    files := form.File["files"]
    for _, file := range files {
        log.Printf("%s", file)
        // Source
        /*
        src, err := file.Open()
        if err != nil {
            return err
        }
        defer src.Close()

        // Destination
        dst, err := os.Create(file.Filename)
        if err != nil {
            return err
        }
        defer dst.Close()

        // Copy
        if _, err = io.Copy(dst, src); err != nil {
            return err
        }

    */
    }
    return c.JSON(200, map[string]string{ "error": "false", "msg": "sucessfully uploaded files"})
}

