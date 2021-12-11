// import * as UnitConversion from "./unit-conversion.js";

const API_KEY = "5e465552b5b1cf92efd83e5e7d35aea2"; // Jake's API key, used for testing. Can be replaced with production API key

const RECIPES = {
  normal: [
    // some normal dishes
  ],
  hot: [
    // salads and wraps
  ],
  cold: {
    rainy: [
      // some soups
    ],

    snowy: [
      // some stews and chilis
    ],
  },
};

// fetch("api.edamam.com/api/nutrition-data");
// fetch(
//   "api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
// );
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

$(document).ready(() => {
  $("#recipeModal").modal();
  $(".view-recipe").on("click", () => {
    $("#recipeModal").modal("open");
  });
  $("#lazeat").on("click", lazeatHandler);
});

var lazeatHandler = () => {
  var inputLocation = $(`#inputLocation`).val();
  if (inputLocation === "") {
    M.toast({
      html: "You must enter a city",
    });
    return false;
  }

  var weatherData = {};

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
    success: (response) => {
      weatherData = {
        currentWeather: response.weather[0].main,
        currentTemperature: response.main.temp,
      };
      console.log(weatherData);
      // TODO: Do something with the weather data
    },
  });
};

var getWeather = (city) => {
  var weatherData = {};

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
    success: (response) => {
      weatherData = {
        currentWeather: response.weather[0].main,
        currentTemperature: response.main.temp,
      };
      console.log(weatherData);
    },
  });
};

var pickFoodFromWeather = (weatherData) => {
  //  if weatherData.temperature is greater than XX F
  //    get recipes that are for hot days
  //  else if weatherData.temperature is less than XX F
  //    get recipes that are for cold days
};

getWeather("Mililani");
