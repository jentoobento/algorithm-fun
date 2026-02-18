/**
 * Given a number representing an amount of money, and given the price
 * of 1 candy, calculate the total number of candies you can eat.
 * However, the store is having a discount. For every 3 candies you
 * buy, you get 1 candy for free.
 *
 * Assume amount of money is always a number.
 * Assume candy cost is always a positive non-zero number.
 *
 * Example: Given 10 dollars, and 1 candy costs 2 dollars, you can
 * buy 5 candies. You get 1 candy for free, so you can eat 6 candies total.
 */

const calculateTotalCandy = (money, priceOfCandy) => {
  // Return early
  if (money < priceOfCandy || money === 0) {
    return 0;
  }

  let purchasedCandy = 0;
  let freeCandy = 0;

  for (let i = 0; i < money; i += priceOfCandy) {
    purchasedCandy += 1;

    if (purchasedCandy % 3 === 0) {
      freeCandy += 1;
    }
  }

  return purchasedCandy + freeCandy;
};

console.log(calculateTotalCandy(10, 2)); // 6
console.log(calculateTotalCandy(0, 10)); // 0
console.log(calculateTotalCandy(5, 10)); // 0
console.log(calculateTotalCandy(15, 1)); // 20

