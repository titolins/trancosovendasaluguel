package controllers

import (
    "gopkg.in/mgo.v2"
)

type Controller struct{
    Name string
    Handler *mgo.Collection
}

func Attach(c *Controller, db *mgo.Database) {
    c.Handler = db.C(c.Name)
}

