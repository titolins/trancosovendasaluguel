package models

type Model interface{}

type Content interface{}

type TranslatableContent struct {
    PT_BR Content
    EN_US Content
}

type Picture struct {
    Url string `json: "url" bson:"url"`
}


