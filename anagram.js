/**
 * given an array, find the anagrams and group them into separate arrays,
 * excluding exact duplicates.
 */

const arr = ['cat', 'cat', 'tac', 'hit', 'hti', 'ith', 'atc'];

const anagramObj = {
    // '116, 97, 99': ['cat', 'tac', 'atc'],
    // '104, 105, 116': ['hit', 'hti', 'ith']
}

for (let i = 0; i < arr.length; i++) {
    let charCodeArr = [];
    for (let j = 0; j < arr[i].length; j++) {
        charCodeArr.push(arr[i].charCodeAt(j));
    }
    charCodeArr.sort();

    if (anagramObj[charCodeArr]) { // if this key pair exists, then an anagram was found
        if (!anagramObj[charCodeArr].includes(arr[i])) {
            anagramObj[charCodeArr].push(arr[i]);
        } // else do nothing; do not add exact duplicates
    } else { // this is a unique key
        anagramObj[charCodeArr] = [arr[i]];
    }
}

const finalArr = [];

for (let k in anagramObj) {
    finalArr.push(anagramObj[k])
}

console.log(finalArr)
