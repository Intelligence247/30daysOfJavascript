const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const persons = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: true
}
console.log(persons)




const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
}


// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])



person.skills = 'FullStack Developer';
console.log(person)//The skills object has changed to FullStack Developer






const personss = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
personss.nationality = 'Ethiopian'
personss.country = 'Finland'
personss.title = 'teacher'
personss.skills.push('Meteor')
personss.skills.push('SasS')
personss.isMarried = true

personss.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(personss)
console.log(personss.getPersonInfo())



const practicePerson = {
    firstName: 'Usman',
    lastName: 'Abdullahi',
    nickName: 'Intelligent',
    fullName: function () {
        return `${this.firstName} ${this.lastName}, you can call me '${this.nickName}'`
    },
    skills: ['Html', 'CSS', 'JavaScript'],
    isMarried: false,
    occupation: 'Student',
    School: 'Federal University of Ilorin',
    'course of study': 'Telecommunication Science',
    occupation2: 'Frontend Developer',
    'phone no': "09135619423",
    email: 'Uthmanabdullahi2020@gmail.com',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },

}

practicePerson.skills.unshift('Microsoft Word')
practicePerson.skills.unshift('Microsoft Excel')
practicePerson.skills.push('Corel Draw')
practicePerson.nickName = ('Intelligence')

practicePerson.sumOfAll = function () {
    let skillsWithoutTheLast = this.skills.splice(0, this.skills.length - 1);
    let getFullName = this.fullName()
    let all = `My name is ${getFullName} I am a ${this.occupation} of ${this.School} Studying ${this["course of study"]}.I am also a '${this.occupation2}' the skills I have are ${skillsWithoutTheLast}.\n\tYou can contact me on ${this["phone no"]} or ${this.email}`
    return all

}
console.log(practicePerson.sumOfAll())
console.log(practicePerson)

let copy = Object.assign({}, practicePerson);
console.log(copy)

let keys = Object.keys(copy)
console.log(keys)
const sumOfAll = Object.keys(copy.address)
console.log(sumOfAll)

let value = Object.values(copy)
console.log(value)
// Getting object keys and values using Object.entries()

const entries = Object.entries(copy)
console.log(entries)

// Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object

console.log(copy.hasOwnProperty('nickName'))
console.log(copy.hasOwnProperty('middleName'))