package server

import (
    "net/http"

    "github.com/titolins/trancosovendasaluguel/server/admin"
    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

)

func BuildEngine() (e *echo.Echo) {
    e = echo.New()

    e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
        Format: `${method} | ${status} | ${uri} -> ${latency_human}` + "\n",
    }))
    e.Use(middleware.Recover())
    //e.Use(middleware.HTTPSRedirect())

    // static files
    e.Static("/static/img", "server/static/img")
    e.Static("/static/js", "client/")

    // api routes
    api := &API{}
    api.Bind(e.Group("/api"))

    admin := &admin.Admin{}
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
    return c.File("server/static/templates/index.html")
}

