// import * as UnitConversion from "./unit-conversion.js";

const API_KEY = "5e465552b5b1cf92efd83e5e7d35aea2"; // Jake's API key, used for testing. Can be replaced with production API key
const RECIPE_API_KEY = {
  app_id: "72992508",
  app_key: "f051ae9c54b955c20f627d764a400a0d",
};

const RECIPES = {
  //three dishes per conditon
  normal: [
    "recipe_93cbf92ffaf9ed77ca8e994fe37f0b00",
    "recipe_93b072c256f0c872828739f513845c40",
    "recipe_3f0e1e064ff883a51d4465e21e39d3a5",
    // some normal dishes
  ],
  hot: [
    "recipe_e6a7f65164a66214485b66c0adb29d9f",
    "recipe_b2b04888a2da6a8982b6ff8df7c23170",
    "recipe_73b8318e4a125489cb4afa0b426af31e",
    // salads and wraps
  ],
  cold: {
    rainy: [
      "recipe_e9dc2828174fb39cc9cd55b99513fded",
      "recipe_bcf47f108aaae018cea2803d58cd2f6d",
      "recipe_8e0360adf98ab17c1b50d8f4003e7d3a",
      // some soups
    ],

    snowy: [
      "recipe_6d86591aaf8f4923910d3c051fe343d4",
      "recipe_14c68e61108cc0829ee6ef279f79b860",
      "recipe_a3cdb1df44fe9648eddcdc8e529fd9f1",
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
  var inputLocation = $(`#inputLocation`).val().trim();
  if (inputLocation === "") {
    M.toast({
      html: "You must enter a city",
    });
    return false;
  }

  getWeatherData(inputLocation);
};

var displayRecipeSuggestions = (recipeSuggestions) => {
  $("#recipeSuggestions").html("");
  recipeSuggestions.forEach((r) => {
    $.ajax({
      url: `https://api.edamam.com/api/recipes/v2/${r}?type=public&app_id=72992508&app_key=f051ae9c54b955c20f627d764a400a0d&q=chicken%20soup`,
      success: (response) => {
        var recipe = response.recipe;
        var recipeName = recipe.label;
        var imageSrc = recipe.image;

        var recipeEl = $(`<div class="col s12 m6">`);

        var templateHTML = `<div class="card">
          <div class="card-image">
            <img src="${imageSrc}" />
            <span class="card-title">${recipeName}</span>
            <a
              class="
                btn-floating
                halfway-fab
                waves-effect waves-light
                red
              "
            >
              <i
                class="material-icons view-recipe"
                data-recipeId="${r}"
                >menu_book</i
              >
            </a>
            </div>
          </div>
        </div>`;
        recipeEl.html(templateHTML);
        $("#recipeSuggestions").append(recipeEl);

        $(".view-recipe").on("click", getRecipeData);
      },
    });
  });
};

var getWeatherData = (city) => {
  var weatherData = {};

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
    success: (response) => {
      weatherData = {
        currentWeather: response.weather[0].main,
        currentTemperature: response.main.temp,
      };
      console.log(weatherData);
      chooseRecipesFromWeather(weatherData);
    },
  });
};

var getRecipeData = (evt) => {
  var recipeId = evt.target.dataset.recipeid;
  $.ajax({
    url: `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=72992508&app_key=f051ae9c54b955c20f627d764a400a0d&q=chicken%20soup`,
    success: (response) => {
      displayRecipeInModal(response.recipe);
    },
  });
};

// TODO
var chooseRecipesFromWeather = (weatherData) => {
  if (weatherData.currentWeather === "Rain") {
    displayRecipeSuggestions(RECIPES.cold.rainy);
  } else if (weatherData.currentWeather === "Snow") {
    displayRecipeSuggestions(RECIPES.cold.snowy);
  } else if (weatherData.currentTemperature > 72) {
    displayRecipeSuggestions(RECIPES.hot);
  } else if (weatherData.currentTemperature < 72) {
    displayRecipeSuggestions(RECIPES.cold.rainy.concat(RECIPES.cold.snowy));
  } else {
    displayRecipeSuggestions(RECIPES.normal);
  }
};

var displayRecipeInModal = (recipeData) => {
  $("#recipeName").text(recipeData.label);
  // Display Recipe Name

  // Display Recipe Servings
  $("#recipeServings").text(recipeData.yield);

  // Display Recipe Ingredients
  var recipeIngredientsEl = $("#recipeIngredients");
  recipeIngredientsEl.html("");
  recipeData.ingredientLines.forEach((l) => {
    var recipeIngredient = $("<li>");
    recipeIngredient.text(l);
    recipeIngredientsEl.append(recipeIngredient);
  });

  // Display Link to Instructions
  $("#recipeInstructions").text(recipeData.source);
  $("#recipeInstructions").attr("href", recipeData.url);

  // Display Nutrition Information
  var nutrients = recipeData.totalNutrients;
  var calories = Math.round(nutrients.ENERC_KCAL.quantity);
  var fat = Math.round(nutrients.FAT.quantity);
  var carbs = Math.round(nutrients.CHOCDF.quantity);
  var fiber = Math.round(nutrients.FIBTG.quantity);
  var sugar = Math.round(nutrients.SUGAR.quantity);
  var protein = Math.round(nutrients.PROCNT.quantity);
  // Calories
  $("#recipeCalories").text(calories);

  // Total Fat
  $("#recipeFat").text(fat);

  // Total Protein
  $("#recipeProtein").text(protein);

  // Total Carbohydrates
  $("#recipeCarbs").text(carbs);

  // Total Sugar
  $("#recipeSugar").text(sugar);

  // Total Fiber
  $("#recipeFiber").text(fiber);

  // Open the modal
  $("#recipeModal").modal("open");
};

/* 
  Testing
*/
// Displays Modal with Sample Recipe Information
// $.ajax({
//   url: "https://api.edamam.com/api/recipes/v2/recipe_697f97298fa57124c35067fac86d57d3?type=public&app_id=72992508&app_key=f051ae9c54b955c20f627d764a400a0d&q=chicken%20soup",
//   success: (response) => {
//     console.log(response.recipe);
//     displayRecipeInModal(response.recipe);
//   },
// });

// getWeather("Mililani");
