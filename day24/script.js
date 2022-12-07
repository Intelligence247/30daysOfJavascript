let sb = document.querySelector('#planet')

let mass = document.querySelector('#mass')
let button = document.querySelector('button')

let opt = document.querySelector('#first')




const arr = [
    { planet: "mars", img: "./media/mars.png", gravity: 23 },
    { planet: "mercury", img: "./media/mercury.png", gravity: 2 },
    { planet: 'venus', img: './media/venus.png', gravity: 10 },
    { planet: 'saturn', img: './media/saturn.png', gravity: 10 },
    { planet: 'jupiter', img: './media/jupiter.png', gravity: 10 },
    { planet: 'earth', img: './media/earth.png', gravity: 10 },
    { planet: 'moon', img: './media/moon.png', gravity: 10 },
    { planet: 'neptune', img: './media/neptune.png', gravity: 10 },
    { planet: 'pluto', img: './media/pluto.png', gravity: 10 },
    { planet: 'uranus', img: './media/uranus.png', gravity: 10 }
]


let gravToCal = 0
button.addEventListener('click', () => {
    sb.addEventListener('change', (e) => {
        const result = arr.find((a) => a.planet == e.target.value)
        // console.log(result)
        // gravToCal = result.gravity

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
        p.textContent = (mass.value * result.gravity).toFixed(2)
        let aside
        aside = document.querySelector
        let img = document.querySelector('img')
        img.src = result.img
        img.style.width = '20rem'
        img.style.height = '20rem'
        img.style.margin = 'auto'


    })
})
