/**
 * given an array of numbers, move all zeros to the end without 
 * disrupting the array order or making a copy of the array
 */

function moveZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
      }
    }
    console.log(arr);
  }
  
