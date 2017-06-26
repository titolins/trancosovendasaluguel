package admin

import (
    //"net/http"
    "log"
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

    group.GET("/picture", api.GetAllPictures())
}

func buildErrorResponse(err error) map[string]string{
    return map[string]string{
        "error": "true",
        "message": err.Error() }
}

func (api *API) GetAllPictures() func(echo.Context) error {
    return func(c echo.Context) (err error) {
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

}

