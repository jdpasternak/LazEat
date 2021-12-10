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
