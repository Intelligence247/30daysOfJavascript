// Event Listeners
// DOM(Document Object Model)-Day 3


// Common HTML events:onclick,onchange,onmouseover,onmouseout,onkeydown,onkeyup,onload. We can add event listener method to any DOM object. we use addEventlistener() method to listen to different event types on HTML elements. The addEventlistener() method takes two arguments, an event listener and a callback function.

// Syntax
// selectedElement.addEventListener('eventlistner', function (e) {
// the activity you want to occur after the event will be in here
// })
// or

// selectedElement.addEventListener('eventlistner', e => {
// the activity you want to occur after the event will be in here
// })

// click
// const button = document.querySelector('button')
// button.addEventListener('click', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element:', e.target)
//     console.log('e.target gives the content selected element:', e.target.textContent)
// })

// Note!!! An event can also be attached directly to the HTML elements as an inline script
// const clickMe = () => {
//     alert('We can attach event on HTML elements')
// }
// const p = document.querySelector('p')
// p.addEventListener('click', e => {
//     console.log('Test for P', e)
//     console.log(e.target)
//     console.log(e.target.textContent)
// })

// let div = document.createElement('div')
// div.textContent = 'Click here'
// document.body.appendChild(div)
// const chooseDiv = document.querySelector('div')
// chooseDiv.addEventListener('click', x => {
//     console.log('It is possible to add element from JavaScript for an eventListeners', x)
//     console.log(x.target)
//     console.log(x.target.textContent)

// })

// Double Click

// To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.
// The following is an example of click type event. Example: dblclick

// const creatP = document.createElement('span')
// creatP.textContent = 'Double Click'
// document.body.appendChild(creatP)
// const choosep = document.querySelector('span')
// choosep.addEventListener('dblclick', d => {
//     console.log('Double click', d)
// })

// I Noticed it is just impossible to use same elment for different event listeners especially when it was added through javaScript


// Mouse enter
// To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

// The following is an example of click type event.

// mouseenter
// let b
// b = document.createElement('b')
// b.textContent = 'Mouse Enter B'
// b.style.border = '1px solid blue'
// b.style.width = 'max-content'
// b.style.backgroundColor = 'grey'
// b.style.display = 'block'
// document.body.appendChild(b)
// const chooseB = document.querySelector('b')
// chooseB.addEventListener('mouseenter', b => {
//     console.log('Mouse Enter', b)
// })



/*By now you are familiar with addEventListen method and how to attach event listener. There are many types of event listeners. But in this challenge we will focus the most common important events. List of events:

click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page
Test the above event types by replacing event type in the above snippet code.*/

// Getting value from an input element
let main
main = document.createElement('main')
main.style.backgroundColor = 'green'
main.style.display = 'inline-block'
main.style.height = '30rem'
main.style.width = '30rem'
main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.gap = '1rem'
main.style.paddingLeft = '3rem'
document.body.appendChild(main)

let h1
h1 = document.querySelector('h1')
h1.style.padding = '1rem 3rem'
h1.style.background = 'white'
h1.style.width = 'max-content'
h1.style.borderRadius = '50px'
h1.style.margin = 'auto'
h1.style.border = '4px solid purple'
main.appendChild(h1)

let height
height = document.querySelector('#height')
height.style.backgroundColor = 'blue'
height.style.width = '25rem'
height.style.borderRadius = '50px'
height.style.paddingLeft = '1rem'
height.style.height = '3rem'
height.style.fontSize = '2rem'
height.style.color = 'white'
height.style.fontWeight = '900'
main.appendChild(height)

let mass
mass = document.querySelector('#mass')
mass.style.backgroundColor = 'orange'
mass.style.width = '25rem'
mass.style.height = '3rem'
mass.style.fontSize = '2rem'
mass.style.borderRadius = '50px'
mass.style.paddingLeft = '1rem'
mass.style.color = 'white'
mass.style.fontWeight = '900'
main.appendChild(mass)
const but = document.querySelector('button')
but.style.backgroundColor = 'orange'
but.style.width = '18rem'
but.style.borderRadius = '50px'
but.style.margin = 'auto'
but.style.borderColor = 'white'
but.style.height = '3rem'
but.style.fontSize = '2rem'
but.style.color = 'white'
but.style.fontWeight = '900'
main.appendChild(but)
let p
p = document.querySelector('p')
p.style.width = '12rem'
p.style.backgroundColor = 'green'
p.style.width = '18rem'
p.style.borderRadius = '50px'
p.style.margin = 'auto'
p.style.borderColor = 'white'
p.style.border = '3px solid blue'
p.style.height = '3rem'
p.style.fontSize = '1.3rem'
p.style.color = 'white'
p.style.fontWeight = '900'
p.style.display = 'flex'
p.style.justifyContent = 'center'
p.style.alignItems = 'center'
main.appendChild(p)

let bmi
but.addEventListener('click', () => {
    bmi = mass.value / height.value ** 2
    // alert('Your BMI is = ' + ' ' + bmi.toFixed(3))
    // console.log(bmi)
    p.textContent = 'Your BMI is =' + ' ' + bmi.toFixed(3)

})


