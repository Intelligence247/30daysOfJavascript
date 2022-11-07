// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}
console.log(callback(9))

// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))



// Returning function
// Higher order functions return function as a value

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))



const overall = n => {
    const all = c => {
        const notAll = a => {
            return a + c + n + a

        }
        return notAll
    }
    return all
}
console.log(overall(9)(8)(9))




const first = n => {
    const second = o => {
        const third = p => {
            return n * p ** o;
        }
        return third
    }
    return second
}
console.log(first(9)(3)(5))

// Let us see were we use call back functions. For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray(numbers))

// The above example can be simplified as follows:
const numbers2 = [1, 2, 3, 4]

const sumArray2 = arr => {
    let sum = 0
    arr.forEach(function (element) {
        sum += element
    })
    return sum

}
console.log(sumArray2(numbers2))


let number3 = [12, 34, 51, 76];
const sumOfArray = arr => {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum;
}
console.log(sumOfArray(number3))

// Setting time
// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.
// *setInterval
// *setTimeout
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// syntax
// function callback() {
// code goes here
//   }
//   setTimeout(callback, duration) // duration in milliseconds
function sayHello() {
    console.log('Hello World')
}
setTimeout(sayHello, 3000);
setInterval(sayHello, 7000);




// Functional Programming
// Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.


let arr = [5, 67, 89]
arr.forEach(function (element, index, array) {
    console.log(element, index, array)
})

arr.forEach((element, index, array) => {
    console.log(element, index, array)
})

arr.forEach((element, index, array) => console.log(element, index, array))
let sum = 0;
let num = [1, 2, 3, 5, 6];
num.forEach(number => console.log(number))
console.log(sum)
let sum2 = 0
let arr2 = [12, 23, 45, 67];
arr2.forEach(number => sum2 += number)
console.log(sum2)

let sum3 = 0;
let arr3 = [12, 45, 78, 90, 49];
arr3.forEach(num => sum3 += num)
console.log(sum3)


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(element => console.log(element.toUpperCase()))


// map
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
let sumx = 0;
let x = [12, 34, 56, 78];
const xmap = x.map(element => sumx += element)
console.log(sumx)



let countriesMap = ['Nigeria', 'Finland', 'India', 'China', 'Japan', 'America', 'United', 'Kingdom']
countriesMap.map((element) => {
    console.log(element.toUpperCase())
})

// Explicit arrow function
// countries.map(element => console.log(element.toUpperCase()))

const numbersMap = [1, 2, 3, 4, 56];
const answer = numbersMap.map(element => element * element);
console.log(answer)


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const nameToUpperCase = names.map((name) => name.toUpperCase())
console.log(nameToUpperCase)
names.map((element) => console.log(element.toUpperCase()))
// The difference between the two names is the first will print the names inside a square bracket as an array and the second will only print the names out one by one...


const countriesMuch = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

countriesMuch.map(function (element) {
    console.log(element.toUpperCase())
})


const arrLike = countriesMuch.map(element => element.slice(0, 3).toUpperCase());
console.log(arrLike)


// FILTER.tolowerCase()
// Filter: Filter out items which full fill filtering conditions and return a new array.
// filteirng out country that includes land
const countriesF = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const countriesContaingLand = countriesF.filter((element) => element.includes('land'))
console.log(countriesContaingLand)

// filteirng country that includes en
const countriesContaingEn = countriesF.filter(element => element.includes('en'))
console.log(countriesContaingEn)

//  filtering out the countries ending with ia
const countriesEndWithIa = countriesF.filter((element) => element.endsWith("ia"))
console.log(countriesEndWithIa)

// filtering out country with only five letters

const countriesWithFiveLettersWord = countriesF.filter((element) => element.length === 5)
console.log(countriesWithFiveLettersWord)