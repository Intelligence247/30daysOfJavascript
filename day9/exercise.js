// Explain the difference between forEach, map, filter, and reduce.
// forEach function iterate an array and works with arrays only which returns a non array value
// while map also iterate through an array and returns an array value. the difference is map returns an array while for each does not
// The filter: filters out a full fill value in a new array
// the Reduce function has an accumulator and the current prameter which only returns a single value, and also the initial value which must be added if not it will take the first value array as the initial which might give a wrong calc,
// and if the array is empty the reduce function will throw an error

const countriesExercise = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const namesExercise = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbersExercise = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 2.Define a callback function before you use it in forEach, map, filter or reduce.
// a call back function is a function which can be pass to a parameter in another function

// 3.Use forEach to console.log each country in the countries array.

countriesExercise.forEach((country) => console.log(country))

// 4.Use forEach to console.log each number in the numbers array.
namesExercise.forEach(name => console.log(name))
// 5.Use forEach to console.log each number in the numbers array.
numbersExercise.forEach((num) => console.log(num))
// 6.Use map to create a new array by changing each country to uppercase in the countries array.
const countiresUpper = countriesExercise.map((upper) => upper.toUpperCase())
console.log(countiresUpper)

// 7.Use map to create an array of countries length from countries array.
const cLength = countriesExercise.map((clength) => clength.length)
console.log(cLength)

// 8.Use map to create a new array by changing each number to square in the numbers array
const numSq = numbersExercise.map((numsq) => numsq ** 2)
console.log(numSq)

// 9.Use map to change to each name to uppercase in the names array
const upArr = namesExercise.map((name) => name.toUpperCase())
console.log(upArr)

// 10.Use map to map the products array to its corresponding prices.
const pMap = products.map((price) => price)
console.log(pMap)

// 11.Use filter to filter out countries containing land.
const filLand = countriesExercise.filter((land) => land.includes('land'))
console.log(filLand)

// 12.Use filter to filter out countries having six character.
const countryWithSixCharacters = countriesExercise.filter((six) => six.length == 6)
console.log(countryWithSixCharacters)

// 13.Use filter to filter out countries containing six letters and more in the country array.
const countryWithSixOrMore = countriesExercise.filter((sixMore) => sixMore.length >= 6)
console.log(countryWithSixOrMore)

// 14.Use filter to filter out country start with 'E';
const countryStartE = countriesExercise.filter((E) => E.startsWith('E'))
console.log(countryStartE)

// 15.Use filter to filter out only prices with values.
const productPrice = products.filter((ex) => ex.price)
console.log(productPrice)


// 16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const q16 = countriesExercise.map((arr) => console.log(arr.toString()))
// console.log(q16)

// 17.Use reduce to sum all the numbers in the numbers array.
const reduceSum = numbersExercise.reduce((acc, cur) => acc + cur, 0)
console.log(reduceSum)

// 18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatenateReduce = countriesExercise.reduce((countr, concatt) => countr + ' ' + concatt, 'Estonia')
console.log(`${concatenateReduce} are all north European Countries`)

//19. Explain the difference between some and every
// Every iS checks if all the values are the same in one aspect and it returns a boolean
// while some checks if values are the same in some aspect and it returns a boolean 

// 20.Use some to check if some names' length greater than seven in names array
let someCheck = namesExercise.some((name) => name.length > 7)
console.log(someCheck)

// 21.Use every to check if all the countries contain the word land
let everyCheck = namesExercise.every((name) => name.includes('land'))
console.log(everyCheck)

// 22.Explain the difference between find and findIndex.
// find is used to find or check whether a values has something or not and it returns the value. and it returns the first element that satifies the condition
// while findIndex is used to check the index or the position of a particular value. it reuturns the index of the first element which satisfies the condition

// 23.Use find to find the first country containing only six letters in the countries array
let findC = countriesExercise.find(coun => coun.length == 6)
console.log(findC)

// 24.Use findIndex to find the position of the first country containing only six letters in the countries array

findIndexC = countriesExercise.findIndex((cc) => cc.length == 6);
console.log(findIndexC)

// 25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
findIndexNorway = countriesExercise.findIndex((nn) => nn.includes("Norway"))
console.log(findIndexNorway)

// 26.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
findIndexRussia = countriesExercise.findIndex((rr) => rr.includes('Russia'))
console.log(findIndexRussia)