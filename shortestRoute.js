/**
 * given an array and a specific element, 
 * find the shortest route to reach that element.
 */

const arr = [1, 2, 3, 4, 5];
const target = 4;
let count = 1;

if (arr[0] == target) { // determine if the target is the first element
    console.log('you are at the target')
} else {
    // determine which direction to begin counting by finding out where the target is located in the array
    let medianIndex = Math.floor(arr.length / 2);
    let targetIndex = arr.indexOf(target);
    if (targetIndex > medianIndex) { // target is in the back half of the array
        for (let i = arr.length - 1; i > 0; i--) {
            if (target !== arr[i]) {
                count += 1;
            } else {
                console.log('the shortest route is backwards', count, 'times')
                break; // prevent duplicates
            }
        }
    } else { // target is in the front half of the array
        for (let i = 1; i < arr.length; i++) {
            if (target !== arr[i]) {
                count += 1;
            } else {
                console.log('the shortest route is forwards', count, 'times')
                break;
            }
        }
    }
}
