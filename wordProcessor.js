/**
 * Given an array of strings and a max line length, simulate
 * a word processor by adding words to a line until it reaches
 * the max length of the line.
 * 
 * Assumptions:
 * 1. All items in the array are strings
 * 2. Each word has at least one letter
 * 3. Each word will not exceed the maxLengthOfLine
 * 4. Words will not contain spaces or special characters
 * 5. wordsArray will have at least 1 item
 * 6. maxLengthOfLine will always be >= 1
 * 7. maxLengthOfLine will always be an integer
 * 
 * Examples:
 * Given: ['is', 'that', 'hello', 'hello', 'morning', 'noon']
 * with maxLengthOfLine of 11, the result should be:
 * "is that" <-- the total length of this line is 7, which is less than maxLengthOfLine
 * "hello hello" <-- the length of this line is 11, which is exactly maxLengthOfLine
 * "morning" <-- the length of this line is 7, even though the next word is only 4 length,
 * which would bring the length of the line to 11, we need to account for the space,
 * which would bring the length of the line to 12, so we must move to the next line.
 * "noon"
 * 
 * Given: ['the', 'cat', 'in', 'the', 'hat', 'is', 'a', 'good', 'book']
 * with a maxLengthOfLine of 6, the result should be:
 * "the" <-- "the" + "cat" is 6, but when we add the space the length becomes 7
 * "cat in" <-- "cat" + "in" + the space = 6, so this line is exactly maxLengthOfLine
 * "the"
 * "hat is"
 * "a good" <-- "a" + "book" + the space = 6, so this line is exactly maxLengthOfLine
 * "book"
 */

const wordProcessor = (maxLengthOfLine, wordsArray) => {
  let wordString = wordsArray.join(' ');
  let output = '';
  let trim = '';

  while(wordString.length > 0) {
    if (wordString.length <= maxLengthOfLine) {
      trim = wordString;
    } else {
      trim = wordString.substr(0, wordString.lastIndexOf(' ', maxLengthOfLine));
    }
    output += trim + '\n';
    wordString = wordString.replace(trim, '').trim();
  }
  console.log(output.trim());
}


wordProcessor(11, ['is', 'that', 'hello', 'hello', 'morning', 'noon']);
wordProcessor(11, ['this', 'at', 'hello', 'hello', 'morning', 'night']);
wordProcessor(10, ['hi', 'bye', 'hello', 'goodbye']);
wordProcessor(7, ['the', 'cat', 'in', 'the', 'hat', 'is', 'a', 'good', 'book']);
wordProcessor(6, ['the', 'cat', 'in', 'the', 'hat', 'is', 'a', 'good', 'book']);
wordProcessor(15, ['the', 'cat', 'in', 'the', 'hat', 'is', 'a', 'good', 'book']);
