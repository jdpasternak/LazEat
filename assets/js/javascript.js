var food = function () {

}
var weather = function (current) {

}

//api

fetch("api.edamam.com/api/nutrition-data")
const setting1 = {
    "async": true,
	"crossDomain": true,
	"url": "api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
		"x-rapidapi-key": "27f14b1cebmsh5a0059667e11c37p13c476jsn80efdba32824"
	}

}
fetch("api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")

const setting2 = {
    "async": true,
	"crossDomain": true,
	"url": "api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
		"x-rapidapi-key": "27f14b1cebmsh5a0059667e11c37p13c476jsn80efdba32824"
}
}

const setting3 = {
	"async": true,
	"crossDomain": true,
	"url": "www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
		"x-rapidapi-key": "27f14b1cebmsh5a0059667e11c37p13c476jsn80efdba32824"
	}
};

$.ajax(setting1).done(function (response) {
	console.log(response);
});

$.ajax(setting2).done(function (response) {
	console.log(response);
});
$.ajax(setting3).done(function (response) {
	console.log(response);
});

