
function buildHouse(c) {
    h = house
    h.category = c
    return h
}

var house = {
    category: {
      id: 1
    },
    featured: true,
    capacity: 4,
    cover: { url: "https://placehold.it/550x338" },
    pictures: [
      { url: "https://placehold.it/550x338" },
      { url: "https://placehold.it/550x338" }
    ],
    content: {
      'pt_br': {
          name: "casa 1",
          description: "descricao da casa",
          features: [
              "wifi",
              "ar condicionado" ]},
        'en_us': {
            name: "house 1",
            description: "house description",
            features: [
              "wifi",
              "air conditioning" ]}}}


var salesCategory = {
    content: {
        'pt_br': {
            title: "vendas" },
        'en_us': {
            title: "sales" }},
    items: [
      house,
      house
    ],
    featured: [
      house,
      house
]}

var rentCategory = salesCategory

var categoriesDevData = {
    "sales": salesCategory,
    "rent": rentCategory }

