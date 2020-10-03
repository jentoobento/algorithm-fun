/**
 * Explanation:
 * Given a word and phone number, place the word into the phone
 * number using a 9-digit phone pad separated by dashes if possible.
 * If not possible, print nothing.
 * 
 * A 9-digit phone pad is the following:
 * (1)(2 "a,b,c")(3 "d,e,f")
 * (4 "g,h,i")(5 j,k,l)(6 m,n,o)
 * (7 p,q,r,s)(8 t,u,v)(9 w,x,y,z)
 * (* '+')(0 '_')(#)
 * 
 * Example:
 * Given: "TWLO" and the number "+14157088956"
 * Return: "+1415708-TWLO"
 * 
 * Given: "CODE" and the number "+15109926333"
 * Return: "+151099-CODE-3"
 * 
 * Constraints:
 * 1. Phone numbers can have repeat numbers
 * 2. All codes will be A-Z uppercase only
 * 3. All codes will be shorter length than all phone numbers
 * 4. All codes can appear anywhere in the number including country codes or area codes
 * 5. All phone numbers will be in E164 format (plus sign, minimum 1 digit, max 15 digits)
 * 6. All phone numbers are 0-9 only
 */

/**
 * Numbers and their corresponding letters on a T9 keypad map.
 */
const phonePad = {
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
};

/**
 * Given a alphabetical code, replace it in the number using T9 Keypad map
 * separated by dashes. Returns an array the first element: bool of success,
 * second element: the new number if successful or old one if not.
 */
const addCodeToNumber = (code, number) => {
  let output = number[0];
  let codeArr = code.split('');
  let currentLetterIndex = 0;
  let currentNumberIndex = 1;
  let codeWasFoundInNumber = false;

  for (currentNumberIndex = 1; currentNumberIndex < number.length; currentNumberIndex++) {
    // If the whole code was found in the numbers, add the rest of the numbers to output
    if ((currentLetterIndex === code.length - 1) && (currentNumberIndex === number.length - 1)) {
      codeWasFoundInNumber = true;
    }
    if (!codeArr[currentLetterIndex]) {
      output += number[currentNumberIndex];
      codeWasFoundInNumber = true;
      continue;
    }

    if (phonePad[number[currentNumberIndex]]
      && phonePad[number[currentNumberIndex]].includes(codeArr[currentLetterIndex])) {
      // this number corresponds to a letter...
      if ((currentLetterIndex === 0) && (currentNumberIndex !== 1)) {
        // if this is the first letter, add dash to front
        // do NOT add a dash to the front if this is the first element
        output += '-' + codeArr[currentLetterIndex];
      } else if ((currentLetterIndex === codeArr.length - 1) && (currentNumberIndex !== number.length - 1)) {
        // if this is the last letter, add dash to back
        // do NOT add a dash to the back if this is the last element
        output += codeArr[currentLetterIndex] + '-';
      } else {
        // if this is a middle letter, do not add dash
        // or this is the first or last element
        output += codeArr[currentLetterIndex];
      }
      currentLetterIndex += 1;
    } else {
      // this number has no corresponding letter
      // the letters have to be next to each other so reset the index
      if (currentLetterIndex !== 0) {
        // If the code was partially found, revert the index back partially
        output = output.slice(0, currentNumberIndex - currentLetterIndex);
        currentNumberIndex -= currentLetterIndex;
      }
      // revert the code index back to the beginning
      output += number[currentNumberIndex];
      currentLetterIndex = 0;
    }
  }
  return [codeWasFoundInNumber, output];
};

/**
 * Given an array of letters and an array of phone numbers,
 * return the phone numbers that match the letters. Do not
 * return duplicate numbers.
 */
newNumber = (code, number) => {
  const [codeFound, newNumber] = addCodeToNumber(code, number);
  if (codeFound) console.log(newNumber);
};

newNumber('ABC', '+1225222345'); // +1225-ABC-345
newNumber('ZZZ', '+1225222345'); 
newNumber('AB', '+1225222345'); // +1-AB-5222345
newNumber('TLWO', '+1225222345'); 
newNumber('ABC', '+18596');
newNumber('TLWO', '+18596'); // +1-TLWO
newNumber('ABC', '+999');
newNumber('ZZZ', '+999'); // +ZZZ
newNumber('HTCH', '+17474824380'); // +1747-HTCH-380
