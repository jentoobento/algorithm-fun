/**
 * Given an array of numbers, add one and return the result as an array of numbers.
 * Examples:
 * [1, 2, 3] => [1, 2, 4]
 * [9] => [1, 0]
 * [1, 2, 9] => [1, 3, 0]
 * [9, 9] => [1, 0, 0]
 * 
 * Assume all elements in the array are whole numbers.
 * Assume there is at least 1 element in the array.
 * Assume all elements in the array are between 0-9.
 */

function addOneHelper(arr, curr) {
  // if the curr number is less than 9 then add one and done
  if(arr[curr] < 9) {
    arr[curr] = arr[curr] + 1;
  } else {
    // this digit becomes a 0, and now must add 1 to the previous element
    arr[curr] = 0;
    if (curr !== 0) {
      // if there is a previous element, then call this function again with the new curr
      addOneHelper(arr, curr - 1);
    } else {
      // else there is no previous element, in which case just add 1
      arr.unshift(1);
    }
  }
  return arr;
}

function addOne(array) {
  const lastElement = array.length - 1;
  console.log(addOneHelper(array, lastElement))
}

addOne([1, 2, 3]); // [1, 2, 4]
addOne([9]); // [1, 0]
addOne([1, 2, 9]); // [1, 3, 0]
addOne([9, 9]); // [1, 0, 0]
addOne([9, 9, 0]); // [9, 9, 1]
addOne([3, 9]); // [4, 0]
addOne([0, 0, 9]); // [0, 1, 0]
addOne([9, 0, 9]); // [9, 1, 0]
addOne([0]); // [1]
