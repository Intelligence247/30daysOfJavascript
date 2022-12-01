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

const button = document.querySelector('button')
button.addEventListener('click', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element:', e.target)
    console.log('e.target gives the content selected element:', e.target.textContent)
})