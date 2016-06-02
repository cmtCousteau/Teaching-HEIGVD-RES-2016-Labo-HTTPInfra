var Chance = require('chance');
var chance = new Chance();

var test = generateLocation();

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
};

