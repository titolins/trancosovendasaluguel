package server

import (
    "os"
    "os/exec"
    "log"
    "fmt"

    "gopkg.in/mgo.v2"
    "gopkg.in/mgo.v2/bson"

    "github.com/go-gomail/gomail"

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

    group.POST("/sendmessage", api.sendMessageHandler)
}

/*
 * categories
 */

func (api *API) getAllCategoriesHandler(c echo.Context) (err error) {
    var cs []models.Category
    cMap := make(map[string]models.Category)

    db := api.DB.Clone()
    defer db.Close()

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

func (api *API) sendMessageHandler(c echo.Context) (err error) {
    res := map[string]interface{}{
        "error": false,
        "errors": nil,
    }
    errors := make([]string, 0)
    statusCode := 200
    var msg models.Message
    if err = c.Bind(&msg); err != nil {
        log.Printf("error binding message:\n%s", err)
        return
    }
    cmd := exec.Command("/usr/sbin/sendmail", "-t")
    cmd.Stdout = os.Stdout
    cmd.Stderr = os.Stderr
    pw, err := cmd.StdinPipe()
    if err != nil {
        log.Printf("error getting pipe:\n%s", err)
        res["error"] = true
        errors = append(errors, err.Error())
        statusCode = 500
    }
    if err = cmd.Start(); err != nil {
        log.Printf("error starting sendMail:\n%s", err)
        res["error"] = true
        errors = append(errors, err.Error())
        statusCode = 500
    }

    m := buildMail(msg)

    if _, err = m.WriteTo(pw); err != nil {
        log.Printf("error writing message:\n%s", err)
        res["error"] = true
        errors = append(errors, err.Error())
        statusCode = 500
    }

    if err = pw.Close(); err != nil {
        log.Printf("error closing writer:\n%s", err)
        res["error"] = true
        errors = append(errors, err.Error())
        statusCode = 500
    }

    if err = cmd.Wait(); err != nil {
        log.Printf("error closing writer:\n%s", err)
        res["error"] = true
        errors = append(errors, err.Error())
        statusCode = 500
    }

    return c.JSON(statusCode, res)
}

func buildMail(msg models.Message) *gomail.Message {
    m := gomail.NewMessage()
    m.SetHeader("From", msg.Email)
    m.SetHeader("To", "titolins@outlook.com")
    m.SetHeader("Subject", fmt.Sprintf("Trancoso Vendas Aluguel | Contato %s", msg.HouseName))
    m.SetBody("text/plain", msg.Text())

    return m
}
