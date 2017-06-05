package models

type Content interface{}

type TranslatableContent struct {
    PT Content
    EN Content
}

type Picture struct {
    Url string
}


