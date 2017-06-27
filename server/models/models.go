package models

import (
    "gopkg.in/mgo.v2/bson"
)

type Type int

const (
    HOUSE Type = iota
    LOT
    FARM
    STORE
    INN
)

type (
    User struct {
        ID       string `json:"id" bson:"_id,omitempty"`
        Username string `json:"user" bson:"username"`
        Password string `json:"pass" bson:"password"`
    }

    Picture struct {
        ID  bson.ObjectId `json:"id" bson:"_id,omitempty"`
        Url string `json:"url" bson:"url"`
    }

    Content interface{}

    TranslatableContent struct {
        PT_BR Content `json:"pt_br" bson:"pt_br"`
        EN_US Content `json:"en_us" bson:"en_us"`
    }

    CategoryContent struct{
        Title string `json:"title" bson:"title"`
    }

    HouseContent struct {
        Name string `json:"name" bson:"name"`
        Description string `json:"description" bson:"description"`
        Features []string `json:"features" bson:"features"`
    }

    Category struct{
        ID  bson.ObjectId `json:"id" bson:"_id,omitempty"`
        Content TranslatableContent `json:"content" bson:"content"`
        Items []House `json:"items" bson:"items"`
        Featured []House `json:"featured" bson:"featured"`
    }

    House struct {
        ID  bson.ObjectId `json:"id" bson:"_id,omitempty"`
        // we use interface here because we won't actually use the full
        // category struct (only id will matter to us here)
        Category Category `json:"category" bson:"category"`
        Type Type `json:"type" bson:"type"`
        Featured bool `json:"featured" bson:"featured"`
        Capacity int `json:"capacity" bson:"capacity"`
        Cover Picture `json:"cover" bson:"cover"`
        Pictures []Picture `json:"pictures" bson:"pictures"`
        Content TranslatableContent `json:"content" bson:"content"`
    }
)


