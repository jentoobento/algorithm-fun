/**
 * Given a random amount of coins in US currency, determine the output of paper money
 * and/or leftover coin amount.
 * Example: given 1035 cents return 1 ten dollar bill, 3 dimes, 1 nickel
 */

function convertToCash(coins) {
  let dollars = Math.floor(coins / 100);
  let cents = coins % 100;

  let money = {
    hundreds: 0,
    fifties: 0,
    twenties: 0,
    tens: 0,
    fives: 0,
    ones: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  while (dollars >= 100) {
    money.hundreds++;
    dollars -= 100;
  }
  while (dollars >= 50) {
    money.fifties++;
    dollars -= 50;
  }
  while (dollars >= 20) {
    money.twenties++;
    dollars -= 20;
  }
  while (dollars >= 10) {
    money.tens++;
    dollars -= 10;
  }
  while (dollars >= 5) {
    money.fives++;
    dollars -= 5;
  }
  money.ones = dollars;
  
  while (cents >= 25) {
    money.quarters++;
    cents -= 25;
  }
  while (cents >= 10) {
    money.dimes++;
    cents -= 10;
  }
  while (cents >= 5) {
    money.nickels++;
    cents -= 5;
  }
  money.pennies = cents;

  let result = coins + " coins is equal to ";
  Object.keys(money).forEach(currency => {
    if (money[currency]) {
      result += money[currency] + " " + currency + " ";
    }
  });
  return result;
}

console.log(convertMoney(1036));
console.log(convertMoney(10489));
