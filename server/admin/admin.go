package admin

import (
    "net/http"
    "fmt"
    "time"
    "encoding/json"
    "log"

    jwt "github.com/dgrijalva/jwt-go"
    "github.com/labstack/echo"

    "github.com/titolins/trancosovendasaluguel/server/models"
)

type Admin struct{
    API *API
}

func (admin *Admin) Bind(group *echo.Group) {
    admin.API.Bind(group.Group("/api"))

    // login handler
    group.POST("", admin.loginHandler)
    // fallback serving template so react handles all rendering
    group.GET("*", admin.mainHandler)
    group.GET("/*", admin.mainHandler)
    group.GET("/*/*", admin.mainHandler)
}

func (admin *Admin) mainHandler(c echo.Context) error {
    /* nothing to push yet..
    Pusher, ok := c.Response().Writer.(http.Pusher)
    if ok {
        if err := pusher.Push("/static/js/jspm_packages/github/twbs/bootstrap@4.0.0-alpha.6/css/bootstrap.css", nil); err != nil {
            return err
        }
    }
    */
    return c.File("/srv/http/server/static/templates/admin.html")
}


func (admin *Admin) loginHandler(c echo.Context) error {
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

