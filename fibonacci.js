/**
 * fibonacci is the 2 preceeding numbers added together
 */

let count = 3;
let first = 0;
let second = 1;
let sum = 0;

function fibonacci(stopAt) {
    if (stopAt < 1) {
        return 'enter num >= 1';
    } else if (stopAt === 1) {
        return 0;
    } else if (stopAt === 2) {
        return 1;
    } else {
        count++;
        sum = first + second;
        first = second;
        second = sum;
        if (count < stopAt) {
            fibonacci(stopAt);
        } else {
            return sum;
        }
    }
}

