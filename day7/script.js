// FUNCTION!!!
// A function can be declared or created in couple of ways:
// Declaration function
// Expression function
// Anonymous function
// Arrow function

// Function Declaration
// Let us see how to declare a function and how to call a function.
// //declaring a function without a parameter
// function functionName() {
//     // code goes here
//   }
//   functionName() // calling function by its name and with parentheses

// //declaring a function without a parameter
// function functionName() {
//   // code goes here
// }
// functionName() // calling function by its name and with parentheses


// Function without a parameter and return
// Function can be declared without a parameter.

function squares() {
    let s = 30;
    let s2 = 3;
    console.log(s ** s2)
}
squares()

function adding() {
    let s = 34;
    let s2 = 28;
    console.log(s + s2);
}
adding()

function names() {
    let ss = 'Usman';
    let s = 'Abdullahi';
    let s2 = 'Babatunde';
    let age = 90;
    console.log(`${ss} ${s} ${s2} is ${age} years old`)
}
names()


// Function returning value
// Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it.

function provides() {
    let firstName = 'Usman';
    let lastName = 'Abdullahi';
    let space = ' ';
    let alls = firstName + space + lastName;
    return alls;
}
console.log(provides())


function printFullName() {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

function addition() {
    let number1 = 300;
    let number2 = 400;
    let number3 = 100;
    let salary = number1 ** number2 / number3;
    return salary;
}
console.log(addition()) //infinity

// Function with a parameter
// In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

// function with one parameter
// function functionName(parm1) {
//     //code goes her
//   }


function withParameter(aNumber) {
    let calls = aNumber * 23;
    return calls;
}
console.log(withParameter(122))


function withParameter2(anAphabet) {
    let names = 'Usman Abdullahi Babatund' + anAphabet;
    return names;
}
console.log(withParameter2('e'))


function red(radius) {
    let area = 3 ** radius;
    return area;
}
console.log(red(3))


function helper(radius) {
    let height = 34;
    let areaOfCylinder = Math.PI * radius ** 2 * height;
    return areaOfCylinder;
}
console.log(helper(12))

function myAge(x) {
    let dateOfBirth = x;
    let presentYear = 2022;
    age = 2022 - x;
    return age;
}
console.log(myAge(1993));

// Function with two parameters
// // function with two parameters
// function functionName(parm1, parm2) {
//     //code goes her
//   }

function calc(param1, param2) {
    let discount = param1;
    let originalPrice = param2;
    let newPrice = param2 - param1
    return newPrice

}
console.log(calc(49.012, 5000));

function myName(param1, param2) {
    let middle = 'Babatunde';
    const space = ' ';
    let full = param1 + space + middle + space + param2;
    return full
}
console.log(myName('Usman', 'Abdullahi'));

// Function with many parameters

// function with multiple parameters
// function functionName(parm1, parm2, parm3,...){
//code goes here
//   }
//   functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


// this function takes array as a parameter and sum up the numbers in the array




function many(param1, param2, param3, param4) {
    let total = param1 + param2 + param3 + param4;
    return total;
}
console.log(many(12, 34, 35, 67))

function sumOf(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let numbers = [20, 23, 34, 56, 78]
console.log(sumOf(numbers))



const areaOfCylinder = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCylinder(20))


// Unlimited number of parameters in regular function
// A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example
function smallNumbers() {
    console.log(arguments)
}
smallNumbers(1, 2, 3, 4, 5, 90);



function bigNumbers() {
    let total = 0;
    for (let c = 0; c < arguments.length; c++) {
        total += arguments[c];
    }
    return total;
}
console.log(bigNumbers(120, 34, 67, 78, 86, 90, 99, 900));
console.log(bigNumbers(1, 2, 3, 85))

// Unlimited number of parameters in arrow function
// Let us access the arguments object

const sumAllNums = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]
const unlimitedArrow = (...args) => {
    console.log(args)
}
unlimitedArrow(23, 45, 67, 89)
const unlimitedArrowPra = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(unlimitedArrowPra(12, 34, 56, 67, 78, 89))


// Anonymous Function
// Anonymous function or without name

const anonymousFun = function () {
    console.log(`
I am an anonymous function and my value is stored in anonymousFun
    `)
}
anonymousFun()


// Expression Function
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

const additions = function (nt) {
    return nt * nt;
}
console.log(additions(8))

let expressionPra = function (nt, n) {
    return nt * n * n / n + nt / nt;
}
console.log(expressionPra(20, 45))


// Self Invoking Functions
// Self invoking functions are anonymous functions which do not need to be called to return a value.

// (function (n) {
//     console.log(n + n * n)
// })(9)
let invoke = (function (n) {
    return n % n + n * n;
})
console.log(invoke(8))

// Arrow Function
// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.
function normal(declaration) {
    return declaration * declaration * 9
}
console.log(normal(9))

const arrow = (n) => {
    return n + n
}
console.log(arrow(19))

const test = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}
let country = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(country.map(name => name.toUpperCase()))
console.log(test(country))

const arrow2 = nth => {
    const newArr2 = [];
    for (const element of nth) {
        newArr2.push(element.toUpperCase())
    }
    return newArr2
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(arrow2(countries))



const printName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(printName('Abdullahi', 'Intelligence'))


//or


const printWriterName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printWriterName('Asabeneh', 'Yetayeh'))


// Function with default parameters
// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

function person(name = 'Abdullahi') {
    let something = `${name}, Welcome to 30 days of javascript`
    return something;
}
console.log(person('Intelligence'));
console.log(person())

function trial(firstName = 'Abdullahi', lastName = 'Usman') {
    let fullName = `My name is ${lastName} ${firstName}`
    return fullName;
}
console.log(trial());
console.log(trial('Idris'))


function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
}

console.log('Age: ', calculateAge(1819))

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
function gravityCalc(mass, gravity = 10) {

    let onMoon = `Weight of an object in Newton:\t${mass * gravity} N`;
    return onMoon;
}



console.log(gravityCalc(100))
console.log(gravityCalc(500, 1.62))
// Let us see how we write the above functions with arrow functions

const arrowCalc = (gravity, mass = 900) => {
    let calc = `This is the weight ${mass * gravity}`
    return calc;
}
console.log(arrowCalc(100))
console.log(arrowCalc(80, 200))


const arrowName = (firstName = 'Abdullahi', SecondName = 'Intelligence', lastName = 'Usman') => {
    let space = ' ';
    let allName = SecondName + space + lastName + space + firstName;
    return allName;
}
console.log(arrowName('Babatunde'))
console.log(arrowName());



