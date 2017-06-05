package main

import (
    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    "io/ioutil"
    "net/http"
)

func main() {
    e := echo.New()

    e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
        Format: `${method} | ${status} | ${uri} -> ${latency_human}` + "\n",
    }))

    // static files
    e.Static("/static/img", "static/img")
    e.Static("/static/js", "../client/")

    // api routes
    api := &API{}
    api.Bind(e.Group("/api"))

    // all other routes must serve the index file to be handled by react-router
    e.GET("/*", func(c echo.Context) error {
        f, err := ioutil.ReadFile("static/templates/index.html")
        if err != nil {
            e.Logger.Fatal(err)
        }
        return c.HTMLBlob(http.StatusOK, f)
    })

    e.Start(":8080")
}


