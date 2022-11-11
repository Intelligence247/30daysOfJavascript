// Destructuring and Spread
// Destructuring is a way to unpack arrays, and objects and assigning to distinct variable.

// Destructuring Arrays

const number = [1, 45, 'Abdullahi']
let [numOne, numTwo, myName] = number
console.log(numOne, numTwo, myName)


const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

const scientificConstants = [2.72, Math.PI, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
];

let [frontEnd, backEnd] = fullStack;
console.log(frontEnd)
console.log(backEnd)
console.log(frontEnd, backEnd);


// If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
const ages = [23, 45, 67]
let [firstAge, , thirdAge] = ages;
console.log(firstAge, thirdAge)

const nickNames = ['Babatunde', 'Adisa', 'Aremu', 'Intelligence', 'Alao', 'Ajao', 'Alake']

const [first, , , second] = nickNames
console.log(first, second)


// We can use default value in case the value of array for that index is undefined:
const hisName = [undefined, 'Brook', 'David']
const [
    person1 = 'Asabeneh',
    person2,
    person3,
    person4 = 'John'
] = hisName
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [num1, num2, num3, num4, ...rest] = nums
console.log(num1, num2, num3, num4)
console.log(rest)

