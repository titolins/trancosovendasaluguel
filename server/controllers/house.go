package controllers

import (
    //"github.com/labstack/echo"
    "github.com/titolins/trancosovendasaluguel/server/models"
    "github.com/titolins/trancosovendasaluguel/server/dev"
)


func GetHouse(houseId string) models.House {
    return dev.House
}

func GetHousesByType(cId string, tId string) []models.House {
    return dev.SalesItemsDevData
}
