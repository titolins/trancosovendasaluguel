
function getHandler() {
  conn = new Mongo();
  return conn.getDB("tva");
}

function run() {
  var db = getHandler();
  db.houses.updateMany({featured: true},{$set:{featured:{sales:true,rent:true}}})
  db.houses.updateMany({featured: false},{$set:{featured:{sales:false,rent:false}}})
}
