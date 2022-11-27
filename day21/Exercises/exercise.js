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
