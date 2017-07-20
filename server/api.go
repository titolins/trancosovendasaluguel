package server

import (
    "log"

    "gopkg.in/mgo.v2"
    "gopkg.in/mgo.v2/bson"

    "github.com/labstack/echo"
    //"github.com/titolins/trancosovendasaluguel/server/controllers"
    "github.com/titolins/trancosovendasaluguel/server/models"
)

var categories = map[string]string{
    "aluguel": "rent",
    "vendas": "sales",
}

var types = map[string]models.Type {
    "casas": models.HOUSE_TYPE,
    "terrenos": models.LOT_TYPE,
    "fazendas": models.FARM_TYPE,
    "pontoscomerciais": models.STORE_TYPE,
    "pousadas": models.INN_TYPE,
}

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

    group.GET("/categorias/:categoryId", api.getCategoryHouses)
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
            "featured": &bson.M{ "$push": &bson.M{
                "$cond":&bson.M{
                    "if":&bson.M{"$or": []interface{}{
                        &bson.M{"$and":[]interface{}{
                            &bson.M{"$eq":[]interface{}{"$name","rent"}},
                            &bson.M{"$eq":[]interface{}{"$houses.featured.rent", true}}}},
                        &bson.M{"$and":[]interface{}{
                            &bson.M{"$eq":[]interface{}{"$name","sales"}},
                            &bson.M{"$eq":[]interface{}{"$houses.featured.sales", true}}}}}},
                    "then":"$houses",
                    "else":""}}},
            "houses": &bson.M{"$push":"$houses"}}},
        {"$project": &bson.M{
            "_id": "$_id._id",
            "name": "$_id.name",
            "content": "$_id.content",
            "items": "$houses",
            "featured": &bson.M{"$filter": &bson.M{
                "input": "$featured",
                "as": "f",
                "cond": &bson.M{"$ne": []interface{}{"$$f", ""}}}}}},
    }).All(&cs); err != nil {
        log.Printf("error getting all categories:\n%s", err)
        return
    }
    log.Printf("%s",cs)

    // only step that remained manual
    for _, c := range cs {
        cMap[c.Name] = c
    }

    return c.JSON(200, cMap)
}

func (api *API) getCategoryHouses(c echo.Context) (err error) {
    var hs []models.House

    db := api.DB.Clone()
    defer db.Close()

    db.DB("tva").C("houses").Find(&bson.M{
        "categories": categories[c.Param("categoryId")],
    }).All(&hs)

    return c.JSON(200, hs)
}

func (api *API) getHousesByTypeHandler(c echo.Context) error {
    var hs []models.House

    t := types[c.Param("typeId")]

    db := api.DB.Clone()
    defer db.Close()

    db.DB("tva").C("houses").Find(&bson.M{
        "categories": "sales",
        "type": t,
    }).All(&hs)

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

    if err = db.DB("tva").C("houses").FindId(bson.ObjectIdHex(c.Param("houseId"))).One(&h); err != nil {
        log.Printf("error getting house from db:\n%s", err)
        return
    }

    return c.JSON(200, h)
}

/*
 * end houses
 */
