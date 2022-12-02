let main
main = document.createElement('main')
main.style.backgroundColor = 'green'
main.style.display = 'inline-block'
main.style.height = '30rem'
main.style.width = '30rem'
main.style.margin = 'auto'
main.style.display = 'flex'
main.style.marginTop = '5rem'
main.style.flexDirection = 'column'
main.style.gap = '1rem'
main.style.paddingLeft = '3rem'
document.body.appendChild(main)

let h1
h1 = document.querySelector('h1')
h1.style.padding = '1rem'
h1.style.background = 'white'
h1.style.width = 'max-content'
h1.style.borderRadius = '50px'
h1.style.border = '3px solid purple'
main.appendChild(h1)

let a
a = document.querySelector('#a')
a.style.backgroundColor = 'blue'
a.style.width = '15rem'
a.style.borderRadius = '50px'
a.style.paddingLeft = '1rem'
a.style.height = '3rem'
a.style.fontSize = '2rem'
a.style.color = 'white'
a.style.fontWeight = '900'
main.appendChild(a)
let b
b = document.querySelector('#b')
b.style.backgroundColor = 'yellow'
b.style.width = '15rem'
b.style.height = '3rem'
b.style.fontSize = '2rem'
b.style.color = 'green'
b.style.fontWeight = '900'
b.style.borderRadius = '50px'
b.style.paddingLeft = '1rem'
main.appendChild(b)
let c
c = document.querySelector('#c')
c.style.backgroundColor = 'orange'
c.style.width = '15rem'
c.style.height = '3rem'
c.style.fontSize = '2rem'
c.style.borderRadius = '50px'
c.style.paddingLeft = '1rem'
c.style.color = 'white'
c.style.fontWeight = '900'
main.appendChild(c)
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
let alm1
let alm2
but.addEventListener('click', () => {
    alm1 = (-b.value + (Math.sqrt((b.value * b.value) - (4 * a.value * c.value)))) / (2 * a.value);
    alm2 = (-b.value - (Math.sqrt((b.value * b.value) - (4 * a.value * c.value)))) / (2 * a.value);
    alert(`x1 = ${alm1}, x2 = ${alm2}`)
    console.log(`x1 = ${alm1}, x2 = ${alm2}`)
})



function allmi(a, b, c) {
    let almighty = (-b + (Math.sqrt((b * b) - (4 * a * c)))) / (2 * a);
    let almighty2 = (-b - (Math.sqrt((b * b) - (4 * a * c)))) / (2 * a);

    return `{X1 = ${almighty}, X2 = ${almighty2}}`
}
console.log(allmi(4, 4, 1))
console.log(allmi(1, -1, -2))
console.log(allmi(7, 8, 2))
