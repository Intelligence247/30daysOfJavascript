/*Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
Even numbers background is green
Odd numbers background is yellow
Prime numbers background is red*/
let h1
h1 = document.createElement('h1')
h1.textContent = 'Number Generator'
document.body.appendChild(h1)
h1.style.width = 'max-content'
h1.style.margin = 'auto'
h1.style.marginBottom = '0.1rem'
h1.style.fontSize = '24px'

let h2
h2 = document.createElement('h2')
h2.textContent = '30DaysOfJavaScript:DOM Day 2'
document.body.appendChild(h2)
h2.style.width = 'max-content'
h2.style.margin = 'auto'
h2.style.fontSize = '13px'
h2.style.textDecoration = 'underline'
h2.style.fontWeight = '100'

for (let i = 0; i < 1; i++) {
    let h3 = document.createElement('h3')
    h3.textContent = 'Author: Asabeneh Yetayeh'
    document.body.appendChild(h3)
    h3.style.width = 'max-content'
    h3.style.margin = 'auto'
    h3.style.fontSize = '10px'
    h3.style.textDecoration = 'underline'
    h3.style.fontWeight = '100'
}




let mainEl = document.createElement('main')
mainEl.style.display = "flex"
mainEl.style.flexDirection = 'row'
mainEl.style.flexWrap = 'wrap'
mainEl.style.width = '27rem'
mainEl.style.margin = 'auto'
mainEl.style.fontSize = '1.5rem'
mainEl.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji'
mainEl.style.marginTop = '2rem'
mainEl.style.marginBlock = '2rem'
document.body.appendChild(mainEl)
const prime = (n) => {
    const x = Math.abs(n)
    if (x < 2) return false
    if (x == 2) return true
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false
        }
    }
    return true
}
// console.log(prime(71))


let generateNum
for (let i = 0; i <= 101; i++) {
    generateNum = document.createElement('div')
    generateNum.textContent = i
    mainEl.appendChild(generateNum)
    generateNum.style.width = '4.5rem'
    generateNum.style.height = '3rem'
    generateNum.style.backgroundColor = 'blue'
    generateNum.style.display = 'flex'
    generateNum.style.justifyContent = 'center'
    generateNum.style.alignItems = 'center'
    generateNum.style.border = '1px solid white'
    generateNum.style.color = "white"
    if (i % 2 == 0) {
        generateNum.style.backgroundColor = 'green'
    } else if (prime(i)) {
        generateNum.style.backgroundColor = 'red'
    } else if (i % 2 == 1) {
        generateNum.style.backgroundColor = 'yellow'
    }
}


























// const isPrime = (xx) => {
//     let x = Math.abs(xx)
//     if (x == 0 || x == 1) return false
//     if (x == 2) return true
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(2))
// for (let i = 0; i >= -100; i--) {
//     if (isPrime(i))
//         console.log(i)
// }
// .flat() Method can be used to print element of array of array into a single array