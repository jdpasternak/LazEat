# Pseudo Code

## Contents

- [Pages](#pages)
- [Interactive Objects](#interactive-objects)
- [Utilities](#utilities)
- [Additional Features](#additional-features)

---

## Pages

- [Main Page](#main-page)
- [Recipe Page](#recipe-page)

### Main Page

This is the first page the user sees when visiting the application's site. It is represented by [wireframe.png](./assets/images/wireframe.png).

### Recipe Page (Modal)

When a user selects a recipe, a modal will appear describing the recipe ingredients and steps to make the recipe.

At the bottom of the modal, nutrition facts will be display. Each ingredient's data will be pulled from the selected nutrition facts API and computation will be performed to determine the correct macronutrient value, calorie count, and overall portion size.

---

## Interactive Objects

- [Button with text "So where are you, Lazee?"](#Button-with-text-"So-where-are-you,-Lazee?")
- [Suggested recipes](#suggested-recipes)

### Button with text "So where are you, Lazee?"

This button is the main interaction with the application. When it is pressed, the user is prompted to either input or select their location to begin.

This may also be a simple input with the text as a placeholder. TBD

### Suggested Recipes

Images of recipes that are suggested based on location. When an image is clicked or tapped, the recipe will display to the user in a modal.

---

## Utilities

These are functions neccessary to streamline the function of the application. Primarily, these fall in the category of unit conversion as recipe ingredients and their nutrition facts info may be in different units.

### Volume Conversion

#### Liquid Volume

- cups \ 8 = fluid_ounce
- fluid_ounce \* 19.57 = milliliter
- fluid_ounce \ 32 = quarts
- quarts \* 0.946 \* 1000 = milliliter
- quarts \* 32 = ounces
- quarts \ 4 = gallons
- gallons \* 3.785 \* 1000 = milliliter
- gallons \* 4 = quarts

#### Mass

- ounces \* 28.35 = grams
- ounces \ 16 = pounds
- pounds \* 0.4536 \* 1000 = grams
- pounds \* 16 = ounces
- kg \* 1000 = grams
- grams \ 1000 = kg

---

## Additional Features

These are features that are nice-to-haves.

- [Favorites](#favorites)
- [Add Custom Recipes](#add-custom-recipes)

### Favorites

Users can add recipes to a Favorites list for later reivew. The favorites list will be stored in localStorage. Clicking on `Favorites` will display to the user their favorited recipes to browse through.

### Add Custom Recipes

Users can create and add their own recipe to the list of recipes, indicating in what type of weather they enjoy eating it (hot, cold, rainy, snowy, etc.).
