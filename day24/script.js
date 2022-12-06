let select = document.querySelector('select')

let mass = document.querySelector('#mass')
let button = document.querySelector('button')

let opt = document.querySelectorAll
// console.log(opt)
for (let i = 0; i < select.length; i++) {
    let opt = document.createElement('option')
    opt.textContent = '--select planet--'
    select.appendChild(opt)
    if (opt.textContent == 'Mars') {
        button.addEventListener('click', () => {
            console.log(333)
        })
    }
}


