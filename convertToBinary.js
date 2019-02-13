/**
 * given a number convert it to binary
 */

function convertDecimalToBinary(num, binary) {
  if (Math.floor(num) !== 0) {
    binary.unshift(Math.floor(num % 2)) // add the remainder to the array
    convertDecimalToBinary((num / 2), binary) // return the result as the quotient
  } else {
    if (binary.length < 8) { // add optional leading zeros
      binary = [0, 0, 0, 0, 0, 0, 0].slice(0, 8 - binary.length).concat(binary)
    }
    console.log(binary.join(''))
  }
}

convertDecimalToBinary(2, []) // 00000010
convertDecimalToBinary(147, []) // 10010011
convertDecimalToBinary(254, []) // 11111110
