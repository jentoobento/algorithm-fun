/*
enter fizzbuzz if the number if divisible by 3 or 5,
fizz if divisible by 3, buzz if divisible by 5,
and nothing if neither applies
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else if (i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}

