
// 1.Declare an empty array;
let empty = Array();
console.log(empty);
// 2.Declare an array with more than 5 number of elements
let moreNumbers = [11, 12, 13, 14, 15, 16, 17, 18];
console.log(moreNumbers)
// 3.Find the length of your array
console.log(moreNumbers.length)

// 4.Get the first item, the middle item and the last item of the array
// First Item moreNumbers =
console.log(moreNumbers[0])
// middle item of moreNumbers
console.log(moreNumbers[4]);
// Last item of moreNumbers =
let lastNumber = moreNumbers.length - 1;
console.log(moreNumbers[lastNumber])


//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [12, true, 'abdullahi', undefined, null, NaN];
console.log(mixedDataTypes.length);

// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


// 7.Print the array using console.log()
console.log(itCompanies);
//8. Print the number of companies in the array
console.log(itCompanies.length);

// 9.Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[4]);
let lastCompany = itCompanies.length - 1;
console.log(itCompanies[lastCompany]);
// 10.Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', '))

// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

console.log();

if (itCompanies.includes('Facebook')) {
    console.log('Facebook Company')
} else {
    console.log('Company not found')
}

// 15. Sort the array using sort() method
let itCompaniesSort = itCompanies.sort();
console.log(itCompaniesSort);

// 16. Reverse the array using reverse() method
let itCompaniesReverse = itCompanies.reverse();
console.log(itCompaniesReverse);

// 17.Slice out the first 3 companies from the array
console.log(itCompanies)
let itCompaniesSlice = itCompanies.slice(3, 7);
console.log(itCompaniesSlice);

// 18. Slice out the last 3 companies from the array
let itCompaniesSliceLast3 = itCompanies.slice(0, 4);
console.log(itCompaniesSliceLast3)
// 19.Slice out the middle IT company or companies from the array
let itCompaniesSliceMiddle = itCompanies.slice(0, 3, 3, 7)
console.log(itCompaniesSliceMiddle);
// 20. Remove the first IT company from the array
let itCompaniesRemoveFirst = itCompanies.shift();
console.log(itCompaniesRemoveFirst);
// 21.Remove the middle IT company or companies from the array
let middleIt = itCompanies.splice(4, 4);
console.log(middleIt)

// 22.Remove the last IT company from the array
console.log(itCompanies.pop());
//23. Remove all IT companies
console.log(itCompanies.splice())










//exercise  2 starts here
console.log('exercise  2 starts here')
//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// 2.First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let joins = text.join(' ')

let words = text.split(',');
let jj = words.join('')
const ss = jj.split('.')
const j = ss.join('')
const spl = j.split(' ')
console.log(spl)

// 3.In the following shopping cart add, remove, edit items

// add 'Meat' in the beginning of your shopping cart if it has not been already addedf
const shoppingCart = ['Milk', 'Cofee', 'Tea', 'Honey']
let add = shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

let addToEnd = shoppingCart.push('Sugar');
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
const shoppingCartRempve = ['Milk', 'Cofee', 'Tea', 'Honey']
let removeHoney = shoppingCartRempve.pop();
console.log(removeHoney)

// modify Tea to 'Green Tea'
shoppingCart[2] = 'Green Tea';
console.log(shoppingCart);


// 6.Concatenate the following two variables and store it in a fullStack variable.
const frontEndExercise = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEndExercise = ['Node', 'Express', 'MongoDB']
const fullStackExercise = frontEndExercise.concat(backEndExercise);
console.log(fullStackExercise)


// Exercise 3, Starts here 
// The following is an array of 10 students ages:
const ages = [19, 20, 22, 19, 24, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
const max = Math.max(...ages);
console.log(max)
const min = Math.min(...ages)
console.log(min);
const sortAges = ages.sort();
console.log(sortAges)

console.log(Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));
console.log(Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));

// Find the range of the ages(max minus min)
console.log(max - min)


// Find the average age(all items divided by number of items)

let sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {
    sumOfAges = sumOfAges + ages[i]
}
console.log(sumOfAges)
let meanSum = sumOfAges / ages.length;
console.log(meanSum);

// Questions
// exercise3 Number3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

//Exercise3 Question1 Find the median age(one middle item or two middle items divided by two)

ages.sort((a, b) => a - b)
console.log(ages)

if (ages.length % 2 == 0) {
    const r = ages.length / 2;
    const median = (ages[r] + ages[r - 1]) / 2
    console.log(median, "median")
} else {
    const r = ages.length / 2;
    const median = ages[Math.floor(r)]
    console.log(median, "median")
}







let marksPra = [12, 23, 34, 45, 6, 76, 78, 89, 45, 23, 21, 23];
marksPra.sort((a, b) => a - b)
console.log(marksPra);
let midX = marksPra.length;
console.log(`${(midX / 2) + (midX / 2 + 1)}`)
if (midX % 2 == 0) {
    let cc = midX / 2;
    let cc1 = (midX / 2) - 1;
    let both = cc + cc1;
    console.log((marksPra[cc] + marksPra[cc1]) / 2)
} else {
    // let med = 
    console.log(marksPra[Math.floor(midX / 2)])
}

//Question14exercise1 Filter out companies which have more than one 'o' without the filter method
// having problem with slice Number 19 Exercise 1
// exercise1 Question 21 splice



