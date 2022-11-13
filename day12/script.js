// Regular Expressions
// A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways.

// To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

// RegExp parameters
// A regular expression takes two parameters. One required search pattern and an optional flag.

// Pattern
// A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

// Flag
// Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:
// g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline

// Creating a pattern with RegExp Constructor
// Declaring regular expression without global flag and case insensitive flag.
let pattern = 'love'
let regEx = new RegExp(pattern)
console.log(pattern)
console.log(regEx)

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

let regExWithFlag = new RegExp('love', 'gi')
console.log(regExWithFlag)

// Creating a pattern without RegExp Constructor
// Creating a regular expression with global flag and case insensitive flag.
let regExglob = /love/gi
console.log(regExglob)

// RegExpp Object Methods
// Let us see some of RegExp methods

// Testing for a match
// test(): Tests for for a match in a string and returns true or fals

const str = 'I love JavaScript'
const pat = /JavaScript/
const pat2 = /love/
const result = pat.test(str)
const result2 = pat2.test(str)
console.log(result, result2)
console.log(typeof result, typeof pat, typeof str)

// Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

const resultArr = str.match(pat)
console.log(str.match(pat2))
console.log(resultArr)

// To get the grounp which is undefined we must letter (g)

const group = /JavaScript/g
const resultGroup = str.match(group)
console.log(resultGroup)

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const searchResult = str.search(group)
const search2 = str.search(pat2)
console.log(searchResult)
console.log(search2)

// Searching cannot be alter whether g is present or not