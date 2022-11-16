// Exercises: Level 1
// 1.Declare a function fullName and it print out your full name.
console.log(['Exercise Starts here'])

function fullName() {
    let names = `Usman Abdullahi Babatunde`;
    return names;
}
console.log(fullName())

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    const space = " ";
    let myName = firstName + space + lastName;
    return myName;
}
console.log(fullName('Usman', 'Abdullahi'))

// 3.Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(param1, param2) {
    let sum = param1 + param2;
    return sum;
}
console.log(addNumbers(789, 80))

// 4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
console.log(areaOfRectangle(34, 24))

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter
}
console.log(perimeterOfRectangle(21, 23))

// 6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(90, 40, 29))

// 7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = (radius) => {
    let circleArea = Math.PI * radius ** 2;
    return circleArea;
}
console.log(areaOfCircle(90))

// 8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (r) => {
    const circumference = 2 * Math.PI * r;
    return circumference;
}
console.log(circumOfCircle(19))

// 9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.


function density(mass, volume = 23) {
    let calc = mass / volume;
    return calc;
}
console.log(density(240))


const speed = (distance, time) => {
    let velocity = distance / time + 'm/s';
    return velocity;
}
console.log(speed(900, 34))

// 11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity = 9.8) {
    let calc = mass * gravity + '\t' + 'N';
    return calc;
}
console.log(weight(431));

// 12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (oC) => {
    let calc = oC * (9 / 5) + 32;
    return calc;
}
console.log(convertCelsiusToFahrenheit(9))


// 13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// *The same groups apply to both men and women.
// *Underweight: BMI is less than 18.5
// *Normal weight: BMI is 18.5 to 24.9
// *Overweight: BMI is 25 to 29.9
// *Obese: BMI is 30 or more

function bmi(weight, height) {
    let answerBMI = weight / (height ** 2);
    if (answerBMI < 18.5) {
        console.log('Underweight: BMI is less than 18.5')
    } else if (answerBMI >= 18.5 && answerBMI <= 24.9) {
        console.log('Normal weight: BMI is 18.5 to 24.9')
    } else if (answerBMI >= 25 && answerBMI <= 29.9) {
        console.log('Overweight: BMI is 25 to 29.9')
    } else if (answerBMI >= 30) {
        console.log('Obese: BMI is 30 or more')
    } else {
        console.log("You have either made a mistake or the brower is not functioning properly")
    }
    return answerBMI;
}
console.log(bmi(1030, 6))


// 14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = month => {
    let answer = month;
    switch (answer) {
        case 'january':
        case 'febuary':
        case 'march':
            console.log(`'${month}' is an 'Autumn' season`);
            break;
        case 'april':
        case 'may':
        case 'june':
            console.log(`'${month}' is a 'Winter' season`);
            break;
        case 'july':
        case 'august':
        case 'september':
            console.log(`'${month}' is a 'Spring' season`);
            break;
        case 'october':
        case 'november':
        case 'december':
            console.log(`'${month}' is a 'Summer' season`);
            break;
        default:
            console.log(`'${month}' is not a month`)
    }
    return answer;
}
console.log(checkSeason('october'))

// 15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(param1, param2, param3) {
    if (param1 > param2 && param1 > param3) {
        return param1;
    } else if (param2 > param1 && param2 > param3) {
        return param2
    } else if (param3 > param1 && param3 > param2) {
        return param3
    }
}
console.log(findMax(23, 45, 56))
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0


// Exercises: Level 2

console.log(['Exercises: Level 2 starts here'])

// 1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function solveLinEquation(a, b, c) {
//     let x = 'x';
//     let solve = x + a ** 2
//     return solve;
// }
// console.log(solveLinEquation(2))

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(name1, name2) {
    let bothName = [name1, name2]
    return bothName;
}
console.log(printArray('Usman Abdullahi Babatunde and', 'Inteligence247'))


// 4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = () => {
    let now = new Date()
    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let all = (`${day}/${month}/${year} ${hours}:${minutes}`)
    return all;
}
console.log(showDateTime())

// 5.Declare a function name swapValues. This function swaps value of x to y.


function swapValues(x, y) {
    let swaps1 = y;
    let swaps2 = x;
    let swaps = (`x=${swaps1}, y=${swaps2}`)
    return swaps;
}

console.log(swapValues(100, 200))



// 6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = (param) => {
    let reverse = param.reverse();
    return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']


// 7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (param) => {
    let capitalized = param.map(name => name.toUpperCase());
    return capitalized;
}
console.log(capitalizeArray(['a', 'b', 'c']))
// or
const capitalizeArray2 = (...param) => {
    // console.log(param)
    console.log(param);
}

capitalizeArray2('Abdullahi', 'Usman', 'Intelligence');

// 8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(param = ['pen', 'book,', 'mouse']) {
    return param;

}

console.log(addItem(['Phone', 'Laptop', 'pen', 'book', 'mouse']))

// 9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const removeItem = (param = ['Phone', 'Laptop', 'pen', 'book', 'mouse']) => {
    return param;
}
console.log(removeItem(['Laptop,', 'mouse']));


//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
let sum = 0;
function sumOfNumbers(param = 21) {
    for (let i = 0; i <= param; i++) {
        let = (sum += i)
    }
    return sum;
}
console.log(sumOfNumbers(100))

// 11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (paramOdd) => {
    let sumOdd = 0;
    for (let i = 0; i <= paramOdd; i++) {
        if (i % 2 == 1) {
            sumOdd += i
        }
    }
    return sumOdd;
}
console.log(sumOfOdds(100))

// 12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

let evenSum = 0;
function sumOfEven(paramEven) {
    for (let i = 0; i <= paramEven; i++) {
        if (i % 2 == 0) {
            evenSum += i
        }
    }
    return evenSum;
}

console.log(sumOfEven(100))

// 13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
let adde = 0;
let addo = 0;

function evensAndOdds(param = 100) {
    for (let i = 0; i <= param; i++) {

        if (i % 2 == 0) {
            adde += i
        }
        else if (i % 2 == 1) {
            addo += i
        }
    }
    return [`${adde}, ${addo}`];
}
console.log(evensAndOdds())

// 14.Write a function which takes any number of arguments and return the sum of the arguments

let sum14 = 0;
function arguments(param) {
    for (let i = 0; i < param.length; i++) {
        sum14 += param[i]
    }
    return sum14
}
console.log(arguments([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));
// console.log(arguments([1, 2, 3, 4]));

// 15.Writ a function which generates a randomUserIp.
function randomUserIp(param) {
    let x = (Math.random() + param).toString(30).substring(2)
    return x;
}

console.log(randomUserIp(10))

// 16.Write a function which generates a randomMacAddress

const randomMacAddress = (param) => {
    let x1 = (Math.random() + param).toString(35.5).substring(10)
    let x2 = (Math.random() + param).toString(36).substring(10)
    let x3 = (Math.random() + param).toString(36).substring(10)
    let x4 = (Math.random() + param).toString(36).substring(10)
    let x5 = (Math.random() + param).toString(35).substring(10)
    let x6 = (Math.random() + param).toString(36).substring(10)
    let x = (`${x2}:${x1}:${x5}:${x6}:${x4}:${x3}`)
    return x;
}
console.log(randomMacAddress(3))

const alpahbet = 'abcdef1234567890'
let generate = alpahbet[Math.floor(Math.random() * alpahbet.length)]
console.log(generate)

// 17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
    const alphabet = 'abcdef1234567890';
    const randoms = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randoms1 = alpahbet[Math.floor(Math.random() * alpahbet.length)]
    const randoms2 = alphabet[Math.floor(Math.random() * alpahbet.length)]
    const randoms3 = alphabet[Math.floor(Math.random() * alpahbet.length)]
    const randoms4 = alphabet[Math.floor(Math.random() * alpahbet.length)]
    const randoms5 = alphabet[Math.floor(Math.random() * alpahbet.length)]

    let random = (`#${randoms2}${randoms3}${randoms1}${randoms4}${randoms5}${randoms}`)
    return random;
}
console.log(randomHexaNumberGenerator())

// 18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    const pp = 'abcdefghijklmnopqrstyuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let x = pp[Math.floor(Math.random() * pp.length)]
    let x1 = pp[Math.floor(Math.random() * pp.length)]
    let x3 = pp[Math.floor(Math.random() * pp.length)]
    let x2 = pp[Math.floor(Math.random() * pp.length)]
    let x4 = pp[Math.floor(Math.random() * pp.length)]
    let x5 = pp[Math.floor(Math.random() * pp.length)]
    let x6 = pp[Math.floor(Math.random() * pp.length)]
    let xReturn = (`${x1}${x2}${x}${x3}${x5}${x4}${x6}`)
    return xReturn
}
console.log(userIdGenerator())

console.log(['Exercise THREE Starts here'])
//2. Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
    let rgb = (Math.floor(Math.random() * (255 - 0) + 0));
    let rgb2 = (Math.floor(Math.random() * (255 - 0) + 0));
    let rgb3 = (Math.floor(Math.random() * (255 - 0) + 0));
    let all = (`rgb(${rgb3}, ${rgb}, ${rgb2})`)
    return all
}
console.log(rgbColorGenerator())

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function randomHexaNumberGenerator() {
    const alphabet = 'abcdef1234567890';
    const randoms = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randoms1 = alpahbet[Math.floor(Math.random() * alpahbet.length)]
    const randoms2 = alphabet[Math.floor(Math.random() * alpahbet.length)]
    const randoms3 = alphabet[Math.floor(Math.random() * alpahbet.length)]
    const randoms4 = alphabet[Math.floor(Math.random() * alpahbet.length)]
    const randoms5 = alphabet[Math.floor(Math.random() * alpahbet.length)]

    let random = ([`#${randoms2}${randoms3}${randoms1}${randoms4}${randoms5}${randoms}`])
    return random;
}
console.log(randomHexaNumberGenerator())

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
let rgbColorGenerators = () => {
    let rgb = (Math.floor(Math.random() * (255 - 0) + 0));
    let rgb2 = (Math.floor(Math.random() * (255 - 0) + 0));
    let rgb3 = (Math.floor(Math.random() * (255 - 0) + 0));
    let all = ([`rgb(${rgb3}, ${rgb}, ${rgb2})`])
    return all
}
console.log(rgbColorGenerators())




// 7.Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(param1) {
    let rgb = (Math.floor(Math.random() * (255 - 0) + 0));
    let rgb2 = (Math.floor(Math.random() * (255 - 0) + 0));
    let rgb3 = (Math.floor(Math.random() * (255 - 0) + 0));
    let all = param1 + ([`rgb(${rgb3}, ${rgb}, ${rgb2})`])
    return all

}
console.log(generateColors(''))
// console.log(generateColors(3))

// console.log((Math.random() + 3).toString(36).substring(10))

// 8.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray() {
    let rr = '1234567890'
    let shuffle1 = rr[Math.floor(Math.random() * rr.length)]
    let shuffle2 = rr[Math.floor(Math.random()) * rr.length]
    let shufflea = [`${shuffle1}`]
    let shuffleb = [`${shuffle2}`]
    let shuffle = [`${shufflea}${shuffleb}`]
    return shuffle;
}
console.log(shuffleArray())
let arrr = 0;
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(n) {
    let r;
    if (r == n) {
        console.log('The function has an Parameter')
    } else {
        console.log(`${n}`)
    }
    return n;
}

console.log(isEmpty())


// 11. Call your function sum, it takes any number of arguments and it returns the sum.
const rr = (...args) => {
    let x = 0;
    for (let i = 0; i < args.length; i++) {
        x += args[i]
    }
    return x;
}
console.log(rr(12, 23, 34))












// Need to practice Unlimited numnber of parameters again



function argSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}

console.log(argSum(12, 23, 45, 67))

function arg2() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    } return arr;
}
console.log(arg2(12, 13, 24))



const argss = (...args) => {
    console.log(args)
}
argss(12, 13)



const arrArgs = (...param) => {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return sum;
}
console.log(arrArgs(90, 45, 45, 89))


const countriesAll = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
let r = []
const reverseCountry = countriesAll.map((n) => r.push(n))
console.log(r.reverse())


// exercise 3 number 1
// exercise 3 number 5
// exercise 3 number 6
// exercise 3 number 7
// all random numbers
// exercise 3 number 8
//  exercise 3 number 13,14,16,17,18,19

// https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript

let sumOfArrayItems = (...param) => {
    let rr = 0;
    let sum = 0
    for (let i = 0; i < param.length; i++) {
        rr = (sum += param[i]) / param.length
    }
    return rr;
}
console.log(sumOfArrayItems(90, 21, 34))
function factorial() {
    let sum = 0;
    for (const i of arguments) {
        sum += i
    }
    return sum;
}
console.log(factorial(9))


let x = Math.floor(Math.random() * (9 - 1 + 1) - 1)
let arrand = [x, x, x, x, x, x, x]
console.log(arrand)


// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

const randomHexaNumberGenerator2 = () => {
    const numl = '1234567890abcdef'
    id = ''
    for (let i = 0; i <= 5; i++) {
        const ran = Math.floor(Math.random() * numl.length)
        id += numl.charAt(ran)

    }
    return '#' + id
}
console.log(randomHexaNumberGenerator2())

const nn = (param) => {
    let cha = 'abcdef1234567890'
    let id = ''
    let id2 = ''
    for (let i = 0; i <= param; i += 1) {
        let ran = Math.floor(Math.random() * cha.length)
        id += cha.charAt(ran)
    }
    return '#' + id
}
console.log(nn(12))

const repit = () => {
    let id = ''
    let arr = [];
    let characters = '1234567890abdcef'
    let leng = prompt('Enter the length of the random number you want')
    let num = prompt('Enter the number of random numbe you want')
    for (let i = 0; i <= num; i++) {
        for (let i = 0; i <= leng; i++) {
            let rand = Math.floor(Math.random() * characters.length)
            id += characters.charAt(rand)

        }
        arr.push(ran)

    }
    return arr
}
console.log(repit())









// q13 exercise 2

// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };


// 20.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

