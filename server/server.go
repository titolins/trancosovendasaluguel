package server

import (
    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    //"io/ioutil"
    "net/http"
    "fmt"
)

func BuildEngine() (e *echo.Echo) {
    e = echo.New()

    e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
        Format: `${method} | ${status} | ${uri} -> ${latency_human}` + "\n",
    }))
    e.Use(middleware.Recover())
    e.Use(middleware.HTTPSRedirect())

    // static files
    e.Static("/static/img", "server/static/img")
    e.Static("/static/js", "client/")

    // api routes
    api := &API{}
    api.Bind(e.Group("/api"))

    e.GET("/request", testTLS)
    // all other routes must serve the index file to be handled by react-router
    e.GET("/*", homeHandler)

    return
    //e.Start(":8080")
    //e.StartTLS(":1323", "cert.pem", "key.pem")
}

func homeHandler(c echo.Context) (err error) {
    /*
    f, err := ioutil.ReadFile("static/templates/index.html")
    if err != nil {
        e.Logger.Fatal(err)
    }
    return c.HTMLBlob(http.StatusOK, f)
    */
    pusher, ok := c.Response().Writer.(http.Pusher)
    if ok {
        if err = pusher.Push("/static/js/jspm_packages/github/twbs/bootstrap@4.0.0-alpha.6/css/bootstrap.css", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/js/src/components/styles/main.less", nil); err != nil {
            return
        }
        if err = pusher.Push("/static/js/src/components/styles/mixin.less", nil); err != nil {
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

func testTLS (c echo.Context) (err error) {
  req := c.Request()
    format := `
    <code>
      Protocol: %s<br>
      Host: %s<br>
      Remote Address: %s<br>
      Method: %s<br>
      Path: %s<br>
    </code>
  `
  return c.HTML(http.StatusOK, fmt.Sprintf(format, req.Proto, req.Host, req.RemoteAddr, req.Method, req.URL.Path))
}
