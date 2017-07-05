package main

import (
    "os"
    "golang.org/x/crypto/acme/autocert"
    "github.com/labstack/echo/middleware"
    "github.com/titolins/trancosovendasaluguel/server"
)

func main() {
    env := os.Getenv("ENV")

    e := server.BuildEngine()
    if env == "PROD" {
        e.Logger.Fatal(e.Start(":80"))
    } else if env == "TLS" {
        e.AutoTLSManager.HostPolicy =  autocert.HostWhitelist("trancosovendasaluguel.com", "www.trancosovendasaluguel.com")
        // Cache certificates
        e.AutoTLSManager.Cache = autocert.DirCache("/srv/http/.cache")
        e.Pre(middleware.HTTPSRedirect())
        e.Logger.Fatal(e.StartAutoTLS(":443"))
    } else {
        e.Logger.Fatal(e.Start(":8080"))
    }

}
