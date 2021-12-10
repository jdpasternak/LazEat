var foodrec = document.getElementById("FoodReccomendation")
var food = document.getElementById("Box")
var recipe = function () {
var recipe = {}
$.ajax(setting2).then(function (response) {
	response.json;
 
});
then(function(data)
{
	recipe = data
})
document.createElement("div")
return recipe //a json object

}
var weather = function () {
	$.ajax(setting1).then(function (response) {
		response.json;
	 
	});
	then(function(data)
	{
		weather = data
	})
	return weather //a json object

}
  $(document).ready(function(){
    $('.modal').modal();
  });

  var ingredients 
//api


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

const setting2 = {
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


FoodRec.addEventListener("click", recipe)
import * as UnitConversion from "./unit-conversion.js";

fetch("api.edamam.com/api/nutrition-data");
fetch(
  "api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
);
/* 
  Pseudo Code

  "Where are you" as Button
  button is clicked, do => {
    open a modal asking for current location (city or zip?)
    when modal is submitted,
      fetch weather data and appropriate recipes
      display to suggested recipes below
  }

  Suggest recipe is clicked, do => {
    open a modal with
      recipe name
      weather best to eat during
      ingredients
      steps
      nutrition facts
  }
*/
