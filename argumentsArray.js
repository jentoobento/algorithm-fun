/**
 * given 2 numbers return their sum.
 * example:
 * addTogether(2, 3) should return: 5
 * if invoked twice, return a function that returns their sum.
 * example:
 * addTogether(2)(3) should return: 5
 * if anything other than 2 numbers is entered return an error statement.
 * example:
 * addTogether(2, 'three') should return an error.
 */

function addTogether(a, b) {
  let errMsg = "Sorry please enter 2 integers.";
  if (arguments.length > 2) {
    return errMsg;
  }
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  } else if (Number.isInteger(a) && b == undefined) {
    let firstNum = arguments[0]; // keep track of the first argument
    return function(c) {
      if (Number.isInteger(c)) {
        return firstNum + c;
      } else {
        return errMsg;
      }
    };
  } else {
    return errMsg;
  }
}

addTogether(2, 3); // 5
addTogether(2)(3); // 5
addTogether(2)("3"); // error
addTogether(2, "3"); // error
addTogether(2, 2, 2); // error
