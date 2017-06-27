
function getHandler() {
  conn = new Mongo();
  return conn.getDB("tva");
}

// title is an object here, like so:
// { pt_br: "",
//   en_us: "" }
function buildCategory(title) {
  return {
    name: title["en_us"],
    content: {
      "pt_br": { title: title["pt_br"] },
      "en_us": { title: title["en_us"] }
    },
    items: [],
    featured: []
  }
}

function main() {
  var db = getHandler();
  [
    {
      "pt_br": "vendas",
      "en_us": "sales"
    },
    {
      "pt_br": "aluguel",
      "en_us": "rent"
    }].map(function(c) { db.categories.insert(buildCategory(c)) });
}

main();
