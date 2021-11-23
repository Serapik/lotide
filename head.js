const assertEqual = function(actual, expected) {
  if (actual === expected) {
  return console.log("Assertion Passed: " + actual + " === " + expected);
  } else return console.log("Assertion Failed: " + actual + " !=== " + expected);
};
const head = function(arr) {
  return arr[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1,3);


