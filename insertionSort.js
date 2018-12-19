/**
 * given an array and a number n, find the nth smallest number in the array.
 * do not use any sort() methods. do not delete duplicates.
 * assume all positive numbers and n exists.
 */

function findNthSmallest(arr, n) {

  const sorted = [] 
  sorted.push(arr[0]) 
  arr.shift() 

  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] >= sorted[i]) { 
      sorted.push(arr[i])
    } else {
      for (let j = sorted.length - 1; j >= 0; j--) {
        if (sorted[j] < arr[i]) {
          sorted.splice(j + 1, 0, arr[i])
          break;
        } else if (j == 0) {
          sorted.unshift(arr[i])
        }
      }
    }
  }
  return `The ${n}th smallest number is ${sorted[n - 1]}`
}


console.log(findNthSmallest([5, 9, 13, 4, 1, 6], 2))    // 1, 4, 5, 6, 9, 13
console.log(findNthSmallest([4, 5, 3, 2, 6], 1))        // 2, 3, 4, 5, 6
console.log(findNthSmallest([1, 1, 0, 4], 3))           // 0, 1, 1, 4
console.log(findNthSmallest([5, 7, 8, 3, 6, 7, 2], 5))  // 2, 3, 5, 6, 7, 7, 8
