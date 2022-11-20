// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firsNameEx', 'Intelligence')
localStorage.setItem('lastNameEx', 'Babatunde')
localStorage.setItem('ageEx', 30)
localStorage.setItem('countryEx', 'Nigeria')
localStorage.setItem('cityEx', 'Abuja')
// Exercise 2


//1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Usman',
    lastName: 'Abdullahi',
    age: 56,
    skills: ['Technical Writing', 'HTML', 'CSS', 'JavaScript', 'React'],
    country: 'Nigeria',
    city: 'Ilorin'

}

const studentStr = JSON.stringify(student, undefined, 1)
localStorage.setItem('Student', studentStr)


// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description
// const personAccount = {
//     firstName: 'Idris',
//     lastName: 'Hussein',
//     incomes: [20, 45, 78],
//     expenses: [12, 45, 90],
// }
class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = incomes
        this.expenses = expenses

    }
    totalIncome() {
        let sum = 0
        for (let i = 0; i < this.incomes.length; i++) {
            sum += this.incomes[i]
        }
        return sum
    }
    totalExpenses() {
        let ss = 0
        const sum = this.expenses.forEach((n) => ss += n)
        return ss
    }
    accountInfo() {
        const info = `${this.firstname} ${this.lastname} is the owner of this account with income of ${this.totalIncome} and with expenses of ${this.totalExpenses}`
    }
    set addIncome(inc) {
        // inc += this.incomes
        this.incomes.push(inc)
    }
    set addExpenses(exp) {
        this.expenses.push(exp)
    }
    accounBalance() {
        const balance = this.totalIncome() - this.totalExpenses()
        return balance
    }
}
const account = new PersonAccount('Usman', 'Abdullahi', [20, 30, 890, 78], [23, 45, 67])
account.addIncome = 2309
account.addExpenses = 900
account.addExpenses = 5000
account.addIncome = 7000
console.log(account.accounBalance())
console.log(account.totalIncome())
console.log(account.totalExpenses())

const stringifyPersonAcc = JSON.stringify(account, undefined, 4)
console.log(stringifyPersonAcc)

// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
    firstName: 'Usman',
    lastName: 'Abdullahi',
    incomes: [23, 67, 89],
    expenses: [12, 78, 3],
    addExpense: function () {
        let add = [23, 56]
        let ans = add.concat(this.expenses)
        return ans
    },
    addIncome: function () {
        let addI = [12, 56, 90]
        return this.incomes.concat(addI)
    },
    totalIncome: function () {
        let sum = 0
        for (let i = 0; i < this.addIncome().length; i++) {
            sum += this.addIncome()[i]
        }
        return sum
    },
    totalExpenses: function () {
        let sum = 0
        for (let i = 0; i < this.addExpense().length; i++) {
            sum += this.addExpense()[i]
        }
        return sum
    },
    accounBalance: function () {
        let balance = this.totalIncome() - this.totalExpenses()
        return balance
    },
    accountInfo: function () {
        let info = `${this.firstName + ' ' + this.lastName} is the owner of this account with expenses (${this.addExpense()}) and income of (${this.addIncome()}) and a total Expense and Income of (#${this.totalExpenses()}),(#${this.totalIncome()}) respectifully. 
        and also with accountBalance of of (#${this.accounBalance()})`
        return info
    },
}
console.log(personAccount.totalExpenses())
console.log(personAccount.totalIncome())
console.log(personAccount.accounBalance())
console.log(personAccount.accountInfo())
const personAccountStr = JSON.stringify(personAccount)
localStorage.setItem('PeronsAccount', personAccountStr)
console.log(localStorage)