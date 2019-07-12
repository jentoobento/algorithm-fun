/**
 * given 2 numbers, determine if an operation can equal 24.
 * if so, return the operation that gives 24, else return null.
 */

equal24 = (x, y) => {
  // validate
  if(isNaN(x) || isNaN(y)) return null;

  // determine operation to give 24
  if (x + y === 24) return 'added';
  if (x - y === 24 || y - x === 24) return 'subtracted';
  if (x * y === 24) return 'multiplied';
  if (x / y === 24 || y / x === 24) return 'divided';
  return null;
}

console.log(equal24(15, 9)) // added
console.log(equal24(26, 2)) // subtracted
console.log(equal24(2, 26)) // subtracted
console.log(equal24(12, 2)) // multiplied
console.log(equal24(48, 2)) // divided
console.log(equal24(2, 48)) // divided
console.log(equal24(1, 2)) // null

console.log(equal24('abc', 2)) // null
console.log(equal24(1)) // null
