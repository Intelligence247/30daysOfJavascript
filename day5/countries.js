const countriesExercise = [
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

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let confirmEthopia = countriesExercise.includes('Ethiopia');
let pushs = countriesExercise.push('Ethopia')
if (confirmEthopia) {
    console.log('ETHIOPIA')
} else {
    console.log(`${countriesExercise}`)
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let divideCountry = countriesExercise.length / 2;
console.log(divideCountry);
