// Sets and Maps
// Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.

// Creating an empty set
const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// One thing I realised about the set is, it doesn't print an element twice, and will have it own new lenght after removing repetitions

// Set is also an iterateable object we can iterate through a set example

for (const c of setOfLanguages) {
    console.log(c)
}

// Adding an element to a set

setOfLanguages.add('Fulbe')
console.log(setOfLanguages.size)
console.log(setOfLanguages)


companies.add('Google')
companies.add('Amazon')
companies.add('Apple')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size)
console.log(companies)

// We can use for loop to add element to sets exmaple

const names = ['Abdullahi', 'Usman', 'Intelligence', 'Babatunde', 'Intelligence', 'Abdullahi', 'Intelligence', 'Idris']
const addNames = new Set()
for (const name of names) {
    addNames.add(name)
}
console.log(addNames.size)
console.log(addNames)


const arrOfLanguages = ['Html', 'CSS', 'JavaScript', 'Python', 'React.js', 'MongoDb']
const newSet = new Set();
for (const c of arrOfLanguages) {
    newSet.add(c)
}
console.log(newSet)

// Deleting an element a set

// We can delete an element from a set by using the delete method

const front = [newSet.delete('Html'), newSet.delete('CSS'), newSet.delete('MongoDb')]
newSet.delete('JavaScript')

console.log(newSet)


// Checking an element in the set
// The has method can help to know if a certain element exists in a set.

console.log(newSet.has('C++'))
console.log(addNames.has('Intelligence'))

// Clearing a Set
// It removes all the elements in a set

newSet.clear()
console.log(newSet)


const counts = []
const count = {}
for (const l of setOfLanguages) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })

}
console.log(counts)

let pushd = []
for (const c of setOfLanguages) {
    const filterlang = languages.filter((k) => k === c)
    pushd.push({ language: c, number: filterlang.length })
}
console.log(pushd)


const com = [];
for (const c of addNames) {
    const filterName = names.filter((nf) => nf == c)
    com.push({ lang: c, repeat: filterName.length })
}
console.log(com)

// Another use of set is to count the uniques elements in an array;
const numbers = [12, 45, 67, 89, 0, 0, 12, 12, 45, 45, 56, 56, 56, 56, 78]

const numSet = new Set(numbers)
console.log(numSet)

// Union of sets

// To find the union of a set can be achived using the spread operator. now let find the union of a and b (a U b)

let a = [1, 2, 3, 4, 5, 6, 7, 76, 89, 90]
let b = [1, 3, 5, 6, 8, 90, 56, 34, 12, 76]
console.log('a is =' + ' ' + a + ' and b is' + ' ' + b)
let c = [...a, ...b]
const setC = new Set(c)
console.log(setC)



//  Intersection of a set
// TO find the Intersection of a set can be achieved using filter. example below

let ai = [12, 34, 1, 2, 3, 4, 6, 9]
let bi = [13, 24, 4, 5, 7, 8, 9, 0, 1]

let aiSet = new Set(ai)
let biSet = new Set(bi)

const filterForI = ai.filter((x) => biSet.has(x))
const filterForISet = new Set(filterForI)
console.log(filterForISet)

// Difference of a set































// To find the difference of a set can be achived by using filter
// This has the same method with intersectioin but difference will have a negation operator

const ad = [1, 2, 3, 4, 5, 6, 56, 67, 34, 2, 324, 54, 5]
const bd = [1, 23, 32, 4, 35, 556, 76, 77, , 8]

const adNew = new Set(ad)
const bdNew = new Set(bd)

const filterDifference = ad.filter((n) => !bdNew.has(n))
const filterDifferenceNew = new Set(filterDifference)
console.log(filterDifferenceNew)


// Map

// creating a new map

const map = new Map()
console.log(map)

// Creating a map form an array

const arrMap = [
    ['Mother', 'Father'],
    ['Brother', "Sister"],
    ['Wife', 'Children'],
]
const mapOfArrMap = new Map(arrMap)
console.log(mapOfArrMap)

// Adding values to the Map

const countriesMap = new Map()
console.log(countriesMap.size)
countriesMap.set('Nigeria', 'Abuja')
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)



// Getting a value from Map

console.log(countriesMap.get('Finland'))
console.log(countriesMap.get('Nigeria'))


// Checking key in Map
// Check if a key exists in a map using has method. It returns true or false.
console.log(countriesMap.has('Nigeria'))


// Getting all Values from map using loop

for (const [country, capital] of countriesMap) {
    console.log(country, capital)
}

for (const [x, y] of mapOfArrMap) {
    console.log(x, y)
}
// let p = []
// for (const [country, capital] of countriesMap) {
//     p.push(country, capital)
// }
// console.log(p)