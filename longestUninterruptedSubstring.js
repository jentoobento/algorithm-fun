/**
 * Given an array of strings, find the longest repeated substring of letters.
 * If there is a tie between two or more substrings, return the one
 * with the highest letter (A > Z) and highest number of times it repeats uninterrupted.
 * 
 * Assumptions:
 * 1. The array will have at least 1 item.
 * 2. The item will always be a string.
 * 3. The item will always be a string of letters with no special characters.
 * 4. The item will always have a length of at least 1.
 * 
 * Examples:
 * Given: ['ZZZA']
 * return: Z 3
 * The letter "Z" occurs 3 times, its highest uninterrupted substring is 3.
 * The letter "A" occurs 1 times, its highest uninterrupted substring is 1.
 * 3 is the highest uninterrupted substring and there are no ties, so we return "Z 3".
 * 
 * Given: ['ZZZABAA']
 * return: Z 3
 * The letter "Z" occurs 3 times, its highest uninterrupted substring is 3.
 * The letter "A" occurs 3 times, its highest uninterrupted substring is 2.
 * The letter "B" occurs 1 times, its highest uninterrupted substring is 1.
 * 3 is the highest uninterrupted substring and there are no ties, so we return "Z 3".
 * 
 * Given: ['ZZZAAA']
 * return: A 3
 * The letter "Z" occurs 3 times, its highest uninterrupted substring is 3.
 * The letter "A" occurs 3 times, its highest uninterrupted substring is 3.
 * 3 is the highest uninterrupted substring and A > Z, so we return "A 3".
 * 
 * Given: ['AAB', 'BBBC']
 * return:
 * A 2
 * B 3
 * The highest uninterrupted substring in the first element is A with 2 occurances.
 * The highest uninterrupted substring in the second element is B with 3 occurances.
 */

function longestUninterruptedSubstring(lines) {
  lines.forEach((line) => {
    let highestLetter = '';
    let highestAmount = 0;
    let currentLetter = '';
    let currentAmount = 0;
    for (let i = 0; i < line.length; i++) {
      currentLetter = line[i];
      currentAmount += 1;

      if (line[i + 1] !== line[i]) {
        if (currentAmount > highestAmount) {
          highestAmount = currentAmount;
          highestLetter = currentLetter;
        } else if (currentAmount === highestAmount) {
          highestLetter = currentLetter < highestLetter ? currentLetter : highestLetter;
        }
        currentAmount = 0;
      }
    }
    console.log(highestLetter, highestAmount);
  });
}

longestUninterruptedSubstring(['ZZZAAA']);
longestUninterruptedSubstring(['BCCCXXYYZZZZ']);
longestUninterruptedSubstring(['ZZZAAAZAAAAABBC']);
longestUninterruptedSubstring(['AAABBBBAABBBCCCCCCCDDAAAAAAAAAADEFGCC']);
longestUninterruptedSubstring(['CCCB', 'EDCBA', 'ABCDEEFGHH']);
