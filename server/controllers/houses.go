package controllers

import (
    //"github.com/labstack/echo"
    "github.com/titolins/trancosovendasaluguel/server/models"
    "github.com/titolins/trancosovendasaluguel/server/dev"
)


func GetCategoryHouses(cId string) []models.House {
    // get's houses by their category (sales, rent, etc.)
    if (cId == "1") {
        return dev.SalesDevData
    }
    return dev.RentDevData
}

func GetFeaturedHouses(cId string) []models.House {
    // method for getting featured houses for display at the main page
    // requires a category id, considering that we won't be needing all
    // featured houses at once
    return dev.RentDevData
}

