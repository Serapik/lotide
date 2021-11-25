const assertEqual = function(actual, expected) {
   let output = eqArrays(actual, expected);
    console.log(output);  //<--
    if (output) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
    }
  };


//   return console.log("Assertion Passed: " + actual + " === " + expected);
//    return console.log("Assertion Failed: " + actual + " !=== " + expected);

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1,3);