package admin

import (
    "log"

    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    "github.com/titolins/trancosovendasaluguel/server/admin/controllers"
    admModels "github.com/titolins/trancosovendasaluguel/server/admin/models"
    "github.com/titolins/trancosovendasaluguel/server/models"
)

type API struct{}

func (api *API) Bind(group *echo.Group) {
    // auth middleware
    group.Use(middleware.JWT([]byte("secret")))

    pictureController := &controllers.Controller{ Name: "pictures" }
    controllers.Attach(pictureController, admModels.DB)

    group.GET("/picture", api.GetAllPictures(pictureController))//controllers.GetAllPictures, pictureController))
}

func buildErrorResponse(err error) map[string]string{
    return map[string]string{
        "error": "true",
        "msg": err.Error() }
}

func (api *API) GetAllPictures(c *controllers.Controller) func(echo.Context) error {
    return func(context echo.Context) error {
        var res []models.Picture
        if err := controllers.GetAllPictures(c, &res); err != nil {
            return context.JSON(500, buildErrorResponse(err))
        }
        return context.JSON(200, res)
    }

}

