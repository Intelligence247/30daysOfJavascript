// Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countriesExercise = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangleExercise = {
    widthExercise: 20,
    heightExercise: 10,
    areaExercise: 200,
    perimeterExercise: 60
}
const usersExercise = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [eExercise, piExercise, gravityExercise, humanBodyTempExercise, waterBoilingTempExercise] = constants
console.log(eExercise, piExercise, gravityExercise, humanBodyTempExercise, waterBoilingTempExercise)
// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countriesExercise
console.log(fin, est, sw, den, nor)
// 3. Destructure the rectangle object by its properties or keys.
const { widthExercise, heightExercise, areaExercise, perimeterExercise } = rectangleExercise
console.log(widthExercise, heightExercise, areaExercise, perimeterExercise)

const spreadRectangleExercise = { ...rectangleExercise }
console.log(spreadRectangleExercise)

for (const us of usersExercise) {
    console.log(us)
}
// Exercises: Level 2
// Iterate through the users array and get all the keys of the object using destructuring

const { name, scores, skills, age } = usersExercise
console.log(name, scores, skills, age)
for (const { name, scores, skills, age } of usersExercise) {
    console.log(name, scores, skills, age)
}
// 2. Find the persons who have less than two skills
const lessThanTwoskills = (obj) => {
    const findless = usersExercise.find((n) => n.skills.length < 2)
    if (findless) {
        return findless
    }
}
console.log(lessThanTwoskills())


// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [namesn, [...skillsn], [, , jsScore, reactScore]] = student
console.log(namesn, skillsn, jsScore, reactScore)

// 3. Write a function called convertArrayToObject which can convert the array to a structure object.






const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const [[nameso, [...skillso], [...scoreso]], [nameso2, [...skillso2], [...scoreso2]]] = students
console.log([[nameso, [skillso], [scoreso]], [nameso2, [skillso2], [scoreso2]]]);

const ok = () => {
    const [[nameso, [...skillso], [...scoreso]], [nameso2, [...skillso2], [...scoreso2]]] = students

    return `{
        name: ${nameso}
        skills: ${skillso}
        scores: ${scoreso}
    },
    {
    name: ${nameso2}
    skills: ${skillso2}
    scores: ${scoreso2}
    }`
}
console.log(ok(students))

const fullStacksE = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

const xx = []
for (const [first, second, third] of fullStacksE) {
    xx.push([{ first }, { second }, { third }])
}
console.log(xx)



// correct Answer = below
const convertArrayToObject = (param) => {
    const x1 = param[0][0]
    const x2 = param[0][1]
    const x3 = param[0][2]
    const x4 = param[1][0]
    const x5 = param[1][1]
    const x6 = param[1][2]
    return (
        [
            {
                name: x1,
                skills: x2,
                scores: x3,
            },
            {
                name: x4,
                skills: x5,
                scores: x6
            }
        ]
    )
}

console.log(convertArrayToObject(students))


// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const newStudent = { ...student }
console.log(newStudent)


// * Add Bootstrap with level 8 to the front end skill sets

const studentBoo = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}


const addBoo = (skills, levels) => {
    return studentBoo.skills.frontEnd.concat({
        skill: skills,
        level: levels
    })
}
console.log(addBoo('BootStrap', 8))


const addExpress = (ski, lev) => {
    return studentBoo.skills.backEnd.concat({
        skill: ski,
        level: lev,
    })
}
console.log(addExpress('Express', 9))

const addSql = (ski, lev) => {
    return studentBoo.skills.dataBase.concat({
        skill: ski,
        level: lev,
    })
}
console.log(addSql('SQL', 8))

const addSqlWithoutLev = (ski) => {
    return studentBoo.skills.dataScience.concat(ski)
}
console.log(addSqlWithoutLev('SQL'))
