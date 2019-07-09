 /**
 * given an array of times in D:HH:MM:SS format, sum them and return the result.
 * the sum should follow regular time format, so any minute higher than 59, should result
 * in an additional hour and revert minute to zero. the same for seconds.
 * for example: 
 * 0:00:59 + 0:00:01 should result in: 0:01:00 since there is 59 minutes + 1 minute = 1 hour and 0 minutes.
 *
 * the sum numbers should be formatted to 2 digits except hours, which should not be formatted.
 * 
 * assume all times given are strings in the format stated above. (D:HH:MM:SS)
 * assume all times are <= 59 and >= 0 except days, which should be >= 0.
 * assume all numbers are positive integers.
 * 
 * examples:
 * ["1:23:45"] -> "1:23:45"
 * ["1:03:45", "1:23:05"] -> "2:26:50"
 * ["5:39:42", "10:02:08", "8:26:33"] -> "24:08:23"
 */

timeSum = arr => {
  if(arr.length === 1){
    return arr[0]
  }
  let result = arr.reduce((prev, curr) => {
    // separate into days/hours/min/sec
    let days = parseInt(curr.split(':')[0])
    let hours = parseInt(curr.split(':')[1])
    let min = parseInt(curr.split(':')[2])
    let sec = parseInt(curr.split(':')[3])

    if ((prev.sec + sec) >= 60) {
      min += 1
      sec = 0;
      prev.sec = 0;
    }
    if ((prev.min + min) >= 60) {
      hours += 1;
      min = 0;
      prev.min = 0;
    }
    if ((prev.hours + hours) >= 24) {
      days += 1;
      hours = 0;
      prev.hours = 0;
    }

    return { days: prev.days + days, hours: prev.hours + hours, min: prev.min + min, sec: prev.sec + sec }
  }, { days: 0, hours: 0, min: 0, sec: 0 });

  return `${result.days}:${String(result.hours).padStart(2, '0')}:${String(result.min).padStart(2, '0')}:${String(result.sec).padStart(2, '0')}`
}

console.log(timeSum(["0:01:23:45"])) // "0:01:23:45"
console.log(timeSum(["0:01:03:45", "0:01:23:05"])) // "0:02:26:50"
console.log(timeSum(["0:01:03:45", "0:01:23:15"])) // "0:02:27:00"
console.log(timeSum(["0:05:39:42", "0:10:02:08", "0:08:26:33"])) // "0:24:08:23"
console.log(timeSum(["0:00:00:50", "0:00:00:10"])) // "0:00:01:00"
console.log(timeSum(["0:00:59:50", "0:00:00:10"])) // "0:01:00:00"
console.log(timeSum(["0:00:59:50", "0:00:00:10", "0:23:00:00"])) // "1:00:00:00"
console.log(timeSum(["0:23:00:00", "0:01:00:00" ])) // "1:00:00:00" 
