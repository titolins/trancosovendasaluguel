package main

import (
    "github.com/titolins/trancosovendasaluguel/server"
)

func main() {
    e := server.BuildEngine()

    e.Start(":8080")
}
