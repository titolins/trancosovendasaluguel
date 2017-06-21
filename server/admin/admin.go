package admin

import (
    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"
)

type Admin struct{}

func (admin *Admin) Bind(group *echo.Group) {
    // auth middleware
    group.Use(middleware.JWT([]byte("secret")))

    // fallback serving template so react handles all rendering
    group.GET("/*", admin.MainHandler)
}

func (admin *Admin) MainHandler(c echo.Context) error {
    /* nothing to push yet..
    Pusher, ok := c.Response().Writer.(http.Pusher)
    if ok {
        if err = pusher.Push("/static/js/jspm_packages/github/twbs/bootstrap@4.0.0-alpha.6/css/bootstrap.css", nil); err != nil {
            return
        }
    }*/
    return c.File("server/static/templates/admin.html")
}


