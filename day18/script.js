// Promise
// We human give or receive a promise to do some activity at some point in time. If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment. Promise in JavaScript has something in common with the above examples.

// A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// * pending: initial state, neither fulfilled nor rejected.
// * fulfilled: meaning that the operation completed successfully.
// * rejected: meaning that the operation failed.
// A pending promise can either be fulfilled with a value, or rejected with a reason(error).When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

// As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

// Callbacks
// To understand promise very well let us understand callback first.Let's see the following callbacks. From the following code blocks you will notice, the difference between callback and promise

// * call back Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.
// In this case the err has a value and it will return the err block

const doSomething = (callback) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)
}
// console.log(doSomething(callback))
const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}
doSomething(callback)

const setTime = (callback) => {
    setTimeout(() => {
        skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 2000);
}

const checkErr = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}
setTime(checkErr)

// Promise constructor
// We can create a promise using the Promise constructor. We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.
// Syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})


// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))


const practice = new Promise((resolve, reject) => {
    setTimeout(() => {
        let names = ['Abdullahi', 'Babatunde', 'Intelligence']
        if (names.length === 3) {
            resolve(names)
        } else {
            reject('Something went wrong')
        }
    }, 2500);
})

practice
    .then((result) => console.log(result)
    )
    .catch((x) => console.log(x))


// The above promise has been settled with resolve. Let us another example when the promise is settled with reject.

const settleWithReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numbers = [12, 13, 45, 67]
        if (numbers.includes(11)) {
            resolve('It includes Odd Numbers')
        } else {
            reject('It does not include Odd Numbers')
        }
    }, 3000);
})
settleWithReject
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject))


// Fetch API
// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. In this challenge we will use fetch to request url and APIS. In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
        // getting the data
        console.log(data)
    })
    .catch(error => console.error(error)) // handling error if something wrong happens

// const url2 = 'https://restcountries.com/v2/all'
// fetch(url2)
//     .then(response => response.json())
//     .then((resolve) => console.log(resolve))
//     .catch((reject) => console.log(reject))


// Async and Await
// Async and Await is an elegant way to handle promises.It is easy to understand and it clean to write. 
const square = async function (n) {
    return n * n
}
console.log(square(9))

const rectangle = async (l, b) => {
    return l * b
}
console.log(rectangle(24, 14))

// The word async infront of a function means that function will return a promise. The above square function instead of a value it returns a promise

// How do we access the value from the promise? To access the value from the promise, we will use the keyword await 

// const awaitTrial = async function (n) {
//     return n * n
// }

// const awaitValue = await awaitTrial(23)
// console.log(awaitValue)
// const squarea = async function (n) {
//     return n * n
// }
// const values = await squarea(n)
// console.log(values)

fetch(url)
    .then(resolve => resolve.json())
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject))

// async and await

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (error) {
        console.log(error)
    }
}
fetchData()

const fetchData2 = (async () => {
    try {
        const xx = await fetch(url)
        const countries = await xx.json()
        console.log(countries)
    } catch (error) {
        console.log(error)
    }
})
fetchData2()


const urlFetch = async function () {
    try {
        const urlResolve = await fetch(url)
        const country = await urlResolve.json()
        console.log(country)
    } catch (error) {
        console.log(error)
    }
}
console.log('===== async and await')
urlFetch()
