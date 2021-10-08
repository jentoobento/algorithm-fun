/**
Given a long string and a max characters per line,
log out the string where it does not go over the max
characters per line and it doesn't split any of the words
in half. Spaces and punctuation count as characters.

Example:
Given: 
"Good Bye Hello" 8
Returns: 
"Good Bye
Hello"

Given: 
"Good Bye Hello Morning" 8
Returns: 
"Good Bye
Hello
Morning"
*/

const maxCharsPerLine = 45

const str: string = "Heart or no heart, at least he still has a conscience. You might not 
hear it, but right now it's loud and clear. And it's telling me you're on the wrong side!"

let result: string = ''

// split the array by words and add a space to each
let wordArr: string[] = str.split(' ').map((word: string) => `${word} `)

let charsPerLine: number = 0

wordArr.forEach((word) => {
	charsPerLine += word.length

	// add a newline if the line count hits max
	if (charsPerLine > maxCharsPerLine) {
		result += '\n' + word
		charsPerLine = 0
	} else {
		result += word
	}
})

console.log(result)
