package main

import (
    "github.com/labstack/echo"
    "github.com/titolins/trancosovendasaluguel/server/controllers"
)


type API struct{}

func (api *API) Bind(group *echo.Group) {
    group.GET("/categories", api.GetCategoriesHandler)
    group.GET("/houses/category", api.GetHousesByCategoryHandler)
    group.GET("/houses/featured", api.GetFeaturedHousesHandler)
}

func (api *API) GetHousesByCategoryHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetCategoryHouses(c.Param("categoryId")))
}

func (api *API) GetFeaturedHousesHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetFeaturedHouses(c.Param("categoryId")))
}

func (api *API) GetCategoriesHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetAllCategories())
}
