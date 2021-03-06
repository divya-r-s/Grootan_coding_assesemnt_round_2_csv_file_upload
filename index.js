
var express = require('express');

var http = require('http');

var path = require("path");

var bodyParser = require('body-parser');

var helmet = require('helmet');

var app = express();

var server = http.createServer(app);
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'./')));

app.use(helmet());
app.get('/', function(req,res){

	res.sendFile(path.join(__dirname, './index.html'));
	});
app.post('/upload', function(req,res){





});
server.listen(3000, function () {

	console.log("Server listening on port: 3000");
});


 let MongoClient = require('mongodb').MongoClient;
 let url = "mongodb://localhost:27017/";

const csvFilePath = req.body.user_input;
 const csv=require('csvtojson')

 csv()
 .fromFile(csvFilePath)
 .then((jsonObj)=>{
    console.log(jsonObj);



 	MongoClient.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true }, (err, db) => {
 	  if (err) throw err;
 	  var dbo = db.db("data");
 	  dbo.collection("details").insertMany(jsonObj, (err, res) => {
 		if (err) throw err;
 		console.log("Number of documents inserted: " + res.insertedCount);

 		db.close();
 	  });
 	});
 	
 })

