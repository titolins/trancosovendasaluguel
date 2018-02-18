package models

import (
    "bytes"
    "log"
    "text/template"

    "gopkg.in/mgo.v2/bson"
)

const (
    HOUSE_TYPE Type = iota
    LOT_TYPE
    FARM_TYPE
    STORE_TYPE
    INN_TYPE
)

const emailTemplateText = `Ref. {{.HouseName}}

{{.Message}}`

var emailTemplate *template.Template

type (
    Content interface{}

    Type int

    User struct {
        ID       bson.ObjectId `json:"id,omitempty" bson:"_id,omitempty"`
        Username string `json:"user" bson:"username"`
        Password string `json:"pass" bson:"password"`
    }

    PictureFolder struct {
        ID bson.ObjectId `json:"id,omitempty" bson:"_id,omitempty"`
        Name string `json:"name" bson:"name"`
        Cover Picture `json:"cover" bson:"cover"`
        Pictures []Picture `json:"pictures" bson:"pictures"`
    }

    Picture struct {
        ID  bson.ObjectId `json:"id,omitempty" bson:"_id,omitempty"`
        Url string `json:"url" bson:"url"`
    }

    TranslatableContent struct {
        PT_BR Content `json:"pt_br" bson:"pt_br"`
        EN_US Content `json:"en_us" bson:"en_us"`
    }

    CategoryContent struct {
        Title string `json:"title" bson:"title"`
    }

    HouseContent struct {
        Description string `json:"description" bson:"description"`
        Features []string `json:"features" bson:"features"`
    }

    Category struct {
        ID  bson.ObjectId `json:"id,omitempty" bson:"_id,omitempty"`
        Name string `json:"name" bson:"name"`
        Content TranslatableContent `json:"content" bson:"content"`
        Items []House `json:"items,omitempty" bson:"items,omitempty"`
        // houses comes from aggregation, so no bson?
        //Houses []House `json:"houses" bson:"houses"`
        Featured []House `json:"featured" bson:"featured"`
    }

    Capacity struct {
        Min int `json:"min,string" bson:"min"`
        Max int `json:"max,string" bson:"max"`
    }

    FeaturedCategories struct {
        Sales bool `json:"sales" bson:"sales"`
        Rent bool `json:"rent" bson:"rent"`
    }

    House struct {
        ID  bson.ObjectId `json:"id" bson:"_id,omitempty"`
        Name string `json:"name" bson:"name"`
        // we use interface here because we won't actually use the full
        // category struct (only id will matter to us here)
        Categories []string `json:"categories" bson:"categories"`
        Type Type `json:"type,string" bson:"type"`
        Featured FeaturedCategories `json:"featured" bson:"featured"`
        Capacity Capacity `json:"capacity" bson:"capacity"`
        PictureFolder PictureFolder `json:"pictureFolder,omitempty" bson:"pictureFolder,omitempty"`
        Content TranslatableContent `json:"content" bson:"content"`
    }

    PictureOpPayload struct {
        Folder PictureFolder `json:"folder"`
        Picture Picture `json:"picture"`
    }

    Message struct {
        HouseName string `json:"houseName"`
        Email string `json:"email"`
        Message string `json:"message"`
    }
)

func (m *Message) Text() string {
    var buffer bytes.Buffer
    var err error

    if emailTemplate == nil {
        if emailTemplate, err = template.New("email").Parse(emailTemplateText); err != nil {
            log.Printf("error parsing template:\n%s", err)
            return ""
        }
    }
    if err = emailTemplate.Execute(&buffer, m); err != nil {
        log.Printf("error executing template:\n%s", err)
        return ""
    }

    return buffer.String()
}

