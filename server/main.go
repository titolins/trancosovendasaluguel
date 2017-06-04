package main

import (
    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    "io/ioutil"
    "net/http"
)


func main() {
    e := echo.New()
    e.Use(middleware.Logger())

    e.Static("/static/img", "static/img")
    e.Static("/static/js", "../client/")

    e.GET("/*", func(c echo.Context) error {
        f, err := ioutil.ReadFile("static/templates/index.html")
        if err != nil {
            e.Logger.Fatal(err)
        }
        return c.HTMLBlob(http.StatusOK, f)
    })

    e.Start(":8080")
}


