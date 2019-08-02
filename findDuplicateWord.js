/**
 * given a sentence, find the duplicate word. assume that there is a duplicate word.
 * duplicates words are case sensitive -> 'Hello' !== 'hello'
 * special characters do not count -> 'Bye.' == 'Bye'
 */

let s = "We    are    so so happy here here."

function findDuplicate(s) {
  let arr = s.split(' ')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[^a-zA-Z]/)) {
      arr[i] = arr[i].slice(0, -1)
    }
  }

  arr.sort()

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return arr[i]
    }
  }
}

function findDuplicate2(s) {
  let arr = s.split(' ')
  let word = ''

  for (let i = 0; i < arr.length; i++) {
    // word = arr[i].toLowerCase() // uncomment to search for duplicates without case sensitivity
    word = arr[i]

    if (word === '') { // do not match with empty strings
      continue
    } else if (arr[i].match(/[^a-zA-Z]/)) { // remove ending special characters such as .,;?!
      word = arr[i].slice(0, -1)
    }

    for (let j = i + 1; j < arr.length; j++) {
      if (word === arr[j]) { // if duplicate found
        return word
      }
    }
  }
}

console.log(findDuplicate2(s))
