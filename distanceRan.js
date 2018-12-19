/**
 * given an array containing the names of runners, track distance (m), and laps,
 * determine how far each runner has run.
 */

const runners = [
    ['John', 500, 2, 3, 2, 2, 2],
    ['Mike', 300, 1, 1, 2],
    ['Bob', 400, 4, 4, 5, 4],
]

for (let i = 0; i < runners.length; i++) {          // loop through all the runners
    let name = runners[i][0];                       // set the name of the runner to the first element
    let trackSize = runners[i][1];                  // set the tracksize to the second element
    let distance = 0;                               // set the total distance ran to zero

    for (let j = 2; j < runners[i].length; j++) {   // loop through the number of laps each runner has ran
        distance += runners[i][j] * trackSize;      // multiply the number of laps by the tracksize and add it to the total distance ran
    }
    console.log('total distance ran by', name, 'is', distance, 'm'); // return the name of the runner and the total distance that they ran
}
