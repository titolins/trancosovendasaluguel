package server

import (
    "net/http"
    "log"

    "gopkg.in/mgo.v2"

    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    "github.com/titolins/trancosovendasaluguel/server/admin"
)

func BuildEngine() (e *echo.Echo) {
    db, err := mgo.Dial("localhost")
    if err != nil {
        log.Fatal(err)
    }
    // Create indices
    if err = db.Copy().DB("tva").C("categories").EnsureIndex(mgo.Index{
        Key:    []string{"name"},
        Unique: true,
    }); err != nil {
        log.Fatal(err)
    }

    e = echo.New()
    e.Pre(middleware.NonWWWRedirect())

    e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
        Format: `${method} | ${status} | ${uri} -> ${latency_human}` + "\n",
    }))

    e.Use(middleware.Recover())
    //e.Use(middleware.HTTPSRedirect())

    // static files
    e.Static("/static/img", "/srv/http/server/static/img")
    e.Static("/static/js", "/srv/http/client/")
    e.Static("/static/uploads", "/srv/http/server/static/uploads")

    // api routes
    api := &API{ DB: db }
    api.Bind(e.Group("/api"))

    adminAPI := &admin.API{ DB: db }
    admin := &admin.Admin{ API: adminAPI }
    admin.Bind(e.Group("/admin"))

    // all other routes must serve the index file to be handled by react-router
    e.GET("/*", homeHandler)

    return
}

func homeHandler(c echo.Context) (err error) {
    pusher, ok := c.Response().Writer.(http.Pusher)
    if ok {
        if err = pusher.Push("/static/js/jspm_packages/github/twbs/bootstrap@4.0.0-alpha.6/css/bootstrap.css", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/js/homepage/components/styles/main.less", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/js/homepage/components/styles/mixin.less", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/img/favicon.ico", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/img/logo.svg", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/js/jspm_packages/system.js", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/js/jspm.config.js", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/js/build.js", nil); err != nil {
            return
        }
    }
    return c.File("/srv/http/server/static/templates/index.html")
}

