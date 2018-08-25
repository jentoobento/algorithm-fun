/**
 * determine the optimal time to buy and sell 1 stock 
 * by determining the highest possible profit
 * 
 */

var arr = [7, 1, 5, 3, 2, 6, 1, 4, 0, 9, 7, 1, 11];

var lowest = arr[0];
var lowestIndex = 0;
var profit = undefined;
var highestProfit = 0;
var buyDay = undefined;
var buyPrice = 0;
var sellDay = undefined;
var sellPrice = 0;
var message = [];

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
