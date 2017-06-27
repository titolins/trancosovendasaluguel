package models

import (
    "gopkg.in/mgo.v2/bson"
)

type (
    User struct {
        ID       string `json:"id" bson:"_id,omitempty"`
        Username string `json:"user" bson:"username"`
        Password string `json:"pass" bson:"password"`
    }

    Model interface{}

    Content interface{}

    TranslatableContent struct {
        PT_BR Content
        EN_US Content
    }

    Picture struct {
        ID  bson.ObjectId `json:"id" bson:"_id,omitempty"`
        Url string `json:"url" bson:"url"`
    }

    CategoryContent struct{
        Title string
    }

    Category struct{
        Content TranslatableContent
        Items []House
        Featured []House
    }

    HouseContent struct {
        Name string
        Description string
        Features []string
    }

    House struct {
        Category string
        Featured bool
        Capacity int
        Cover Picture
        Pictures []Picture
        Content TranslatableContent
    }
)


