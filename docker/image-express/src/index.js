
var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send("hello res");
});

app.listen(3000, function () {
	console.log("listening...");
});