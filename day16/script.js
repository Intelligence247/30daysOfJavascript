// JSON
// JavaScript Object Notation(JSON).The JSON syntax is derived from Javascript object notation syntax, but the JSON format is text or string only. JSon is a light wright data format for storing and transporting. JSON is mostly used when datais sent from a server to a client. JSON is an esier-to-use  alternative to XML.
// Example
const users = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
const userobj = JSON.parse(users, undefined, 3)
console.log(userobj)
// The above JSON example is not much different from a normal object. Then, what is the difference ? The difference is the key of a JSON object should be with double quotes or it should be a string. JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.


// Let us see the above example in more detail, it starts with a curly bracket. Inside the curly bracket, there is "users" key which has a value array. Inside the array we have different objects and each objects has keys, each keys has to have double quotes. For instance, we use "firstNaMe" instead of just firstName, however in object we use keys without double quotes. This is the major difference between an object and a JSON. Let's see more examples about JSON.
// Example
const ss = ` {
    "Alex": {
        "email": "alex@alex.com",
        "skills":[
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
}`
const ssObj = JSON.parse(ss, undefined, 5)
console.log(ssObj)


// Converting JSON to JavaScript Object
// Mostly we fetch JSON data from HTTP response or from a file, but we can store ths JSON as a string and we can change to Object for sake of demonstration. In JavaScript the keyword JSON has a parse() and stringify() methods. When we want to change the JSON to an object we parse the JSON using JSON.parse(). When we want to change the object to JSON we use JSON.stringify().

// JSON.parse() (JSON to Object)

// JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {

})
*/

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj)

const usersObjReviver = JSON.parse(usersText, (key, value) => {
    let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})
console.log(usersObjReviver)

const reviver = JSON.parse(ss, (key, value) => {
    let newV = typeof value == 'string' && key != 'skills' ? value.substring(0, 1).toUpperCase() + value.substr(1).toLowerCase() : value
    return newV
})
console.log(reviver)


// The JSON.parse() is very handy to use. You do not have to pass optional parameter, you can just use it with the required parameter and you will achieve quite a lot.

// Converting Object to JSON
// When we want to change the object to JSON we use JSON.stringify(). THe stringify() Method takes one required parameter and two Optional parameters. The replacer is used as filter and the space is an indentations. if we do not want to filter out any of the keys from the object we can just pass undefined. 

// JSON.stringify(obj, replacer, space)
// JSON or Text, the data
// reviver is an optional callback function


// Let us convert the following object to a string. First let use keep all the keys and also let us have 4 space indentation.

const usersToJson = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const txt = JSON.stringify(usersToJson, undefined, 4)
console.log(txt) // text means JSON- because json is a string form of an object.

// Using a filter Array with JSON.stringify
// using the replacer as filter. means using filter array with JSON.stringify()
// We can filter out a specific values from an object using the filter method, we are just to pass the values into the replacer in an Array and it filters them out alone
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
}

const UsingReplacer = JSON.stringify(usersToJson, ['Alex', 'Asab', 'email', 'skills', 'age', 'Brook', 'points'], 4)
console.log(UsingReplacer)
const txts = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(txts)
console.log('🌕')

