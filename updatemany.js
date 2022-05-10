var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nodedb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result + " document(s) updated");
    db.close();
  });
});