package dev

import (
    "github.com/titolins/trancosovendasaluguel/server/models"
)

var SalesDevData = []models.House{
    models.House{
        Category: "1",
        Featured: true,
        Capacity: 4,
        Cover: models.Picture{ Url: "https://placehold.it/550x338" },
        Pictures: []models.Picture{
            models.Picture{ Url: "https://placehold.it/550x338" }},
        Content: models.TranslatableContent{
            PT: models.HouseContent{
                    Name: "casa 1",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" }},
            EN: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}},
    models.House{
        Category: "1",
        Featured: true,
        Capacity: 4,
        Content: models.TranslatableContent{
            PT: models.HouseContent{
                    Name: "casa 2",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" } },
            EN: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}}}

var RentDevData = []models.House{
    models.House{
        Category: "2",
        Featured: true,
        Capacity: 4,
        Cover: models.Picture{ Url: "https://placehold.it/550x338" },
        Pictures: []models.Picture{
            models.Picture{ Url: "https://placehold.it/550x338" }},
        Content: models.TranslatableContent{
            PT: models.HouseContent{
                    Name: "casa 1",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" }},
            EN: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}},
    models.House{
        Category: "2",
        Featured: true,
        Capacity: 4,
        Content: models.TranslatableContent{
            PT: models.HouseContent{
                    Name: "casa 2",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" } },
            EN: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}}}

var CategoriesDevData = map[string]models.Category{
    "sales": models.Category{
            Content: models.TranslatableContent{
                PT: models.CategoryContent{
                    Title: "vendas" },
                EN: models.CategoryContent{
                    Title: "sales" }},
            Items: SalesDevData },
    "rent": models.Category{
            Content: models.TranslatableContent{
                PT: models.CategoryContent{
                    Title: "aluguel" },
                EN: models.CategoryContent{
                    Title: "rent" }},
            Items: RentDevData }}
