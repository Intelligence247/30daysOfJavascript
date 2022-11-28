// Manipulating DOM (Document Object Model) Object
// DOM(Document Object Model)-Day 2

// Creating an Element

// To create and HTML element we use tag name. Creating an HTML element using JavaScipt is very simple and straight forward. We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.
document.createElement('tagname')

let title = document.createElement('h1')
title.className = 'title'
title.textContent = 'Creating HTML element DOM Day 2'
title.style.fontSize = '2rem'
title.style.color = 'white'
console.log(title)


// Creating elements
// To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want. After we create the element we can assign value to the different properties of the HTML object.

let titles
for (let i = 0; i < 3; i++) {
    titles = document.createElement('h1')
    titles.className = 'title'
    // titles.textContent = 'Abdullahi'
    // OR 
    titles.textContent = i
    titles.style.fontSize = '1.5rem'
    document.body.appendChild(titles)
    console.log(titles)

}

// Appending child to a parent element
// To see a created element on the HTML documents we should append it to the parent as a child element. We can access the HTML document body using document.body. The document.body support the appendChild() method. See the example below.

let appends
for (let i = 0; i < 5; i++) {
    appends = document.createElement('p')
    appends.className = 'appends'
    appends.style.fontSize = '24px'
    appends.style.color = 'white'
    appends.style.fontWeight = '900'
    appends.textContent = 'This is Usman Abdullahi Babatunde (Intelligence!!!)'
    document.body.appendChild(appends)
    console.log(appends)
}

for (let i = 0; i < 2; i++) {
    let x = document.createElement('h6')
    x.className = 'heading'
    x.style.fontSize = '2rem'
    x.textContent = 'Heading Six'
    document.body.appendChild(x)
}

let appendOne = document.createElement('i')
appendOne.style.color = 'red'
appendOne.textContent = 'INTELLIGENCE!'
document.body.appendChild(appendOne)




// Removing a child element from a parent node
// After creating an HTML, we may want to remove element or elements and we can use the removeChild() method.

// My method of removing
// const ulRemove = document.querySelectorAll('ul')
// ulRemove.forEach((x) => {
//     x.style.display = 'none'
// })

// Using removeChild()
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)
}

// As we have see in the previous section there is a better way to eliminate all the inner HTML elements or the children of a parent element using the method innerHTML properties.

// Using innerHTML
let ul2 = document.querySelector('ul')
ul2.innerHTML = ''