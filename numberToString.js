/**
 * given a number, convert to its English word equivalent
 * assume positive numbers only
 */


function singleNumToEng(num) {
    switch (Number(num)) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      default:
        return 'error';
    }
  }
  
  function convertSpecialCases(num) {
    switch (Number(num)) {
      case 10:
        return 'ten';
      case 11:
        return 'eleven';
      default:
        return 'error';
    }
  }
  
  function convertNumToEngPrefix(num) {
    switch (Number(num)) {
      case 2:
        return 'twen';
      case 3:
        return 'thir';
      case 5:
        return 'fif';
      default:
        return 'error';
    }
  }
  
  function convertToEng(num) {
    let numStr = num.toString();
    let str = '';
    if (numStr.length === 1) {
      str += singleNumToEng(num);
    }
    if (numStr.length === 2) {
      if (numStr[0] == 1) {
        str += convertNumToEngPrefix(numStr[1]) + 'teen';
      } else if (numStr[1] == 0) {
        str += convertNumToEngPrefix(numStr[0]) + 'ty';
      } else {
        str += convertNumToEngPrefix(numStr[0]) + 'ty' + singleNumToEng(numStr[1]);
      }
    }
    return str;
  }
  
  function convertRecursively(num) {
    let numStr = num.toString();
    let str = '';
    if (numStr.length === 3) {
      str += singleNumToEng(numStr[0]) + ' hundred and ' + convertToEng(num % 100);
    }
    return str;
  }
  
  
  console.log(convertRecursively(103))
  
  
  console.log(convertToEng(50))
