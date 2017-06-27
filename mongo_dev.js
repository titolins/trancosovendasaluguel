
function getHandler() {
  conn = new Mongo();
  return conn.getDB("tva");
}

const TYPES = {
  HOUSE: 0,
  LOT: 1,
  FARM: 2,
  STORE: 3,
  INN: 4
};

function buildSalesHouse() {
  var db = getHandler();
  var c = db.categories.findOne({'name':'sales'}, {'_id':1,'name':1})
  return buildHouse(c)
}

function buildHouse(c) {
    h = house;
    h.category = c;
    return h;
}

var house = {
  category: {
    id: 1
  },
  type: TYPES.HOUSE, // only available on houses for sale
                     // can be: house, lot, farm, store, inn
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

var rentCategory = salesCategory;

var categoriesDevData = {
    "sales": salesCategory,
    "rent": rentCategory };

