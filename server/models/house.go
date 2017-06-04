package models

type Picture struct {
    Url string
}

type Content struct {
    Name string
    Description string
    Features []string
}

type TranslatableContent struct {
    PT Content
    EN Content
}

type House struct {
    Category string
    Featured bool
    Capacity int
    Cover Picture
    Pictures []Picture
    Content TranslatableContent
}


