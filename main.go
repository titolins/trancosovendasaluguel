package main

import (
    "os"
    //"golang.org/x/crypto/acme/autocert"
    //"github.com/labstack/echo/middleware"
    "github.com/titolins/trancosovendasaluguel/server"
)

func main() {
    //env := os.Getenv("ENV")

    e := server.BuildEngine()
    /*
    if env == "PROD" {
        e.Logger.Fatal(e.Start(":80"))
    } else if env == "TLS" {
        e.Pre(middleware.HTTPSRedirect())
        e.AutoTLSManager.HostPolicy =  autocert.HostWhitelist("trancosovendasaluguel.com", "www.trancosovendasaluguel.com")
        // Cache certificates
        e.AutoTLSManager.Cache = autocert.DirCache("/srv/http/.cache")
        go func() {
            e.Logger.Fatal(e.Start(":80"))
        }()
        e.Logger.Fatal(e.StartAutoTLS(":443"))
        certMgr := autocert.Manager{
            Cache: autocert.DirCache("/srv/http/.cache"),
            HostPolicy: autocert.HostWhitelist("trancosovendasaluguel.com", "www.trancosovendasaluguel.com"),
        }
        s := &http.Server{
            Handler: certMgr.HTTPHandler(e),
            Addr: ":80",
        }
        go s.ListenAndServe()
    } else {
        e.Logger.Fatal(e.Start(":8080"))
    }
    */
    e.Logger.Fatal(e.Start(":8080"))

}
