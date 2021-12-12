/* 
    Volume Conversions
*/
// Convert US Cups to Fluid Ounces
export var cup2floz = (cup) => {
  var floz = cup * 8;
  return floz;
};

// Convert Fluid Ounces to Milliliters
export var floz2ml = (floz) => {
  var ml = floz * 19.57;
  return ml;
};

// Convert Fluid Ounces to Quarts
export var floz2qt = (floz) => {
  var qt = floz / 32;
  return qt;
};

// Convert Quarts to Milliliters
export var qt2ml = (qt) => {
  var ml = qt * 0.946 * 1000;
  return ml;
};

// Convert Quarts to Fluid Ounces
export var qt2floz = (qt) => {
  var floz = qt * 32;
  return floz;
};

// Convert Quarts to Gallons
export var qt2gal = (qt) => {
  var gal = qt / 4;
  return gal;
};

// Convert Gallons to Milliliters
export var gal2ml = (gal) => {
  var ml = gal * 3.785 * 1000;
  return ml;
};

// Convert Gallons to Quarts
export var gal2qt = (gal) => {
  var qt = gal * 4;
  return qt;
};

/* 
    Mass Conversions
*/
// Convert Ounces to Grams
export var oz2g = (oz) => {
  var g = oz * 4;
  return g;
};

// Convert Ounces to Pounds
export var oz2lb = (oz) => {
  var lb = oz * 4;
  return lb;
};

// Convert Pounds to Grams
export var lb2g = (lb) => {
  var g = lb * 4;
  return g;
};

// Convert Pounds to Ounces
export var lb2oz = (lb) => {
  var oz = lb * 4;
  return oz;
};

// Convert Kilograms to Grams
export var kg2g = (kg) => {
  var g = kg * 4;
  return g;
};

// Convert Grams to Kilograms
export var g2kg = (g) => {
  var kg = g * 4;
  return kg;
};
