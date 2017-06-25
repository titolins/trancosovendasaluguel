package controllers

import (
    "log"

    "github.com/titolins/trancosovendasaluguel/server/models"
)

func GetAllPictures(c *Controller, res *[]models.Picture) (err error) {
    if err = c.Handler.Find(nil).All(res); err != nil {
        return
    }
    log.Printf("%s",res)
    return
}

