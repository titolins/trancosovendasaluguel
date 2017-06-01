package main

import (
    "github.com/go-zoo/bone"
    "github.com/gorilla/handlers"

    "io/ioutil"
    "net/http"
    "os"
    "log"
)


func main() {
    mux := bone.New()

    //mux.GetFunc("/", homeHandler)
    mux.NotFoundFunc(http.HandlerFunc(homeHandler))
    mux.Get("/static/js/", http.StripPrefix("/static/js/",
        http.FileServer(http.Dir("../client/"))))

    http.ListenAndServe(":8080", handlers.LoggingHandler(os.Stdout, mux))
}

func homeHandler(w http.ResponseWriter, req *http.Request) {
    f, err := ioutil.ReadFile("static/templates/index.html")
    if err != nil {
        log.Fatal(err)
    }
    w.Write(f)
}
