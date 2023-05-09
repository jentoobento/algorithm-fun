/** 
Given an array of birthday candles represented by numbers, return the
age of the person's birthday and the number of tallest candles. The number
representing each candle is that candle's height in inches.

Example:
Given: [1,2,3,2,1]
The age of the person's birthday is: 5.
The tallest candle is 3 inches and there is only 1 of them.

Given: [2,3,4,4,4,3,2]
The age of the person's birthday is: 7.
The tallest candle is 4 inches and there are 3 of them.

Assumptions:
- The array has positive whole numbers only.
- The array will have at least 1 element in it.
*/

const birthdayCandles = (candles: number[]) => {
  // Regular sort() doesn't correctly sort numbers above 10
  const sortedCandles = candles.sort((a, b) => a < b ? 1 : -1)

  let numberOfTallestCandles = 0
  const tallestCandle = sortedCandles[0]

  for (let i = 0; i < sortedCandles.length; i += 1) {
    if (sortedCandles[i] === tallestCandle) numberOfTallestCandles += 1
    else break
  }

  console.log(`Age: ${candles.length}`)
  console.log(`Tallest candle: ${tallestCandle} inches`)
  console.log(`Number of ${tallestCandle} inch candles: ${numberOfTallestCandles}`)
}

birthdayCandles([1,2,3,2,1])
birthdayCandles([2,3,4,4,4,3,2])
birthdayCandles([7,15,3,5,3,5,5,5,3,15,5,3,15])
birthdayCandles([1])
birthdayCandles([10, 1, 11])
