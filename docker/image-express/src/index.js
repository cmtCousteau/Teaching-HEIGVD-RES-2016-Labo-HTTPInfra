var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send(generateLocation());
});

app.listen(3000, function () {
	console.log("listening...");
});


function generateLocation(){
	var numberOfLocation = chance.integer({
		min: 1,
		max: 10
	});
	
	console.log(numberOfLocation);
	
	var locationList = [];
	
	for(i = 0; i < numberOfLocation; i++){
	
		locationList.push({
			country: chance.country({ full: true }),
			city: chance.city(),
			adress: chance.address(),
			postalCode: chance.postal(),
			altitude: chance.altitude({fixed: 0, min: -10000, max: 10000})
		});	
	};
	console.log(locationList);
	return locationList;
};