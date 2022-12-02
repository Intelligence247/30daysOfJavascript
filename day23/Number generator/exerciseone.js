// console.log('Welcome to my Page')
const prime = (param) => {
    let num = Math.abs(param)
    num = param
    if (num == 2) return true
    if (num === 0 || num == 1) return false
    for (let i = 2; i < num; i++) {
        if (num % 2 === 0) {
            return false
        }
    }
    return true
}
console.log(prime(2))

let main = document.createElement('main')
main.style.display = "flex"
main.style.flexDirection = 'row'
main.style.flexWrap = 'wrap'
main.style.width = '40rem'
main.style.margin = 'auto'
main.style.fontSize = '1.5rem'
main.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji'
main.style.marginTop = '2rem'
main.style.marginBottom = '2rem'
document.body.appendChild(main)
let p
for (let i = 0; i <= 20; i++) {
    p = document.createElement('div')
    p.textContent = i
    main.appendChild(p)
    p.style.width = '4.3rem'
    p.style.height = '2rem'
    p.style.backgroundColor = 'blue'
    p.style.display = 'flex'
    p.style.justifyContent = 'center'
    p.style.alignItems = 'center'
    p.style.border = '1px solid white'
    p.style.color = "white"
    if (i % 2 === 0) {
        p.style.backgroundColor = 'green'
    } else if (prime(i)) {
        p.style.backgroundColor = 'red'
    } else if (i % 2 === 1) {
        p.style.backgroundColor = 'yellow'
    }
}


for (let i = 0; i < 100; i++) {
    if (prime(i)) {
        console.log(i)
    }
}
