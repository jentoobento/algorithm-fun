/**
 * Given a number, calculate the difference between the product of
 * its digits and the sum of its digits.
 * 
 * Assumptions:
 * 1. The number given is always a number.
 * 2. The number given is always positive.
 * 3. The number given is always a whole number.
 * 
 * Example:
 * 
 * Given: 1234
 * Return: 14
 * 
 * Given: 12345
 * Return: 105
 * 
 * Given: 1
 * Return: 0
 * 
 * Given: 45
 * Return: 11 
 */

function productAndSumDifference(num) {
  let product = 1;
  let sum = 0;
  num.toString().split('').forEach((digit) => {
    product *= parseInt(digit);
    sum += parseInt(digit);
  });
  return product - sum;
}

console.log(productAndSumDifference(1234));
console.log(productAndSumDifference(12345));
console.log(productAndSumDifference(1));
console.log(productAndSumDifference(45));
