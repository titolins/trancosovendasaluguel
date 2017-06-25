package models

import (
    "log"

    "gopkg.in/mgo.v2"
)

var DB *mgo.Database

func InitDB(url string, dbName string) {
    var err error
    var session *mgo.Session
    if session, err = mgo.Dial(url); err != nil {
        log.Panic(err)
    }
    DB = session.DB(dbName)
}

