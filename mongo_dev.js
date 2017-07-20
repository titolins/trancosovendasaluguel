
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

function buildHouse(name, featured) {
  h = house;
  h.name = name;
  h.featured = featured;
  return h;
}

var house = {
  categories: [
    "rent"
  ],
  type: TYPES.HOUSE, // only available on houses for sale
                     // can be: house, lot, farm, store, inn
  capacity: {min:1,max:2},
  pictureFolder: {
    cover: {},
    pictures: [],
  },
  content: {
    'pt_br': {
        description: "descricao da casa",
        features: [
            "wifi",
            "ar condicionado" ]},
      'en_us': {
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

