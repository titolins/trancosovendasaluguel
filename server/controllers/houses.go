package controllers

import (
    //"github.com/labstack/echo"
    "github.com/titolins/trancosovendasaluguel/server/models"
    "github.com/titolins/trancosovendasaluguel/server/dev"
)


func GetAllHouses() []models.House {
    // get's all houses
    return dev.DevData
}

func GetCategoryHouses(cId string) []models.House {
    // get's houses by their category (sales, rent, etc.)
    return dev.DevData
}

func GetFeaturedHouses(cId string) []models.House {
    // method for getting featured houses for display at the main page
    // requires a category id, considering that we won't be needing all
    // featured houses at once
    return dev.DevData
}

