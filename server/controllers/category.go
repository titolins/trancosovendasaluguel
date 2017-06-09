package controllers

import (
    //"github.com/labstack/echo"
    "github.com/titolins/trancosovendasaluguel/server/models"
    "github.com/titolins/trancosovendasaluguel/server/dev"
)

func GetAllCategories() map[string]models.Category {
    return dev.CategoriesDevData
}

func GetCategory(categoryId string) models.Category {
    if (categoryId == "1") {
        return dev.SalesDevData
    }
    return dev.RentDevData
}

func GetCategoryFeaturedHouses(cId string) []models.House {
    // method for getting featured houses for display at the main page
    // requires a category id, considering that we won't be needing all
    // featured houses at once
    if (cId == "1") {
        return dev.SalesDevData.Featured
    }
    return dev.RentDevData.Featured
}
