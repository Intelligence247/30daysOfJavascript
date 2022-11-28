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


let generateNum
for (let i = 0; i < 100; i++) {
    generateNum = document.createElement('span')
    generateNum.textContent = i
    document.body.appendChild(generateNum)



}

const div = document.querySelectorAll('div')
div.forEach((xx, i) => {
    xx.style.display = 'inline-block'
    xx.style.display = 'flex'
    xx.style.gap = '3rem'
    xx.style.position = 'relative'
    xx.style.fontSize = '2rem'
    xx.style.color = 'red'
})
