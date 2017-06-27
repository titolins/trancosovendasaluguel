package dev

import (
    "github.com/titolins/trancosovendasaluguel/server/models"

    "gopkg.in/mgo.v2/bson"
)

var c1ID = bson.NewObjectId()
var c2ID = bson.NewObjectId()

var House =  models.House{
    Category: models.Category {
        ID: c1ID,
    },
    Featured: true,
    Capacity: 4,
    Cover: models.Picture{ Url: "https://placehold.it/550x338" },
    Pictures: []models.Picture{
        models.Picture{ Url: "https://placehold.it/550x338" }},
    Content: models.TranslatableContent{
        PT_BR: models.HouseContent{
                Name: "casa 1",
                Description: "descricao da casa",
                Features: []string{
                    "wifi",
                    "ar condicionado" }},
        EN_US: models.HouseContent{
                Name: "house 1",
                Description: "house description",
                Features: []string{
                    "wifi",
                    "air conditioning" }}}}

var SalesItemsDevData = []models.House{
    models.House{
        Category: models.Category {
            ID: c1ID,
        },
        Featured: true,
        Capacity: 4,
        Cover: models.Picture{ Url: "https://placehold.it/550x338" },
        Pictures: []models.Picture{
            models.Picture{ Url: "https://placehold.it/550x338" }},
        Content: models.TranslatableContent{
            PT_BR: models.HouseContent{
                    Name: "casa 1",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" }},
            EN_US: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}},
    models.House{
        Category: models.Category {
            ID: c2ID,
        },
        Featured: true,
        Capacity: 4,
        Cover: models.Picture{ Url: "https://placehold.it/550x338" },
        Pictures: []models.Picture{
            models.Picture{ Url: "https://placehold.it/550x338" }},
        Content: models.TranslatableContent{
            PT_BR: models.HouseContent{
                    Name: "casa 1",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" }},
            EN_US: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}}}

var RentItemsDevData = []models.House{
    models.House{
        Category: models.Category {
            ID: c2ID,
        },
        Featured: true,
        Capacity: 4,
        Cover: models.Picture{ Url: "https://placehold.it/550x338" },
        Pictures: []models.Picture{
            models.Picture{ Url: "https://placehold.it/550x338" }},
        Content: models.TranslatableContent{
            PT_BR: models.HouseContent{
                    Name: "casa 1",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" }},
            EN_US: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}},
    models.House{
        Category: models.Category {
            ID: c2ID,
        },
        Featured: true,
        Capacity: 4,
        Cover: models.Picture{ Url: "https://placehold.it/550x338" },
        Pictures: []models.Picture{
            models.Picture{ Url: "https://placehold.it/550x338" }},
        Content: models.TranslatableContent{
            PT_BR: models.HouseContent{
                    Name: "casa 1",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" }},
            EN_US: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}}}
