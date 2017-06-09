package dev

import (
    "github.com/titolins/trancosovendasaluguel/server/models"
)

var House =  models.House{
    Category: "1",
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
        Category: "1",
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
        Category: "1",
        Featured: true,
        Capacity: 4,
        Content: models.TranslatableContent{
            PT_BR: models.HouseContent{
                    Name: "casa 2",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" } },
            EN_US: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}}}

var RentItemsDevData = []models.House{
    models.House{
        Category: "2",
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
        Category: "2",
        Featured: true,
        Capacity: 4,
        Content: models.TranslatableContent{
            PT_BR: models.HouseContent{
                    Name: "casa 2",
                    Description: "descricao da casa",
                    Features: []string{
                        "wifi",
                        "ar condicionado" } },
            EN_US: models.HouseContent{
                    Name: "house 1",
                    Description: "house description",
                    Features: []string{
                        "wifi",
                        "air conditioning" }}}}}

