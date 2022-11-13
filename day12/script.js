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

// Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

const txt = `Python is the most beautiful language that a human begin has ever created. \
I recommend python for a first programming language`

const matchReplace = txt.replace(/python|Python/, 'JavaScript')
console.log(matchReplace)

const txt2 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

const matchReplace2 = txt2.replace(/python/gi, 'JavaScript')
console.log(matchReplace2)

const matchReplace3 = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplace3)

matches = txt.replace(/%/g, ' ')
console.log(matches)

const txtWithPercent = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const replacePercent = txtWithPercent.replace(/%/g, '')
console.log(replacePercent)

// Let's use example to clarify the above meta characters
// Square Bracket
// Let's use square bracket to include lowercase and uppercase

const lowerAndUpper = '[Aa]pple' // This square bracket means either A or a
const txtApple = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '

const matches2 = txtApple.match(lowerAndUpper)
console.log(matches2)


const lowerAndUpper2 = /[Aa]pple/g
const matchesLower2 = txtApple.match(lowerAndUpper2)
console.log(matchesLower2)

// If we want to look for the banana, we write the pattern as follows:
const txtApple2 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'

const patternForBanana = /[Aa]pple|[Bb]anana/g
const bananaResult = txtApple2.match(patternForBanana)
console.log(bananaResult)

// Escape character(\) in RegExp

const patternEscape = /\d/g  // d is a special character which means digits
const txtEscape = 'This regular expression example was made in January 12,  2020.'
const matchesEscape = txtEscape.match(patternEscape)

console.log(matchesEscape)  // ["1", "2", "2", "0", "2", "0"], this is not what we want
const historyPattern = /\d/g; //This means to escape all the alphabet excluding the numbers
const history = 'My name is Usman Abdullahi Babatunde, you can call me "Intelligence". I was born in the year 1990 and I am currently 32 years old';

const historyResult = history.match(historyPattern)
console.log(historyResult)

// Note (d) is a special character which means digit, for this reason it goes for numbers and not alphabets always

// One or More times(+)
const patternEscape2 = /\d+/g
const matchesEscape2 = txtEscape.match(patternEscape2)
console.log(matchesEscape2) // ["12", "2020"], this is not what we want

// Period(.)
const periodPattern = /[a]./g // square bracket only means a, while . means any character except new line
const textPeriod = 'Apple and banana are fruits'
const matchperiod = textPeriod.match(periodPattern)
console.log(matchperiod)

// To make this a meaning full word we are going to add + so that it joins them together and it means occurence of any character one or more times
const periodPattern2 = /[a].+/g
const periodPatternA = /[Aa].+/g
const matchperiodA = textPeriod.match(periodPatternA)
const matchperiod2 = textPeriod.match(periodPattern2)
console.log(matchperiod2, matchperiodA)


// Zero or more times(*)
// This means the pattern may occur many times and may not occur at all

const baAp = 'Apple and banana are fruits'
const patternBaAp = /[a].*/g // * it means a may not occur or occur many times
const matchBaAp = baAp.match(patternBaAp)
console.log(matchBaAp)

// Zero or one times(?)
// Zero or one times means it may not occur or it may occur once

const txtQue = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const patternQue = /[Ee]-?mail/g
const matchQue = txtQue.match(patternQue)
console.log(matchQue)


// Quantifier in RegExp
// We can specify the length of the substring we look for in a text, using a curly bracket. Let us see, how to use RegExp quantifiers. Imagine, we are interested in substring that their length are 4 characters

const txtQuantifier = 'This regular expression example was made in December 6,  2019.'
const patternQuantity = /\b\w{4}\b/g
const matchQuantity = txtQuantifier.match(patternQuantity)
console.log(matchQuantity)

const txtw = 'This regular expression example was made in December 6,  2019.'
const patternw = /\b\w{4}\b/g  //  exactly four character words
const matchesw = txtw.match(patternw)
console.log(matchesw)  //['This', 'made', '2019']
// /\b[a-zA-Z]{4}\b/g
const patternj = /\b[a-zA-Z]{4}\b/g // four characters of words without numbers
const matchOfpatterj = txtw.match(patternj)
console.log(matchOfpatterj)

const numPattern = /\d{4}/g
const numPattern2 = /\d{1,4}/g
const matchNum = txtw.match(numPattern);
const matchNUm2 = txtw.match(numPattern2)
console.log(matchNum)
console.log(matchNUm2)


// Cart ^
// Starts with
const patternStartWith = /^this/gi // ^ means start with
const matchStartsWith = txtw.match(patternStartWith)
console.log(matchStartsWith)

// Negation
const patternNegation = /[^A-Za-z,. ]+/g // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matchNegation = txtw.match(patternNegation)
console.log(matchNegation)

// Exact match
let patternExactMatch = /^[A-Z][a-z]{3,12}$/;
let name = 'Abdullahiusma';
let resultExactMatch = patternExactMatch.test(name)
console.log(resultExactMatch)

// This will only be true if the length of the name is >=4 && name's length is <=13, it will be false



















// Link to Regular expression cheat Sheet
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/images/regex.png