package admin

import (
    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    //"github.com/titolins/trancosovendasaluguel/server/controllers"
)

type API struct{}

func (api *API) Bind(group *echo.Group) {
    // auth middleware
    group.Use(middleware.JWT([]byte("secret")))
    group.GET("/", api.TestJWTAuth)
    /* examples
    group.GET("/categories", api.GetAllCategoriesHandler)
    group.GET("/categories/:categoryId", api.GetCategoryHandler)
    group.GET("/categories/:categoryId/featured", api.GetCategoryFeaturedHandler)
    group.GET("/categories/:categoryId/houses/:houseId", api.GetHouseHandler)
    group.GET("/categories/:categoryId/houses/bytype/:typeId", api.GetHousesByTypeHandler)
    */
}

func (api *API) TestJWTAuth(c echo.Context) error {
    return c.JSON(200, map[string]string{ "test": "ok" })
}
