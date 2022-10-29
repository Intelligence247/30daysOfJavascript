// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []// syntax
// This the most recommended way to create an empty list
const arr2 = []
console.log(arr2)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)


let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(' ')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
const numbersModify = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

const countriesModify = [
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
    'Kenya'
]

countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Replacing Kenya by Korea
console.log(countries);

const sixEmptyValues = Array(6);
console.log(sixEmptyValues);

const arrFill = Array() // creates an an empty array
console.log(arrFill)

// Creating Static values
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

const fillArray = Array(6).fill('You shall be great');
console.log(fillArray);

// Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

const fruitsConcat = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetablesConcat = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruitsConcat.concat(vegetablesConcat)                 // concatenate the two arrays

console.log(fruitsAndVegetables)

// Getting array length
const numbersLength = [1, 2, 3, 4, 5]
console.log(numbersLength.length) // -> 5 is the size of the array
// Getting the index of a particular array. that is to check whether a particular number exists or not.
const numberOne = [1, 2, 3, 4, 5];
const numberTwo = [6, 7, 8, 9, 10];
const numberConcat = numberOne.concat(numberTwo);
console.log(numberConcat)
console.log(numberConcat.indexOf(9))

// Array.isArray:To check if the data type is an array
const numbersIsArray = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbersIsArray)) // true

const numberIsArray = 100
console.log(Array.isArray(numberIsArray)) // false

// Converting array to string

const numbersToString = [1, 2, 3, 4, 5]
console.log(numbersToString.toString()) // 1,2,3,4,5

const namesToString = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(namesToString.toString()) // Asabeneh,Mathias,Elias,Brook

// Joining of an Array

const numbersJoin = [1, 2, 3, 4, 5]
console.log(numbersJoin.join()) // 1,2,3,4,5

const namesJoin = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(namesJoin.join()) // Asabeneh,Mathias,Elias,Brook
console.log(namesJoin.join('')) //AsabenehMathiasEliasBrook
console.log(namesJoin.join(' ')) //Asabeneh Mathias Elias Brook
console.log(namesJoin.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(namesJoin.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechsJoin = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // List of web technologies

console.log(webTechsJoin.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechsJoin.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

const numbersSlice = [1, 2, 3, 4, 5]

console.log(numbersSlice.slice()) // -> it copies all  item
console.log(numbersSlice.slice(0)) // -> it copies all  item
console.log(numbersSlice.slice(0, numbers.length)) // it copies all  item
console.log(numbersSlice.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

console.log(numbersSlice.slice(1, 4))

// Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

const numbers1Splice = [1, 2, 3, 4, 5]
numbers1Splice.splice(0, 4)
console.log(numbers1Splice)                // -> remove all items

const numbers2Splice = [1, 2, 3, 4, 5]
numbers2Splice.splice(0, 1)
console.log(numbers2Splice)            // remove the first item


const numbers3Splice = [1, 2, 3, 4, 5, 6]
numbers3Splice.splice(3, 3, 7, 8, 9)
console.log(numbers3Splice.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
const arrPush = ['item1', 'item2', 'item3']
arrPush.push('new item')
console.log(arrPush)
// ['item1', 'item2','item3','new item']

// pop: Removing item in the end.
const numbersPop = [1, 2, 3, 4, 5]
numbersPop.pop() // -> remove one item from the end
console.log(numbersPop) // -> [1,2,3,4]

// shift: Removing one array element in the beginning of the array.
const numbersShift = [1, 2, 3, 4, 5]
numbersShift.shift() // -> remove one item from the beginning
console.log(numbersShift) // -> [2,3,4,5]

// unshift: Adding array element in the beginning of the array.
const numbersUnshfit = [1, 2, 3, 4, 5]
numbersUnshfit.unshift(0) // -> add one item from the beginning
console.log(numbersUnshfit) // -> [0,1,2,3,4,5]

// reverse: reverse the order of an array.

const numbersReverse = [1, 2, 3, 4, 5]
numbersReverse.reverse() // -> reverse array order
console.log(numbersReverse) // [5, 4, 3, 2, 1]

numbersReverse.reverse()
console.log(numbersReverse) // [1, 2, 3, 4, 5]


// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTechsSort = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

webTechsSort.sort()
console.log(webTechsSort) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechsSort.reverse() // after sorting we can reverse it
console.log(webTechsSort) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array can store different data types including an array itself. Let us create an array of arrays

let frontEnd = ['Html', 'CSS', 'JavaScript', 'React', 'Redux'];
let backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = [frontEnd, backEnd];
console.log(fullStack)
console.log(fullStack[0]);
console.log(fullStack[1]);
console.log(fullStack.length);
console.log(fullStack[0].length);
console.log(fullStack[1].length);




