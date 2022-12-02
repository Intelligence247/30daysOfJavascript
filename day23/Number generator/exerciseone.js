// console.log('Welcome to my Page')
const prime = (param) => {
    let num = Math.abs(param)
    num = param

    if (num < 2) return false
    if (num == 2) return true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
console.log(prime(2))



let sect
sect = document.querySelector('.ib')
sect.style.display = 'flex'
sect.style.margin = 'auto'
sect.style.width = 'max-content'
sect.style.gap = '1rem'


let input
input = document.querySelector('input')
input.style.width = '20rem'
input.style.height = '1.565rem'
input.style.border = '1.5px solid green'

let button
button = document.querySelector('button')
button.style.width = '10rem'
button.style.height = '2rem'
button.style.backgroundColor = 'green'
button.style.color = 'white'

let num = '1234567890'
let sp = num.split('')

let div
button.addEventListener('click', () => {

    let main = document.querySelector('main')
    main.style.display = "flex"
    main.style.flexDirection = 'row'
    main.style.flexWrap = 'wrap'
    main.style.width = '40rem'
    main.style.margin = 'auto'
    main.style.fontSize = '1.5rem'
    main.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji'
    main.style.marginTop = '2rem'
    main.style.marginBottom = '2rem'
    for (let i = 0; i <= input.value; i++) {
        div = document.createElement('div')
        main.appendChild(div)
        div.textContent = i
        div.style.width = '4.3rem'
        div.style.height = '2rem'
        div.style.backgroundColor = 'blue'
        div.style.display = 'flex'
        div.style.justifyContent = 'center'
        div.style.alignItems = 'center'
        div.style.border = '1px solid white'
        div.style.color = "white"
        if (i % 2 == 0) {
            div.style.backgroundColor = 'green'
        } else if (prime(i)) {
            div.style.backgroundColor = 'red'
        } else if (i % 2 == 1) {
            div.style.backgroundColor = 'yellow'
        } else if (typeof input.value != sp) {
            let p
            p = document.querySelector('p')
            button.addEventListener('click', () => {
                p.textContent = 'Input Value must be a number'
                p.style.color = 'red'
            })
        }

    }
})



