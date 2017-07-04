package server

import (
    "log"

    "gopkg.in/mgo.v2"
    "gopkg.in/mgo.v2/bson"

    "github.com/labstack/echo"
    //"github.com/titolins/trancosovendasaluguel/server/controllers"
    "github.com/titolins/trancosovendasaluguel/server/models"
)


/*
 * TODO:
 * * add update and delete methods (ony getters as of now)
 * * implement validators and bindings. see: https://echo.labstack.com/guide/request
 */
type API struct{
    DB *mgo.Session
}

func (api *API) Bind(group *echo.Group) {
    group.GET("/categorias", api.GetAllCategoriesHandler)
    /*
    group.GET("/categories/:categoryId", api.GetCategoryHandler)
    group.GET("/categories/:categoryId/featured", api.GetCategoryFeaturedHandler)
    */
    group.GET("/categorias/:categoryId/casas/:houseId", api.GetHouseHandler)
    group.GET("/categorias/:categoryId/portipo/:typeId", api.GetHousesByTypeHandler)
}

/*
 * categories
 */

func (api *API) GetAllCategoriesHandler(c echo.Context) (err error) {
    var cs []models.Category
    cMap := make(map[string]models.Category)
    db := api.DB.Clone()
    defer db.Close()
    err = db.DB("tva").C("categories").Find(&bson.M{}).All(&cs)
    if err != nil {
        log.Printf("error getting categories:\n%s", err)
        return
    }

    log.Printf("%s", cs)
    for _, c := range cs {
        var fs []models.House
        db.DB("tva").C("houses").Find(&bson.M{
            "category.name": c.Name,
            "featured": true,
        }).All(&fs)

        c.Featured = fs
        cMap[c.Name] = c
    }


    log.Printf("%s",cMap)
    return c.JSON(200, cMap)
}

/*
func (api *API) GetCategoryHandler(c echo.Context) (err error) {
    var cat models.Category

    db := api.DB.Clone()
    defer db.Close()

    if err = db.DB("tva").Collection("categories")


    return c.JSON(200, controllers.GetCategory(c.Param("categoryId")))
}
*/

/*
func (api *API) GetCategoryFeaturedHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetCategoryFeaturedHouses(c.Param("categoryId")))
}
*/

func (api *API) GetHousesByTypeHandler(c echo.Context) error {
    var hs []models.House
    var t models.Type

    tStr := c.Param("typeId")

    if tStr == "casas" {
        t = models.HOUSE_TYPE
    } else if tStr == "terrenos" {
        t = models.LOT_TYPE
    } else if tStr == "fazendas" {
        t = models.FARM_TYPE
    } else if tStr == "pontoscomerciais" {
        t = models.STORE_TYPE
    } else if tStr == "pousadas" {
        t = models.INN_TYPE
    } else {
        return c.JSON(500, "categoria não existe")
    }

    db := api.DB.Clone()
    defer db.Close()

    log.Printf(c.Param("categoryId"))
    log.Printf("%d", t)
    db.DB("tva").C("houses").Find(&bson.M{
        "category.name": "sales",
        "type": t,
    }).All(&hs)
    log.Printf("%s", hs)

    return c.JSON(200, hs)
}

/*
 * end categories
 */


/*
 * houses
 */

func (api *API) GetHouseHandler(c echo.Context) (err error) {
    var h models.House
    db := api.DB.Clone()
    defer db.Close()
    log.Printf("%s", c.Param("houseId"))

    if err = db.DB("tva").C("houses").FindId(bson.ObjectIdHex(c.Param("houseId"))).One(&h); err != nil {
        return
    }
    log.Printf("%s", h)

    return c.JSON(200, h)
}

/*
 * end houses
 */
