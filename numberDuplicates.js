/**
 * given an array of strings with only letters,
 * find the duplicates and number them
 */

const arr = ['a', 'a', 'b', 'b', 'b', 'c']

const objects = {};

for (let i = 0; i < arr.length; i++) {
    if (objects[arr[i]] >= 1) { // duplicate found
        let count = objects[arr[i]];
        objects[arr[i]] = count + 1;
    } else { // unique found
        let name = arr[i];
        let count = 1;
        objects[name] = count;
    }
}

const finalArr = [];

for (let i in objects) {
    if (objects[i] > 1) {
        finalArr.push(i);
        for (let j = 1; j < objects[i]; j++) {
            finalArr.push(i + j);
        }
    } else {
        finalArr.push(i);
    }
}

console.log(finalArr)
