/**
 * given 2 sorted arrays, merge them into 1 sorted array
 * do not use any library methods
 */

let a = [1, 2, 3]
let b = [2, 4, 5, 6]

function mergeSort(left, right) {
  let leftPos = 0
  let rightPos = 0
  let arr = []

  // in two different sized arrays, there will be a point where the left or right positions will be undefined
  while (left[leftPos] !== undefined && right[rightPos] !== undefined) {
    if (left[leftPos] < right[rightPos]) { // the left number is less
      arr.push(left[leftPos])
      leftPos++
    } else if (right[rightPos] < left[leftPos]) { // the right number is less
      arr.push(right[rightPos])
      rightPos++
    } else { // the two numbers are equal
      arr.push(left[leftPos], right[rightPos])
      leftPos++
      rightPos++
    }
  }

  // since the arrays are sorted, concat the rest of the remaining array onto the back of the result array
  return arr.concat(left[leftPos] === undefined ? right.slice(rightPos) : left.slice(leftPos))
}

console.log(mergeSort(a, b))
