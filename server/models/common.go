package models

type Content interface{}

type TranslatableContent struct {
    PT_BR Content
    EN_US Content
}

type Picture struct {
    Url string
}


