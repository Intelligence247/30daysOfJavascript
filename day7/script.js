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

function returning() {
    let firstName = 'Usman';
    let lastName = 'Abdullahi';
    let space = ' ';
    let alls = firstName + space + lastName;
    return alls;
}
console.log(returning())


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












