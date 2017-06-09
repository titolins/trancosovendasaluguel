package main

import (
    "github.com/labstack/echo"
    "github.com/titolins/trancosovendasaluguel/server/controllers"
)


/*
 * TODO:
 * * add update and delete methods for category
 * * implement validators and bindings. see: https://echo.labstack.com/guide/request
 *
 */
type API struct{}

func (api *API) Bind(group *echo.Group) {
    group.GET("/categories", api.GetAllCategoriesHandler)
    group.GET("/categories/:categoryId", api.GetCategoryHandler)
    group.GET("/categories/:categoryId/featured", api.GetCategoryFeaturedHandler)
}

/*
 * categories
 */

func (api *API) GetAllCategoriesHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetAllCategories())
}

func (api *API) GetCategoryHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetCategory(c.Param("categoryId")))
}

func (api *API) GetCategoryFeaturedHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetCategoryFeaturedHouses(c.Param("categoryId")))
}

/*
 * end categories
 */


/*
 * houses
 */

func (api *API) GetHouseHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetHouse(c.Param("houseId")))
}

/*
 * end houses
 */
