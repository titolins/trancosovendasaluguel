package main

import (
    "os"
    "github.com/titolins/trancosovendasaluguel/server"
)

func main() {
    var p string
    env := os.Getenv("ENV")

    if env == "PROD" {
        p = ":80"
    } else if env == "TLS" {
        p = ":443"
    } else {
        p = ":8080"
    }


    e := server.BuildEngine()
    e.Start(p)
}
