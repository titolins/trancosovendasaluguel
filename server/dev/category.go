package dev

import (
    "github.com/titolins/trancosovendasaluguel/server/models"
)

var SalesDevData = models.Category{
    Content: models.TranslatableContent{
        PT_BR: models.CategoryContent{
            Title: "vendas" },
        EN_US: models.CategoryContent{
            Title: "sales" }},
    Items: SalesItemsDevData,
    Featured: SalesItemsDevData }

var RentDevData = models.Category{
    Content: models.TranslatableContent{
        PT_BR: models.CategoryContent{
            Title: "aluguel" },
        EN_US: models.CategoryContent{
            Title: "rent" }},
    Items: RentItemsDevData,
    Featured: RentItemsDevData }

var CategoriesDevData = map[string]models.Category{
    "sales": SalesDevData,
    "rent": RentDevData }
