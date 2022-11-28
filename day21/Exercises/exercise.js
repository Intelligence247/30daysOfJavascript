//1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const paragraph = document.querySelector('p')
paragraph[0]
console.log(paragraph)

//2. Get each of the the paragraph using document.querySelector('#id') and by their id
const firstId = document.querySelector('#first-paragraph')
const secondId = document.querySelector('#second-paragraph')
const thirdId = document.querySelector('#third-paragraph')
console.log(firstId)
console.log(secondId)
console.log(thirdId)

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const getAsNodeList = document.querySelectorAll('p')
console.log(getAsNodeList)

// 4. Loop through the nodeList and get the text content of each paragraph

for (let i = 0; i < getAsNodeList.length; i++) {
    console.log(getAsNodeList[i])
}
// OR

getAsNodeList.forEach((xx) => console.log(xx))

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph

getAsNodeList[3].textContent = 'Fourth Paragraph'
console.log(getAsNodeList)

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

getAsNodeList[3].classList = ('paragraph')
getAsNodeList[0].classList.add = ('paragraph', 'para')
getAsNodeList[1].classList.add = ('paragraph', 'para')
getAsNodeList[3].classList.add = ('paragraph', 'para')
getAsNodeList[2].classList.add = ('paragraph', 'para')
getAsNodeList[3].id = ('fourth-paragraph')


// Exercise: Level2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

getAsNodeList.forEach((xx, i) => {
    if (i % 2 == 0) {
        xx.style.color = "blue"
        xx.style.fontSize = '2rem'
        xx.style.border = '5px solid lightgreen'
        xx.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";'
        xx.style.backgroundColor = "indigo"
    } else if (i == 1) {
        xx.style.color = "yellow"
        xx.style.fontSize = '1.5rem'
        xx.style.border = '3px solid lightgreen'
        xx.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";'
        xx.style.backgroundColor = "black"
    }
    else {
        xx.style.color = "green"
        xx.style.fontSize = '2rem'
        xx.style.border = '5px solid lightblue'
        xx.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";'
        xx.style.backgroundColor = "pink"
    }
})


// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
getAsNodeList.forEach((xx, i) => {
    if (i % 2 == 0) {
        xx.style.color = "green"
        xx.style.fontSize = '2rem'
        xx.style.border = '5px solid lightgreen'
        xx.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";'
        xx.style.backgroundColor = "indigo"
    } else {
        xx.style.color = "red"
        xx.style.fontSize = '1.5rem'
        xx.style.border = '3px solid lightgreen'
        xx.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";'
        xx.style.backgroundColor = "black"
    }
})



// Set text content, id and class to each paragraph
let rr = getAsNodeList.textContent = 'Welcome to my page'
console.log(rr)
getAsNodeList.id = 'idName'
getAsNodeList.classList = 'ClassName'

console.log(getAsNodeList)


console.log('%cExercise%c %cTHREE%c %cBegins%c %cHere%c',
    'color:red;font-size:2rem;',
    '',
    'color:blue;font-size:2rem;',
    '',
    'color:green;font-size:2.5rem;',
    '',
    'color:yellow;font-size:2.9rem;',
    '',)

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
let rand = '#' + Math.random().toString(16).substr(2, 6)
let r2 = []
let rrr = setInterval((cc) => {

    cc += rand
    return cc
}, 10000);

console.log(rrr)
let xxx = new Date()
console.log(xxx)

let getByClass = document.querySelectorAll('.wrapper')
getByClass.forEach((xx, i) => {
    xx.style.width = '35rem'
    xx.style.margin = 'auto'
    xx.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    xx.style.marginBottom = '5rem'

})

let getH1 = document.querySelectorAll('h1')
getH1.forEach((xx, i) => {
    xx.style.fontSize = '20px'
    xx.style.width = 'max-content'
    xx.style.margin = 'auto'
})
let getH2 = document.querySelectorAll('h2')
getH2.forEach((xx, i) => {
    xx.style.fontSize = '12px'
    xx.style.width = 'max-content'
    xx.style.margin = 'auto'
    xx.style.color = '#222222'
    xx.style.textDecoration = 'underline'
})
let getSpan = document.querySelectorAll('span')
getSpan.forEach((xx, i) => {
    xx.style.fontSize = '3.5rem'
    const color = (() => {
        xx.style.color = '#' + Math.random().toString(16).substr(2, 6)
    })
    setInterval(color, 1000)


})

let getUl = document.querySelectorAll('ul')
getUl.forEach((xx, i) => {
    xx.style.fontSize = '12px'
    xx.style.listStyle = 'none'
    xx.style.paddingLeft = '3rem'

})

let getLi = document.querySelectorAll('li')
getLi.forEach((xx, i) => {
    xx.style.height = '3rem'
    xx.style.display = 'flex'
    xx.style.alignItems = 'center'
    xx.style.paddingLeft = '1rem'
    xx.style.borderBottom = '3px solid white'
    if (i == 0) {
        xx.style.backgroundColor = 'green'
    }
    if (i == 1) {
        xx.style.backgroundColor = 'yellow'
    }
    if (i > 1) {
        xx.style.backgroundColor = 'red'
    }
})
const generateColor = () => '#' + Math.random().toString(16).substr(2, 6)
const addingTextToH3 = document.querySelector('h3')
addingTextToH3.innerHTML = 'January 22,2020, 19:53:11'

let h3 = document.querySelector('h3')
h3.style.width = 'max-content'
h3.style.margin = 'auto'
h3.style.fontSize = '12px'
h3.style.padding = '0.2rem 1rem'
h3.style.marginTop = '1rem'
const bb = () => {
    h3.style.backgroundColor = '#' + Math.random().toString(16).substr(2, 6);
}

setInterval(bb, 1000)