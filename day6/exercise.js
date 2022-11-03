//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let wi = 0;
while (wi <= 10) {
    console.log(wi)
    wi++
}

let dowi = 0;
do {
    console.log(dowi)
    dowi++
} while (dowi <= 10)

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let forneg = 10; forneg >= 0; forneg--) {
    console.log(forneg)
}

let wineg = 10;
while (wineg >= 0) {
    console.log(wineg)
    wineg--
}

let dowineg = 10;
do {
    console.log(dowineg);
    dowineg--;
} while (dowineg >= 0)

let n = 0;
for (let inn = 9; i <= n; inn++) {
    console.log(23)
}

//3. Iterate 0 to n using for loop
// 4.Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i))
}

// 4.Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(`${i}*${i} = ${i * i}`)
}
// 5.Using loop print the following pattern
for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i ** 2}\t${i ** 3}`)
}
// 6.Use for loop to iterate from 0 to 100 and print only even numbers
for (let ip = 0; ip <= 100; ip++) {
    if (ip % 2 == 0) {
        console.log(ip)
    }
}
// This are some other possivle ways
// let num = [1,2,3,4,5,6,7,8,9,];

// console.log('even numbers are');
// for (var i = 1 ; i < 10 ; i += 2 ) {
//    console.log(i);
// }


// console.log('odd numbers are ');
// for (var i = 2 ; i < 10 ; i += 2 ) {
//   console.log(i);
// }


// 7.Use for loop to iterate from 0 to 100 and print only odd numbers
for (let iodd = 0; iodd <= 100; iodd++) {
    if (iodd % 2 === 1) {
        console.log(iodd)
    }
}
let ns = 20;
for (let i = 0; i <= n; i++) {
    console.log(i)
}


for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i))
}
// 8.Use for loop to iterate from 0 to 100 and print only odd numbers

function isPrime(n) {
    let num = Math.abs(n)
    if (num < 2) return false;
    if (num == 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}
console.log(isPrime(-12))

// 9.Use for loop to iterate from 0 to 100 and print only prime numbers
for (let iPrime = 0; iPrime <= 100; iPrime++) {
    if (iPrime != iPrime / 2 && iPrime != iPrime / 3 && iPrime != iPrime / 5) (
        console.log(iPrime)
    )

}
// 10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
const oneToHundred = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
let sumOneToHundred = 0;
for (let i = 0; i < oneToHundred.length; i++) {
    sumOneToHundred = sumOneToHundred + oneToHundred[i];
}
console.log(sumOneToHundred)

let pra = 0;
for (let i = 0; i <= 100; i++) {
    pra += i;
}
console.log(pra, 'Total sum')

// 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}
console.log(evenSum, 'Even sum')
console.log(oddSum, 'odd sum')

// 12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else {
        odd += i;
    }
}
// console.log(even, odd)
console.log([even, odd])

//13. Develop a small script which generate array of 5 random numbers
const randomArray = Math.floor(Math.random() * (122 - 34) + 34);
let randomArray1 = Math.floor(Math.random() * 12);
let randomArray2 = Math.floor(Math.random() * (23 - 5) + 5);
let randomArray3 = Math.floor(Math.random() * 19);
let randomArray4 = Math.floor(Math.random() * (9500 - 900) + 900);
console.log([randomArray, randomArray1, randomArray2, randomArray3, randomArray4]);
// 14.Develop a small script which generate array of 5 random numbers and the numbers must be unique

let uniqueArray = Math.floor(Math.random() * (300 - 10) + 10);
let uniqueArray1 = Math.floor(Math.random() * (100 - 15) + 15);
let uniqueArray2 = Math.floor(Math.random() * (120 - 21) * 12);
let uniqueArray3 = Math.floor(Math.random() * (95 - 5) + 5);
let uniqueArray4 = Math.floor(Math.random() * (55 - 5) + 5);
console.log([uniqueArray, uniqueArray1, uniqueArray2, uniqueArray3, uniqueArray4]);

// 15.Develop a small script which generate a six characters random id:
//Can change 7 to 2 for longer results.
let r = (Math.random() + 1).toString(30).substring(7);
console.log("random", r);



// Exercise 2 starts here
// 1.Develop a small script which generate any number of characters random id:
let cs = (Math.random() + 1).toString(20).substring(2);
console.log('randomNumber', cs)
let rs = (Math.random() + 1).toString(15).substring(2);
console.log(rs)

// 2.Write a script which generates a random hexadecimal number.
let hex = '#';
let hexcolor = (Math.random() + 1).toString(10).substring(12)
console.log(`${hex}${hexcolor}`)

// 3.Write a script which generates a random rgb color number.
let rgb = 'rgb';
let rgbnumbers = Math.floor(Math.random() * 255);
console.log(`${rgb}(${rgbnumbers}, ${rgbnumbers}, ${rgbnumbers})`)



// 4.Using the above countries array, create the following new array.



let country2 = [
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

const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

let newUpper = [];
for (let i = 0; i < country2.length; i++) {
    newUpper.push(country2[i].toUpperCase())
}
console.log(newUpper)

let news = country2.map(name => name.toUpperCase());
console.log(news)
//5. Using the above countries array, create an array for countries length'.
console.log([country2[0].length, country2[1].length, country2[2].length, country2[3].length, country2[4].length, country2[5].length, country2[6].length, country2[7].length, country2[8].length, country2[9].length, country2[10].length])

// 6.Use the countries array to create the following array of arrays:
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]
console.log(country2[0].slice(0, 3).toUpperCase())
console.log(`[
['${country2[0]}','${country2[0].slice(0, 3).toUpperCase()}', ${country2[0].length}]\n
['${country2[1]}','${country2[1].slice(0, 3).toUpperCase()}', ${country2[1].length}]\n
['${country2[2]}','${country2[2].slice(0, 3).toUpperCase()}', ${country2[2].length}]\n
['${country2[3]}','${country2[3].slice(0, 3).toUpperCase()}', ${country2[3].length}]\n
['${country2[4]}','${country2[4].slice(0, 3).toUpperCase()}', ${country2[4].length}]\n
['${country2[5]}','${country2[5].slice(0, 3).toUpperCase()}', ${country2[5].length}]\n
['${country2[6]}','${country2[6].slice(0, 3).toUpperCase()}', ${country2[6].length}]\n
['${country2[7]}','${country2[7].slice(0, 3).toUpperCase()}', ${country2[7].length}]\n
['${country2[8]}','${country2[8].slice(0, 3).toUpperCase()}', ${country2[8].length}]\n
['${country2[9]}','${country2[9].slice(0, 3).toUpperCase()}', ${country2[9].length}]\n
['${country2[10]}','${country2[10].slice(0, 3).toUpperCase()}', ${country2[10].length}]
]`)

// 7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let arrr = [];

arrr = country2.includes('land')
console.log(arrr)
// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
for (const g of country2) {
    let garray = [];
    garray.push(g)
    if (g.endsWith('ia')) {
        console.log(garray)
    }
}
//9. Using the above countries array, find the country containing the biggest number of characters.
let country2Arr = [];
for (const s of country2) {
    country2Arr.push(s.length)
}

let maxs = Math.max(...country2Arr)
for (const s of country2) {
    if (s.length == maxs)
        console.log([s])
}
// 10.Using the above countries array, find the country containing only 5 characters.

let fiveCharaters = [];
for (const f of country2) {
    fiveCharaters.push(f.length)
}
let fiveCharaterNum = Math.max(...fiveCharaters)
for (const c of country2) {
    if (c.length == 5) {
        console.log([c])
    }
}

// 11.Find the longest word in the webTechs array
let longestWebTech = [];
for (const l of webTechs2) {
    longestWebTech.push(l.length)
}
let longestWebTechMax = Math.max(...longestWebTech)
for (const l of webTechs2) {
    if (l.length == longestWebTechMax)
        console.log(l)

}
// 12.Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
console.log(`[["${webTechs2[0]}", ${webTechs2[0].length}], ["${webTechs2[1]}", ${webTechs2[1].length}], ["${webTechs2[2]}", ${webTechs2[2].length}], ["${webTechs2[3]}", ${webTechs2[3].length}], ["${webTechs2[4]}", ${webTechs2[4].length}], ["${webTechs2[5]}", ${webTechs2[5].length}], ["${webTechs2[5]}", ${webTechs2[5].length}], ["${webTechs2[6]}", ${webTechs2[6].length}]]`)



const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// 13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
console.log(`${mernStack[0].slice(0, 1)}${mernStack[1].slice(0, 1)}${mernStack[2].slice(0, 1)}${mernStack[3].slice(0, 1)}`)


// 14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let webTechsNew = [];
for (let i = 0; i < webTechs2.length; i++) {
    webTechsNew.push(webTechs2[i])
}
console.log(webTechsNew)


// 15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruit.length; i >= 0; i--) {
    console.log(fruit[i])
}


// 16. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let fullStack3 = fullStack[0].concat(fullStack[1]);
console.log(fullStack3)
console.log(`${fullStack3[0].toUpperCase()}
${fullStack3[1].toUpperCase()}
${fullStack3[2].toUpperCase()}
${fullStack3[3].toUpperCase()}
${fullStack3[4].toUpperCase()}
${fullStack3[5].toUpperCase()}
${fullStack3[6].toUpperCase()}
`)




// Exercise 3
// 1.Copy countries array(Avoid mutation)
let country3 = [
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
// 2.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = [];
for (let i = 0; i < country3.length; i++) {
    sortedCountries.push(country3[i])
}
console.log(sortedCountries.sort())

// 3.Sort the webTechs array and mernStack array
let sortWeb = webTechs2.sort()
console.log(sortWeb)

let sortMern = mernStack.sort();
console.log(sortMern)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sums = 0;
for (let i = 0; i < ages.length; i++) {
    sums += ages[i];
}
console.log(sums / ages.length)

const countriesAll = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
//4. Extract all the countries contain the word 'land' from the countries array and print it as array
let array = [];
for (const v of countriesAll) {
    if (v.includes('land')) {
        console.log([v])
    }
}
//5. Find the country containing the hightest number of characters in the countries array
// max
const cLength = []
for (const c of countriesAll) {
    cLength.push(c.length)
}

let max = Math.max(...cLength)
for (const c of countriesAll) {
    if (c.length == max) {
        console.log(c)
    }
}
// 6.Extract all the countries contain the word 'land' from the countries array and print it as array
let includesLand = [];
for (const i of countriesAll) {
    if (i.includes('land')) {
        console.log(i)
    }
}

// 7.Extract all the countries containing only four characters from the countries array and print it as array
// let fourCharacters = [];
for (const f of countriesAll) {
    // fourCharacters.push(f.length)
    if (f.length == 4) {
        console.log(f)
    }
}

// 8. Extract all the countries containing two or more words from the countries array and print it as array

for (let q of countriesAll) {
    let splitq = q.split(' ').length
    if (splitq > 1) {
        console.log(q)
    }
}


// 9.Reverse the countries array and capitalize each country and stored it as an array


let newCountriesAll = [];
for (let i = 0; i < countriesAll.length; i++) {
    newCountriesAll.push(countriesAll[i].toUpperCase());
}
console.log(newCountriesAll);
console.log(newCountriesAll.reverse())

// exercise 2 (7 to 11)
// question 8 ex1 (Use for loop to iterate from 0 to 100 and print only prime numbers)
// exercise 1 number3(Iterate 0 to n using for loop)

// Exercise 3 Question 4 to 8







for (const c of countriesAll) {
    if (c.includes(`land`))
        console.log(c)
}
let spliitArray = [''];
for (const r of countriesAll) {
    let spliit = r.split(' ').length;

    if (spliit > 1) {
        console.log(r)

    }
}


// const cLength = []
// for (const c of countriesAll) {
//     cLength.push(c.length)
// }

// let max = Math.max(...cLength)
// for (const c of countriesAll) {
//     if (c.length == max) {
//         console.log(c)
//     }
// }

// for (let i = 0; i < countriesAll.length; i++) {
//     let cc = arrLand.push(countriesAll[i])
//     console.log(cc)
//     if (countriesAll[i].includes('land')) {
//         console.log(countriesAll[i])
//     }
// }



// let mar = Math.max(...countriesAll.length);
let arrall = [];
for (const c of countriesAll) {
    arrall.push(c.length)

}
let mars = Math.max(...arrall);
for (const c of countriesAll) {
    if (c.length == mars)
        console.log(c)
}























