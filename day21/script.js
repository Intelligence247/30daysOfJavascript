// DOM (Document Object Model)

// Getting elements by tag name
// getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.
const alltitles = document.getElementsByTagName('h1')
console.log(alltitles)
console.log(alltitles.length)

for (let i = 0; i < alltitles.length; i++) {
    console.log(alltitles[i])
}

let bold = document.getElementsByTagName('b')
console.log(bold)
for (let i = 0; i < bold.length; i++) {
    console.log(bold[i])
}

// Getting elements by class name
// getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

let allTitles = document.getElementsByClassName('title')
console.log(allTitles)

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
}


// Getting an element by id
// getElementsById() targets a single HTML element. We pass the id without # as an argument.
let firstTitle = document.getElementById('first-title')
console.log(firstTitle)

// Getting elements by using querySelector methods
// The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

// querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

const firstqueryForTag = document.querySelector('h1')
console.log(firstqueryForTag)
// It returns the first tag 
const firstqueryForClass = document.querySelector('.title')
console.log(firstqueryForClass)
// It returns the first Class
const firstqueryForId = document.querySelector('#first-title')
console.log(firstqueryForId)
// It returns the first Id

// querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

let alltitlesQ = document.querySelectorAll('h1')  // selects all the available h1 elements in the page
console.log(alltitlesQ)
for (let i = 0; i < alltitlesQ.length; i++) {
    console.log(alltitlesQ[i])
}
alltitlesQ.forEach(xx => console.log(xx))
const allClassQ = document.querySelectorAll('.title') // the same goes for selecting using class
console.log(allClassQ)
allClassQ.forEach((c) => console.log(c))

// Adding attribute

// An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.
const title = document.querySelectorAll('h1')

title[3].id = 'fourth-title'
title[3].className = 'title'
console.log(title)
const id = document.getElementById('fourth-title')
console.log(id)
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
console.log(titles)

// Adding attribute using setAttribute
// The setAttribute() method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.
const settingAttributes = document.querySelectorAll('h1')
settingAttributes[3].setAttribute('class', 'title')
settingAttributes[3].setAttribute('id', 'fourth-title')
console.log(settingAttributes)

// Adding attribute without setAttribute
// We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

let otherWaytoSet = document.querySelectorAll('h1')
otherWaytoSet[3].className = ('title')
otherWaytoSet[3].id = ('fourth-title')

// Adding class using classList
// The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.
titles[3].classList.add('title', 'header-title')
console.log(titles)

// Removing class using remove
// Similar to adding we can also remove class from an element. We can remove a specific class from an element
titles[2].classList.remove('header-title', 'title')
console.log(titles)


// Adding Text to HTML element
// An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property textContent or *innerHTML.

// Adding Text content using textContent
// The textContent property is used to add text to an HTML element. 
const addingText = document.querySelectorAll('h1')
addingText[3].textContent = ('Fourth Tilte "Abdullahi"')
console.log(addingText)
// addingText.forEach((xx) => console.log(xx))


