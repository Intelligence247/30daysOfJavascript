// arrays are non-primitive, so comparing nums and number will be false despite both of them having the same value
let nums = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(nums == numbers); //false
// firstPerson and secondPerson in the below example are not the same 
let firstPerson = {
    fullName: 'Usman Abdullahi',
    school: 'Unilorin',
    age: 2022 - 2003,
}

let secondPerson = {
    fullName: 'Usman Abdullahi',
    school: 'Unilorin',
    age: 2022 - 2003,
}
console.log(secondPerson, firstPerson);
console.log(firstPerson == secondPerson); //false



const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
console.log(Math.sin(0))
console.log(Math.sin(60))

Math.cos(0)
Math.cos(60)


console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//Syntax
let fullname = 'usman abdullahi';
let backtick = `String literal text String literal text ${fullname}`
console.log(backtick)
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b} ${a >= b}`) // injecting the data dynamically
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)


// all about legth. length in Javscript calculate the number of letters including the spaces of a particular value
let jsLength = 'JavaScript'
console.log(jsLength.length)         // 10
let firstNameLength = 'Asabeneh'
console.log(firstNameLength.length)  // 8
/*Accessing characters in a string: We can access each 
character in a string using its index. In programming, counting starts from 0. 
The first index of the string is zero, and the last
 index is the length of the string minus one.*/
let string = 'JavaScript'
let firstLetter = string[0]
let secondLetter = string[1]       // a
let thirdLetter = string[2]
let fourthLetter = string[3]
let fifthLetter = string[4]
let sixthLetter = string[5]
let seventhLetter = string[6]
let eighthletter = string[7]
let ninthLetter = string[8]
let lastLetter = string[9]
let all = firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter + sixthLetter + seventhLetter + eighthletter + ninthLetter + lastLetter;
console.log(all)



console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

// toUpperCase(): this method changes the string to uppercase letters.
let stringUpperCase = 'JavaScript'

console.log(stringUpperCase.toUpperCase())     // JAVASCRIPT

// toLowerCase(): this method changes the string to lowercase letters.
let stringLowerCase = 'JavasCript'

console.log(stringLowerCase.toLowerCase())     // javascript

// substr(): It takes two arguments, the starting index and number of characters to slice.
let stringsub = 'JavaScript'
console.log(stringsub.substr(4, 6))    // Script

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
let stringSubString = 'JavaScript'

console.log(stringSubString.substring(0, 4))     // Java
console.log(stringSubString.substring(4, 10))    // Script
console.log(stringSubString.substring(4))       // Script

// split(): The split method splits a string at a specified place.
let stringSplit = '30 Days Of JavaScript'
console.log(stringSplit.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(stringSplit.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let stringTrim = '   30 Days Of JavaScript   '

console.log(stringTrim)
console.log(stringTrim.trim(' ')) // removes spaces at the beginning and the end
console.log(stringTrim.trim()) // it also removes spaces at the beginning and the end




// includes(): It takes a substring argument and it checks if 
// substring argument exists in the string. includes() returns a 
// boolean. If a substring exist in a string, it returns true, 
// otherwise it returns false

let stringInclude = '30 Days Of JavaScript'

console.log(stringInclude.includes('Days'))     // true
console.log(stringInclude.includes('days'))     // false - it is case sensitive!
console.log(stringInclude.includes('Script'))   // true
console.log(stringInclude.includes('script'))   // false
console.log(stringInclude.includes('java'))     // false
console.log(stringInclude.includes('Java'))     // true


// replace(): takes as a parameter the old substring and a new substring.
let stringreplace = '30 Days Of JavaScript'
console.log(stringreplace.replace('JavaScript', 'Python')) // 30 Days Of Python

let countryreplace = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland

// charAt(): Takes index and it returns the value at that index

let stringchart = '30 Days Of JavaScript'
console.log(stringchart.charAt(0))        // 3

let lastindex = stringchart.length - 1
console.log(stringchart.charAt(lastindex)) // t

// charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
let stringAscii = '30 Days Of JavaScript'
console.log(stringAscii.charCodeAt(3))        // D ASCII number is 68

let lastIndexAscii = stringAscii.length - 1
console.log(stringAscii.charCodeAt(lastIndexAscii)) // t ASCII is 116

// indexOf(): Takes a substring and if the substring exists in a 
// string it returns the first position of the substring if does
// not exist it returns -1
let stringIndexOf = '30 Days Of JavaScript'

console.log(stringIndexOf.indexOf('D'))          // 3
console.log(stringIndexOf.indexOf('Days'))       // 3
console.log(stringIndexOf.indexOf('days'))       // -1
console.log(stringIndexOf.indexOf('a'))          // 4
console.log(stringIndexOf.indexOf('JavaScript')) // 11
console.log(stringIndexOf.indexOf('Script'))     //15
console.log(stringIndexOf.indexOf('script'))     // -1

// lastIndexOf(): Takes a substring and if the substring exists in a string it
//  returns the last position of the substring if it does not exist it returns -1
let stringLastIndexOf = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(stringLastIndexOf.lastIndexOf('love'))       // 67
console.log(stringLastIndexOf.lastIndexOf('you'))        // 63
console.log(stringLastIndexOf.lastIndexOf('hate')) // 38

// concat(): it takes many substrings and joins them.
let stringConcat = '30'
console.log(stringConcat.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let countryConcat = 'Fin'
console.log(countryConcat.concat("land")) // Finland


// startsWith: it takes a substring as an argument and it checks if the string
//  starts with that specified substring. It returns a boolean(true or false).

let stringStartWith = 'Love is the best to in this world'

console.log(stringStartWith.startsWith('Love'))   // true
console.log(stringStartWith.startsWith('love'))   // false
console.log(stringStartWith.startsWith('world'))  // false


// endsWith: it takes a substring as an argument and it checks if the string
// ends with that specified substring. It returns a boolean(true or false).

let stringEndWith = 'Love is the most powerful feeling in the world'

console.log(stringEndWith.endsWith('world'))         // true
console.log(stringEndWith.endsWith('love'))          // false
console.log(stringEndWith.endsWith('in the world')) // true
// search: it takes a substring as an argument and it returns the index of the first match. The
//  search value can be a string or a regular expression pattern.
let stringSearch = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stringSearch.search('love'))          // 2
console.log(stringSearch.search(/javascript/gi))  // 7 
console.log(stringSearch.search(/javasipt/gi)) // -1

// match: it takes a substring or regular expression pattern as an 
// argument and it returns an array if there is match if not it returns
//  null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let stringMatch1 = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

let stringMatch = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stringMatch.match('love'))

let pattern = /love/gi
console.log(stringMatch.match(pattern))   // ["love", "love", "love"]

// repeat(): it takes a number as argument and it returns the repeated version of the string.
let stringRepeat = 'love'
console.log(stringRepeat.repeat(100)) // lovelovelovelovelovelovelovelovelovelove


// Checking data types !!
console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

// We can convert string to number using the following methods:
//1. parseInt()
//2. Number()
//3. Plus sign(+)
let numInt = Number('10');
let numPaseInt = parseInt(numInt)
console.log(numInt + 2) // 10
console.log(numInt)
console.log(typeof numPaseInt)

// We can convert float numbers to integers. We use the following method to convert float to int:
let numInteger = 9.81
let numIntInteger = parseInt(numInteger)

console.log(numIntInteger) // 9