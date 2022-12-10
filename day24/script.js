let sb = document.querySelector('#planet')

let mass = document.querySelector('#mass')
let button = document.querySelector('button')

let opt = document.querySelector('#first')

const arr = [
    { planet: 'select' },
    { planet: "mars", img: "./media/mars.png", gravity: 3.7 },
    { planet: "mercury", img: "./media/mercury.png", gravity: 3.7 },
    { planet: 'venus', img: './media/venus.png', gravity: 8.87 },
    { planet: 'saturn', img: './media/saturn.png', gravity: 10.44 },
    { planet: 'jupiter', img: './media/jupiter.png', gravity: 24.5 },
    { planet: 'earth', img: './media/earth.png', gravity: 10 },
    { planet: 'moon', img: './media/moon.png', gravity: 1.6 },
    { planet: 'neptune', img: './media/neptune.png', gravity: 11.15 },
    { planet: 'pluto', img: './media/pluto.png', gravity: 0.62 },
    { planet: 'uranus', img: './media/uranus.png', gravity: 8.87 }
]
let aside
aside = document.querySelector('aside')
aside.style.display = 'none'
aside.style.justifyContent = 'center'
let warn
warn = document.querySelector('#warn')
warn.textContent = 'Mass is required'
warn.style.margin = 'auto'
warn.style.padding = '1rem 10rem'
let gravToCal = 0

sb.addEventListener('change', (e) => {
    button.addEventListener('click', () => {
        const result = arr.find((a) => a.planet == e.target.value)

        let main
        main = document.querySelector('main')
        let h2
        h2 = document.querySelector('h2')
        h2.style.margin = '0'
        h2.textContent = 'The weight of the object on' + ' ' + result.planet.toUpperCase()


        let p
        p = document.querySelector('#ans')
        p.style.padding = '1rem'
        p.style.margin = '0'
        p.style.width = 'max-content'
        p.style.margin = 'auto'
        p.textContent = (mass.value * result.gravity).toFixed(2)


        let aside
        aside = document.querySelector('aside')
        aside.style.display = 'block'
        aside.style.display = 'flex'
        aside.style.justifyContent = 'center'
        aside.style.alignItems = 'center'
        aside.style.padding = '1rem'

        let img
        img = document.querySelector('img')
        img.src = result.img
        img.style.width = '20rem'
        img.style.height = '20rem'
        img.style.margin = 'auto'

        warn.style.display = 'none'

        if (mass.value == 0 || mass.value == null) {
            warn.style.display = 'block'
            aside.style.display = 'none'
            img.style.display = 'none'
        } else if (result.planet == 'select') {
            warn.style.display = 'block'
            warn.textContent = 'You have not choose a planet yet'
            aside.style.display = 'none'
            img.style.display = 'none'
        } else {
            warn.style.display = 'none'
            aside.style.display = 'block'
            img.style.display = 'block'
        }
    })
})

sb.addEventListener('change', (e) => {
    const fib = arr.find((p) => p.planet == e.target.value)
    console.log(fib)
})
