package controllers

import (
    "gopkg.in/mgo.v2"

    //"github.com/titolins/trancosovendasaluguel/server/models"
)

type Controller struct{
    Name string
    Handler *mgo.Collection
}

func Attach(c *Controller, db *mgo.Database) {
    c.Handler = db.C(c.Name)
}


