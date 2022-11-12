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

// Destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
    console.log(country, city)
}

const iDestructuring = [['12', '-4'], ['23', '-9'], ['34', '-67'], ['90', '-1']];



for (let [positive, negative] of iDestructuring) {
    console.log(positive, negative)
}

const fullStacks = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const [first, second, third] of fullStacks) {
    console.log({first, second, third})
}

//   Destructuring objects
// If we want to destructure an object the name must be exactly the same as the key or property of the object

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

const { width, height, area } = rectangle;
console.log(width, height, area)


// Renaming during structuring
// we can reassign a new name for the key or property example below
const rectangles = {
    widths: 150,
    heights: 40,
    areas: 6000
}

const { widths: w, heights: h, areas: a } = rectangles
console.log(w, h, a)


// If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example.

const square = {
    widths: 30,
    heights: 30,
    areas: 900,

}
const { widths, heights, areas, perimeter = 80 } = square
console.log(widths, height, areas, perimeter)
// also if the perimeter was declared at the square as the others but given the value of undefined it will still work the same way


// Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.

// Object parameter without destructuring


// without destructuring
function perimeterofRectangles(rect) {
    return 2 * (rect.widths + rect.heights)
}
console.log(perimeterofRectangles(rectangles))

const areaOfrectangles = (area) => {
    return (area.widths * area.heights)
}
console.log(areaOfrectangles(rectangles))

// another Example without destructuring
//Another Example
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    const personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

    return personInfo
}

console.log(getPersonInfo(person))


const formattedSkills = person.skills.slice(0, -1).join(', ') + ' ' + 'and' + ' ' + person.skills[person.skills.length - 1]
console.log(formattedSkills)

// My Practice
const info = (param) => {
    const and = param.skills.slice(0, -1).join(', ')
    const and2 = param.languages.slice(0, -1).join(', ')
    const personInfo = `${param.firstName} ${param.lastName} lives in ${param.country}. He is ${param.age} years old. He is an ${param.job}. He teaches ${and} and ${param.skills[param.skills.length - 1]}. He speaks ${and2} and a little bit of ${param.languages[param.languages.length - 1]}.`
    return personInfo
}
console.log(info(person))


// Object parameter with destructuring

const perimeterOfsquare = (({ widths, heights }) => {
    console.log(2 * (widths + heights))
})
perimeterOfsquare(square)


const getInfo = (({ firstName, lastName, age, country, job, skills, languages }) => {
    const and = skills.slice(0, -1).join(', ')
    const and2 = languages.slice(0, -1).join(', ')
    const lastSkills = skills[skills.length - 1]
    const lastlang = languages[languages.length - 1]
    return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${and} and ${lastSkills}. He speaks ${and2} and a little bit of ${lastlang}.`
})
console.log(getInfo(person))



// Destructuring object during iteration
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}

// Spread or Rest operator
// When  we destructure an array we use spread operator(...) to get the rest elements as array. In addition we use spread operator to spread array elements to another array.

// Spread operator to get the rest of array elements

const numssp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1s, num2s, num3s, ...rests] = numssp

console.log(num1s, num2s, num3s)
console.log(rests)


const countriesSp = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]
let [g, f, ...restOfCountry] = countriesSp
console.log(g, f, restOfCountry)

// Spread operators to copy arrays

const bothNumAndCountry = [...numssp, ...countriesSp]
console.log(bothNumAndCountry)
const fullStackSp = [...frontEnd, ...backEnd]
console.log(fullStackSp)

// Spread operator to copy object
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}
const spreadPerson = { ...person }
console.log(spreadPerson)

// We can modify or change an object while copying

const spreadPersonAndModify = { ...person, languages: ['English', 'Yoruba', 'Arabic',] }
console.log(spreadPersonAndModify)

const modifyUser = { ...user, name: 'Abdullahi', city: 'Ilorin', country: 'Nigeria' }
console.log(modifyUser)

// Spread operator with arrow function

// WhenEver we use a spread Operator in an arrow function as the parameter, the argument passed when we invoke a function will change to an array, to this is mostly used when the parameters are much
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

const smallNums = (...arg) => {
    console.log(arg)
}
smallNums(1, 2, 3, 4, 5)

function same(...argument) {
    let sum = 0;
    for (const s of argument) {
        sum += s
    }
    console.log(sum)
}
same(1, 2, 3, 4, 5)