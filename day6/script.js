// // For loop structure
// for(initialization, condition, increment/decrement){
//     // code goes here
//   }
for (let c = 0; c <= 7; c++) {
    console.log(c)
}

for (let d = 6; d >= 0; d--) {
    console.log(d)
}
for (let multiplications = 0; multiplications <= 12; multiplications++) {
    console.log(`${multiplications}*${multiplications}= ${multiplications * multiplications}`);
}
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// Adding all elements in the array
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let c = 0; c < numbers.length; c++) {
    sum = sum + numbers[c]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15
let number = [1, 3, 5, 7, 7, 8];
let sum2 = 0;
for (let s = 0; s < number.length; s++) {
    sum2 += number[s];
}
console.log(sum2)
let number3 = [11, 11, 12, 56, 89, 76, 42, 21, 324, 45, 54];
let sum3 = 0;
for (let s = 0; s < number3.length; s++) {
    sum3 += number3[s];
}
console.log(sum3)
// Creating a new array based on the existing array
const numbers2 = [1, 2, 3, 4, 5]
const newArr2 = []
for (let i = 0; i < numbers2.length; i++) {
    newArr2.push(numbers2[i] ** 2)

}

console.log(newArr2)  // [1, 4, 9, 16, 25]

// practice
const marks = [23, 34, 45, 45, 65, 76, 78, 99, 90];
let newMarks = [];
for (let o = 0; o < marks.length; o++) {
    newMarks.push(marks[o] * 2);
}
console.log(newMarks)
const price = [12, 34, 54, 3, 1, 21, 23, 4, 54, 65, 7, 69, 8];
const newPrice = [];
for (let p = 0; p < price.length; p++) {
    newPrice.push(price[p] + 5)
}
console.log(newPrice)

// While loop
let i = 0
while (i <= 5) {
    console.log(i)
    i++
}

// 0 1 2 3 4 5
let c = 3;
while (c >= 0) {
    console.log(c);
    c--
}

// Do While Loop
let w = 0
do {
    console.log(w)
    w++
} while (w <= 5)

// 0 1 2 3 4 5
let dow = 0;
do {
    console.log(dow)
    dow++
} while (dow <= 3)

// for of loop
// We use for of loop for arrays. It is very hard way to iterate through an array if we are not interested in the index of each element in the array.
// for (const element of arr) {
//     // code goes here
//   }
let numberforof = [1, 2, 3, 4, 5, 6];
for (let nums of numberforof) {
    console.log(nums)
}
const result = [12, 23, 45, 65, 76, 87, 67, 89];
let pers = 0;
for (const per of result) {
    pers += per;
}
console.log(pers);


const result2 = [123, 3, 45, 456, 7566, 8756, 657, 689];
let sumsum = 0;
for (const num of result2) {
    sumsum += num;
}
console.log(sumsum)
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let newupper = [];
let uppercase = [];
for (const upper of webTechs) {
    console.log(upper.toUpperCase())
    console.log(upper[0])
    newupper.push(upper.toUpperCase())
}
console.log(newupper)
// break
// Break is used to interrupt a loop.
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i)
}

// 0 1 2






for (let c = 0; c <= 10; c++) {
    if (c == 5) {
        break
    }
    console.log(c)
}
for (let ds = 0; ds <= 3; ds++) {
    if (ds == 0) {
        continue
    }
    console.log(ds)
}

// adding all the numbers in the array
// let su = 0
// for (const num of numbers) {
//     sum = sum + num
//     // can be also shorten like this, sum += num
//     // after this we will use the shorter synthax(+=, -=, *=, /= etc)
// }
// console.log(sum) // 15




// Conclusions on loops
// Regular for loop can be used anywhere when the number of iteration is known.
// While loop when the number of iteration is not know
// Do while loop and while loop are almost the same but do while loop run at least once even when the condition is false
// for of is used only for array
// forEach is used for array
// for in is used for object