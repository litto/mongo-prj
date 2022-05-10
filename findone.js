var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nodejs";

var ObjectId = require('mongodb').ObjectId;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodejs");
  var id_pass = new ObjectId("626d4b8020946996988d93ed")
  dbo.collection("customers").findOne({_id: id_pass}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});