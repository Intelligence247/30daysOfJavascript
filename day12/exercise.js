// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’


const calc = 'Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'

const calcP = /\d+/g
const matchCalc = calc.match(calcP)
// console.log(matchCalc)
let sum = 0
for (const c of matchCalc) {
    sum += c
}
console.log(sum)

let four = matchCalc[0] * 12
let ten = matchCalc[1]
let five = matchCalc[2] * 12
console.log(four + ten + five)
// const totalAnnualIncome = `${matchCalc[0] * 12 + matchCalc[1] + matchCalc[2] * 12}`
// console.log(totalAnnualIncome)






























// 1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.


paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const tenMostFrequentWords = (param) => {

}
// console.log(tenMostFrequentWords(paragraph))