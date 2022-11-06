// Anything declared withouth var, let and const is a global variable
//scope.js

//Window Global Object
//Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. That means a and b are already available in the window.
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 11 // this is a global scope variable and found in the window object
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b) // accessible


//Global scope
//A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.
//scope.js
let c = 'JavaScript' // is a global scope it will be found anywhere in this file
let d = 10 // is a global scope it will be found anywhere in this file
function letsLearnScopes() {
    console.log(a, b) // JavaScript 10, accessible
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b) // Python 100
    }
    console.log(c, d)
}
letsLearnScopes()
console.log(c, d) // JavaScript 10, accessible


// Local scope
// A variable declared as local can be accessed only in certain block code.
// Block Scope
// Function Scope


if (true) {
    var at = 89;
    var at2 = 90;
    console.log(at + at2)
}
console.log(at * at2) // this doesn't bring error bcs i usde var;

if (true) {
    const acl = 80;
    const acl2 = 90;
    console.log(acl + acl2)
}
// console.log(acl * acl2) // this is what this will bring because i used const and same thing goes for let //scope.js:53 Uncaught ReferenceError: acl is not defined


//scope.js
let af = 'JavaScript' // is a global scope it will be found anywhere in this file
let bf = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
    console.log(af, bf) // JavaScript 10, accessible
    let value = false
    // block scope
    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a, b, c, value) // Python 20 30 true
    }
    // we can not access c because c's scope is only the if block
    console.log(af, bf, value) // JavaScript 10 true
}
letsLearnScope()
console.log(af, bf) // JavaScript 10, accessible



function varOnlyScopedToFunction() {
    var v = 'Welcome to 30 days of JavaScript';
    console.log(v);
}
// console.log(v)//if we noticed properly we will realise from the previous example of (if true), that if we use var it can also be declared outside the curly braces of (if true) but function is exceptional. it is impossible for the three (var, let, and const)

// In ES6 and above there is let and const, so you will not suffer from the sneakiness of var. When we use let our variable is block scoped and it will not infect other parts of our code.

