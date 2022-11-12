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
