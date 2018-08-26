/**
 * determine the optimal time to buy and sell 1 stock 
 * by determining the highest possible profit
 * 
 */

const arr = [7, 1, 5, 3, 2, 6, 1, 4, 0, 9, 7, 1, 11];

let lowest = arr[0];
let lowestIndex = 0;
let profit = undefined;
let highestProfit = 0;
let buyDay = undefined;
let buyPrice = 0;
let sellDay = undefined;
let sellPrice = 0;
let message = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
        lowest = arr[i];
    }
    if (lowest < arr[i + 1]) {
        lowestIndex = i;
        for (let j = lowestIndex + 1; j < arr.length; j++) {
            profit = arr[j] - lowest;
            if (profit > highestProfit) {
                highestProfit = profit;
                buyDay = lowestIndex;
                buyPrice = lowest;
                sellDay = j;
                sellPrice = arr[j]
            }
        }
        message.push('buy on day ' + buyDay + ' for $' + buyPrice + ' sell on day ' + sellDay + ' for $' + sellPrice + ' profit is $' + highestProfit);
    }
    if (!profit) {
        message.push('dont buy, no profit can be made')
    }
}
console.log(message.pop())

/**
 * solution is probably not the best way to do this as it involves 2 loops
 * but it works....
 */
