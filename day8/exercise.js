// Execise: Level 1
// 1.Create an empty object called dog

const dog = {}
// 2.Print the the dog object on the console
console.log(dog);
// 3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dogNumber3 = {
    name: 'Puppy',
    legs: 'Four',
    bark: 'Woof',
    woofBark: function () {
        return `${this.bark} ${this.bark}`
    }
}

// 4.Get name, legs, color, age and bark value from the dog object
const assignExercise = Object.assign({}, dogNumber3)
let valueExercise = Object.values(assignExercise)
console.log(valueExercise)

// 5.Set new properties the dog object: breed, getDogInfo
dogNumber3.getDogInfor = function () {
    let breed = "Pure Breed";
    let all = `This is my ${this.name}, it has ${this.legs} legs and barks ${this.woofBark()} which is also a ${breed}`
    return all;

}
console.log(dogNumber3.getDogInfor())


// Exercises: Level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30

    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
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
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
users.Alex.skills.length
users.Brook.skills.length
users.Daniel.skills.length
users.John.skills.length
users.Thomas.skills.length
users.Paul.skills.length
users.Asab.skills.length
// 1.Find the person who has many skills in the users object.
let arr = [
    users.Alex.skills,
    users.Brook.skills,
    users.Daniel.skills,
    users.John.skills,
    users.Thomas.skills,
    users.Paul.skills,
    users.Asab.skills,
]
let coppy = Object.assign({}, users)
let keyss = Object.keys(coppy)
let longestUsersSkills = [];
for (const i of arr) {
    longestUsersSkills.push(i.length)
    // console.log(i.length)
}
let maxUser = Math.max(...longestUsersSkills);
for (const i of arr) {
    if (i.length == maxUser)
        console.log(i)

}
// 2.Count logged in users, count users having greater than equal to 50 points from the following object.
let arrAge = [
    users.Alex.points,
    users.Brook.points,
    users.Daniel.points,
    users.John.points,
    users.Thomas.points,
    users.Paul.points,
    users.Asab.points,
]

for (const c of arrAge) {
    if (c >= 50) {
        console.log(c)
    }
}

// 3.Find people who are MERN stack developer from the users object
let letInclude = [
    users.Alex.skills,
    users.Brook.skills,
    users.Daniel.skills,
    users.John.skills,
    users.Thomas.skills,
    users.Paul.skills,
    users.Asab.skills,

]
for (const i of letInclude) {
    let check = i.includes('MERN');
    if (check == true) {
        console.log(i)//Zero user
        console.log(check)
    }
}

// 4. Set your name in the users object without modifying the original users object


console.log(users.Alex);

// 5. Get all keys or properties of users object

let assign = Object.assign({}, users)
let key = Object.keys(assign)
console.log(key)
//6. Get all the values of users object


let values = Object.values(assign)
console.log(values)

// 7.Use the countries object to print a country name, capital, populations and languages.

const countries = {
    country: 'Nigeria',
    capital: 'Abuja',
    population: '200 million',
    languages: 'More than 251 languages',
}

countries.getCountriesInfo = function () {
    let all = `${this.country} is a country with over ${this.population} population and speaks ${this.languages}`
    return all
}
console.log(countries.getCountriesInfo())



// Exercise: level 3
// 1.Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


const personAccount = {
    firstName: 'Usman',
    lastName: 'Abdullahi',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    incomes: [390, 45, 670, 900, 20000],
    totalIncomes: function () {
        let total = 0;
        for (let i = 0; i < this.incomes.length; i++) {
            total += this.incomes[i]
        }
        return total
    },
    expense: [200, 340, 5600, 200, 12000],
    totalExpenses: function () {
        let total2 = 0;
        for (let i = 0; i < this.expense.length; i++) {
            total2 = total2 + this.expense[i]

        }
        return total2
    }
}
let addIncome = (900);
let addExpense = (700);
personAccount.accountInfo = function () {

    let accountBalance = `${this.totalIncomes() - this.totalExpenses()}`
    let all = `${this.fullName()} with an income ${this.totalIncomes()} and also expenses ${this.totalExpenses()} which has the total balance of ${accountBalance} with a bonus ${addIncome} and loss ${addExpense}`
    return all

}
console.log(personAccount.accountInfo())













// Exercise 3 number 2, 3 and 4
