/**
 * given an array of numbers, where each number represents a person, find the celebrity among them if a celebrity exists.
 * given the boolean function: doYouKnow(a, b) where a is the person you are asking and b is the person you are asking about.
 * if there is a celebrity, everyone in the array will know who the celebrity is, but the celebrity themselves will not know anyone.
 * there cannot be multiple celebrities.
 * find the solution with the least number of calls to the function doYouKnow(a, b)
 */

let arr = ['a', 'b', 'c']

// a -> b
// b -> c
// c -> none

let possibleCelebrity = arr[0];

function checkCelebrity(possibleCelebrity) {
  for (let i = 0; i < arr.length; i++) {
    if (doYouKnow(possibleCelebrity, arr[i])) {
      // possibleCelebrity is not celebrity
      checkCelebrity(arr[i])
    }
  }
  return possibleCelebrity
}

console.log('The celebrity is', possibleCelebrity)
