package models

type HouseContent struct {
    Name string
    Description string
    Features []string
}

type House struct {
    Category string
    Featured bool
    Capacity int
    Cover Picture
    Pictures []Picture
    Content TranslatableContent
}


