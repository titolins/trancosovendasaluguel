package server

import (
    "net/http"
    "time"
    "log"
    "fmt"
    "encoding/json"

    jwt "github.com/dgrijalva/jwt-go"
    "github.com/titolins/trancosovendasaluguel/server/admin"
    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"

    "github.com/titolins/trancosovendasaluguel/server/models"
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

    // get login
    e.GET("/admin", admin.MainHandler)
    e.POST("/admin", loginHandler)

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

func loginHandler(c echo.Context) error {
    var u models.User

    dec := json.NewDecoder(c.Request().Body)
    if err:= dec.Decode(&u); err != nil {
        log.Fatal(err)
        return err
    }

    log.Printf(fmt.Sprintf("%+v\n", u))

    if u.Username == "admin" && u.Password == "tv@_2017" {

        // Set custom claims
        claims := &jwt.StandardClaims{
            ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
        }

        // Create token with claims
        token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

        // Generate encoded token and send it as response.
        t, err := token.SignedString([]byte("secret"))
        if err != nil {
            return err
        }
        return c.JSON(http.StatusOK, echo.Map{
            "token": t,
        })
    }

    return echo.ErrUnauthorized
}

