/**
 * given a letter and a string, determine if the letter exists in the string.
 */

function findLetter(singleLetter, someString) {
    let letter = singleLetter.toLowerCase();
    let str = someString.toLowerCase();
    let found = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            found = true;
            break;
        }
    }
    return found ? "found!" : "not found!";
}

console.log(findLetter('a', 'cat'));
console.log(findLetter('b', 'cat'));
