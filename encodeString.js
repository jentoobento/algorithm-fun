/**
 * given an array of strings, return the codename of each using the following rules:
 * 1. 1 word: return the first 4 letters
 * 2. 2 words: return the first 2 letters of each word
 * 3. 3 words: return the first letter of the first and second word and first 2 letters of the third
 * 4. 4 or more words: return the first letter of the first 4 words
 * 5. 1 word, length less than 4: return word with "-" to make the codeword length 4
 * 6. any special characters are treated as a space
 * 7. codename is uppercase
 * 
 * assume all strings have a minimum length of 2.
 * 
 * example:
 * Bug -> BUG-
 * Cats -> CATS
 * Horse -> HORS
 * Black Cat -> BLCA
 * Small Fluffy Dog -> SFDO
 * Big Round Small Turtle -> BRST
 * Very Big Round Small Turtle -> VBRS
 * Yellow-Tailed Fish -> YTFI
 */

encodeName = str => {
    let newStr = str.replace(/[^a-zA-Z]/g, ' ')
    let names = newStr.split(' ')
    let length = names.length
    switch(length){
      case 1: 
        newStr += '--' // takes care of any strings with length less than 4
        return newStr.slice(0, 4).toUpperCase()
      case 2:
        return `${names[0].slice(0, 2)}${names[1].slice(0, 2)}`.toUpperCase()
      case 3: 
        return `${names[0][0]}${names[1][0]}${names[2].slice(0, 2)}`.toUpperCase()
      default: // length of 4 or more
        return `${names[0][0]}${names[1][0]}${names[2][0]}${names[3][0]}`.toUpperCase()
    }
  }
  
  codeNames = arr => {
    let result = []
    for(let i = 0; i< arr.length; i++){
      result.push(encodeName(arr[i]))
    }
    return result
  }
  
  
  console.log(encodeName('abcdef')) // ABCD
  console.log(encodeName('ab')) // AB--
  console.log(encodeName('abc abc')) //ABAB
  console.log(encodeName('abc abc abc')) // AAAB
  console.log(encodeName('abc abc abc abc')) //AAAA
  console.log(encodeName('abc abc abc abc abc')) //AAAA
  
  console.log(codeNames(['abcd', 'abc-def', 'abc abc', 'abc abc abc'])) // [ 'ABCD', 'ABDE', 'ABAB', 'AAAB' ]
