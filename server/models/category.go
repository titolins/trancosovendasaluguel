package models

type CategoryContent struct{
    Title string
}

type Category struct{
    Content TranslatableContent
    Items []House
}

