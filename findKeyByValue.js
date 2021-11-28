const findKeyByValue = function(objectToCheck, valueToCheck) {
  let keyArray = Object.keys(objectToCheck);
  for (const element of keyArray) {
    if (objectToCheck[element] === valueToCheck) {
      return element;

    }
  }
};

module.exports = findKeyByValue;