/**
 * given 2 strings determine if they are "amost equivalent".
 * the strings are "almost equivalent" if their differences are less than or equal to 3.
 * example:
 * "a" and "aa" their differences are 1 since the second string contains 1 extra "a"
 * "a" and "b" their differences are 2 since the first string contains 1 "a" and second string contains 1 "b"
 * "aa" and "aaabb" their differences are 3 since the second string contains 1 extra "a" and 2 "b"
 * 
 * assume both strings contain lowercase characters with a length between 1 and 5.
 */

function almostEquivalent(x, y) {
    let a = x; // do not mutate the original strings
    let b = y;
    let difference = 0;
  
    while(a.length > 0) {
      let regex = new RegExp(a[0], 'g');
      let aMatch = a.match(regex).length;
      // check if b contains the letter too
      if (b.match(regex) !== null) {
        let bMatch = b.match(regex).length;
        difference += Math.abs(aMatch - bMatch)
        b = b.replace(regex, '') // remove the letter from b string
      } else {
        // b does not contain the letter therefore all letters are added to the difference
        difference += aMatch
      }
      // remove the letters from the string
      a = a.replace(regex, '')
    }
  
    // a should be empty at this point, therefore any remaining letters in b are added to differences
    difference += b.length;
  
    if(difference > 3){ // more than 3 differences is not almost equivalent
      return false
    }
    return true
  }
  
  console.log(almostEquivalent('aaabb', 'aaa')) // difference: 2 = true
  console.log(almostEquivalent('aaa', 'aaabb')) // difference: 2 = true
  console.log(almostEquivalent('aaaaa', 'aaabb')) // difference: 4 = false
  console.log(almostEquivalent('abcde', 'aabcde')) // difference: 1 = true
  console.log(almostEquivalent('a', 'b')) // difference: 2 = true
  console.log(almostEquivalent('a', 'aaaaa')) // difference: 4 = false
  console.log(almostEquivalent('abab', 'bb')) // difference: 2 = true
