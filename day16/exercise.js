const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}
const text = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// 1. Change skills array to JSON using JSON.stringify()
const skillsArrTOJson = JSON.stringify(skills, undefined, 4)
console.log(skillsArrTOJson)

// 2. Stringify the age variable
const ageToStringify = JSON.stringify(age, undefined, 2)
console.log(ageToStringify)

// 3. Stringify the isMarried variable
const isMarriedStringify = JSON.stringify(isMarried, undefined, 3)
console.log(isMarriedStringify)


// 4. Stringify the student object
const studentStringify = JSON.stringify(student, undefined, 4)
console.log(studentStringify)

// All these example shows we can stringify a boolean,string,Numbers and object itself
let nn;
const nullst = JSON.stringify(nn, undefined, 4)
console.log(nullst)
// We can can also stringify null and undefined, Definetely all data types can be stringify, either primitive or non-primitive data types

console.log('%cExcercise%c %cTwo%c %cStarts%c %cHere%c',
    'color:pink; background:red;font-size:2rem;font-weight:900',
    '',
    'color:white;background:blue;font-size:2rem;font-weight:900',
    '',
    'color:green;font-size:2rem;font-weight:900',
    '',
    'color:yellow;font-size:2rem;font-weight:900',
    '',)

// 1. Stringify the students object with only firstName, lastName and skills properties
const stringifyPart = JSON.stringify(student, ['firsName', 'lastName', 'skills'], 4)
console.log(stringifyPart)

console.log('%cExcercise%c %cThree%c %cStarts%c %cHere%c',
    'color:pink; background:red;font-size:2rem;font-weight:900',
    '',
    'color:white;background:blue;font-size:2rem;font-weight:900',
    '',
    'color:green;font-size:2rem;font-weight:900',
    '',
    'color:yellow;font-size:2rem;font-weight:900',
    '',)

// 1. Parse the txt JSON to object.
const textToJson = JSON.parse(text, undefined, 4)
console.log(textToJson)

// Find the user who has many skills from the variable stored in txt.
let max = Math.max
const skillsLength = JSON.parse(text, (key, value) => {

    if (typeof key == 'string' && key != 'email' && key != 'age' && key != 'isLoggedIn' && key != 'points') {
        let arr = [
            textToJson.Alex.skills,
            textToJson.Brook.skills,
            textToJson.Daniel.skills,
            textToJson.John.skills,
            textToJson.Thomas.skills,
            textToJson.Paul.skills,
            textToJson.Asab.skills,
        ]
        // let ans = []
        let ax = []
        for (const c of arr) {
            ax.push(c.length)
        }
        let maxUser = Math.max(...ax)
        for (const i of arr) {
            let anss = (maxUser === i.length) ? i : i
            return anss
        }
    } else {
        // return value
    }

})
console.log(skillsLength)



//Exercie 3 Number 2: Find the user who has many skills from the variable stored in txt.

// []
// const mapss = textToJson.map(({n:skills}) => {

// });((n) => {
//     for (const c of n.skills){
//         console.log(c)
//     }
// })

console.log('🎉🎉🎉🎉🎉🎉🎉')
console.log(textToJson)
let arr = [
    textToJson.Alex.skills,
    textToJson.Brook.skills,
    textToJson.Daniel.skills,
    textToJson.John.skills,
    textToJson.Thomas.skills,
    textToJson.Paul.skills,
    textToJson.Asab.skills,
]
let ax = []
for (const c of arr) {
    ax.push(c.length)
}
// console.log(ax)
let maxUser = Math.max(...ax)
for (const i of arr) {
    if (maxUser == i.length) {
        console.log(i, i.length)
    }
}


