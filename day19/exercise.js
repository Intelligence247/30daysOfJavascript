// 1. Create a closure which has one inner function
const outerClosure = () => {
    let count = 0
    const innerClosure = () => {
        return count + 5.90
    }
    console.log(innerClosure())
}
outerClosure()


// Exercise 2 Starts Here
// 1. Create a closure which has three inner functions

function outerClosure3() {
    let name = ''
    const inner1 = () => {
        name += 'Usman'
        return name
    }
    const inner2 = () => {
        return name += ` Abdullahi`
    }
    const inner3 = () => {
        return name += ` Babatunde`
    }
    return {
        inner1: inner1(),
        inner2: inner2(),
        inner3: inner3()
    }
}
const print = outerClosure3()
console.log(print.inner1)
console.log(print.inner2)
console.log(print.inner3)




// Exercise 3 Starts here
// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = () => {
    const firstname = () => {
        let firstName = 'Usman'
        return firstName
    }
    const lastname = () => {
        let lastName = 'Abdullahi'
        return lastName
    }
    const incomes = () => {
        let incom = [12, 23, 34, 56]
        return incom
    }
    const expenses = () => {
        let expens = [23, 12, 11, 6]
        return expens
    }
    const addExpense = () => {
        let add = [12, 45]
        let addExpens = expenses().concat(add)
        return addExpens
    }
    const addIncome = () => {
        let add = [12, 34]
        return incomes().concat(add)

    }
    function totalExpense() {
        let sum = 0
        for (let i = 0; i < addExpense().length; i++) {
            sum += addExpense()[i]
        }
        return sum
    }
    function totalIncome() {
        let sum = 0;
        for (let i = 0; i < addIncome().length; i++) {
            sum += addIncome()[i]
        }
        return sum
    }
    const accountBalance = () => {
        return totalIncome() - totalExpense()
    }
    const accountInfo = () => {
        let info = `${firstname() + ' ' + lastname()} is the owner of this accout with incomes of (${incomes()}) and expenses of (${expenses()}) which the total income and the expenses is (${totalIncome()}) and (${totalExpense()}) Respectifully. and accout balance equals (#${accountBalance()})`
        return info
    }
    return {
        firstname: firstname(),
        lastname: lastname(),
        incomes: incomes(),
        expenses: expenses(),
        totalExpense: totalExpense(),
        totalIncome: totalIncome(),
        accountBalance: accountBalance(),
        accountInfo: accountInfo(),
    }

}

let printing = personAccount()
console.log(printing.lastname)
console.log(printing.accountInfo)
console.log(printing.expenses)
console.log(printing.incomes)


