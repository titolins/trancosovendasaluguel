package main

import (
    "github.com/titolins/trancosovendasaluguel/server"
)

func main() {
    e := server.BuildEngine()

    e.StartTLS(":1323", "cert.pem", "key.pem")
}
