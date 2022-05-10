var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nodedb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var myquery = { name: 'Amy' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});