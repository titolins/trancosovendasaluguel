package controllers

import (
    //"github.com/labstack/echo"
    "github.com/titolins/trancosovendasaluguel/server/models"
    "github.com/titolins/trancosovendasaluguel/server/dev"
)

func GetAllCategories() map[string]models.Category {
    return dev.CategoriesDevData
}
