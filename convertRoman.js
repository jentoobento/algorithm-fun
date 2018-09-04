/**
 * given a roman numeral convert to regular number
 */

function convertRoman(str) {
  const arr = str.toUpperCase().split('');
  const numArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'I':
        numArr.push(1);
        break;
      case 'V':
        numArr.push(5);
        break;
      case 'X':
        numArr.push(10);
        break;
      case 'L':
        numArr.push(50);
        break;
      case 'C':
        numArr.push(100);
        break;
      case 'D':
        numArr.push(500);
        break;
      case 'M':
        numArr.push(1000);
        break;
      default:
        break;
    }
  }

  let i = numArr.length - 1;
  let finalNum = 0;
  while (i >= 0) {
    if (numArr[i] > numArr[i - 1]) {
      finalNum += numArr[i] - numArr[i - 1];
    } else {
      finalNum += numArr[i] + numArr[i - 1];
    }
    i -= 2;
  }
  console.log(str, "=", finalNum);
}
