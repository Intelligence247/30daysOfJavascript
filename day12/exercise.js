// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

console.log(['Exercise begins here'])
const calc = 'Calculate the total annual income of the person from the following text. He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'

const calcP = /\d+/g
const matchCalc = calc.match(calcP)
// console.log(matchCalc)
let four = Number(matchCalc[0] * 12)
let ten = Number(matchCalc[1])
let five = Number(matchCalc[2] * 12)
console.log('The total annual income is', four + ten + five)

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const positionText = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'


const positives = /-?[0-9]/g
const points = positionText.match(positives)
console.log(points)

const sort = points.sort((a, b) => a - b)
console.log(sort)

const max = Math.max(...sort)
const min = Math.min(...points)
console.log('Distance =', max - min)





//1. Write a pattern which identify if a string is a valid JavaScript variable
const isValid = (param) => {
    if (param.match(/[a-zA-Z]/) && !param.match(/^[0-9A-Z]/) && !param.match(/[@~!#%&*-.><+=?;:]/g)) {
        return true
    }
    return false
}
console.log(isValid('firsname'))






// 1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.


paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


const tenMostFrequentWords = (param, param2) => {
    const love = /[l]ove+/gi
    const match = param.match(love)

    const you = /[y]ou+/gi
    const matchYou = param.match(you)

    const can = /[c]an+/gi
    const matchCan = param.match(can)

    const what = /[w]hat+/gi
    const matchWhat = param.match(what)

    const teaching = /[tea]ching+/gi
    const matchTeaching = param.match(teaching)

    const not = /[n]ot+/gi
    const matchNot = param.match(not)

    const elseP = /[e]lse+/gi
    const matchElse = param.match(elseP)

    const doP = /[d]o+/gi
    const matchDo = param.match(doP)

    const I = /[i]+/gi
    const matchI = param.match(I)

    const which = /[whi]ch+/gi
    const matchWhich = param.match(which)

    param2 = [
        { word: 'love', count: match.length },
        { word: 'you', count: matchYou.length },
        { word: 'can', count: matchCan.length },
        { word: 'what', count: matchWhat.length },
        { word: 'teaching', count: matchTeaching.length },
        { word: 'not', count: matchNot.length },
        { word: 'else', count: matchElse.length },
        { word: 'do', count: matchDo.length },
        { word: 'I', count: matchI.length },
        { word: 'which', count: matchWhich.length },
    ]
    return param2
}
console.log(tenMostFrequentWords(paragraph, 10))



sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(param) {
    const matchClean = param.replace(/[@%&$;#,!?]/g, '')
    return matchClean
}
console.log(cleanText(sentence))


const wordSplit = cleanText(sentence).split(' ')
console.log(wordSplit)


// for (const c of wordSplit) {
//     c.find(n => n == c)
//     console.log(c)
// }

let wordsArray = ["why", "would", "you", "pay", "for", "a", "phone", "?", "-"];

var regex = /^[a-zA-Z0-9]*$/;
let grouped = wordSplit.reduce(function (acc, curr) {

    let isSpecial = regex.test(curr);

    if (!isSpecial) {
        acc.special.push(curr)
    } else if (acc.hasOwnProperty(curr.substr(0))) {
        acc[curr.substr(0)].push(curr)
    } else {
        acc[curr.substr(0)] = [curr]

    }
    return acc;

}, {
    special: []
})

console.log(grouped)

// Exercises: Level 3
// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

