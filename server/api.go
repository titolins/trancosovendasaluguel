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
    group.GET("/categorias", api.getAllCategoriesHandler)
    /*
    group.GET("/categories/:categoryId", api.GetCategoryHandler)
    group.GET("/categories/:categoryId/featured", api.GetCategoryFeaturedHandler)
    */
    group.GET("/categorias/:categoryId/casas/:houseId", api.getHouseHandler)
    group.GET("/categorias/:categoryId/portipo/:typeId", api.getHousesByTypeHandler)
}

/*
 * categories
 */

func (api *API) getAllCategoriesHandler(c echo.Context) (err error) {
    var cs []models.Category
    cMap := make(map[string]models.Category)

    db := api.DB.Clone()
    defer db.Close()
    // fucking awesome query \o/
    // sorting houses by max capacity and filtering featured houses
    if err = db.DB("tva").C("categories").Pipe([]bson.M{
        {"$lookup": &bson.M{
            "from": "houses",
            "localField": "items",
            "foreignField": "_id",
            "as": "houses"}},
        {"$unwind": "$houses"},
        {"$sort": &bson.M{"houses.capacity.Max": 1}},
        {"$group": &bson.M{
            "_id": &bson.M{"_id": "$_id", "name": "$name", "content": "$content"},
            "houses": &bson.M{ "$push": "$houses" }}},
        {"$project": &bson.M{
            "_id": "$_id._id",
            "name": "$_id.name",
            "content": "$_id.content",
            "items": "$houses",
            "featured": &bson.M{"$filter": &bson.M{
                "input": "$houses",
                "as": "f",
                "cond": &bson.M{"$eq": []interface{}{"$$f.featured", true}}}}}},
    }).All(&cs); err != nil {
        return
    }

    // only step that remained manual
    for _, c := range cs {
        cMap[c.Name] = c
    }

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

func (api *API) getHousesByTypeHandler(c echo.Context) error {
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
        "categories": "sales",
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

func (api *API) getHouseHandler(c echo.Context) (err error) {
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
