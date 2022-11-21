const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1.Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
    // const toJson = countriesAPI.json()
    .then(response => response.json())
    .then((res) => {
        res.filter((n) => {
            let nam = {
                name: n.name,
                capital: n.capital,
                languages: n.languages,
                population: n.population,
                area: n.area,
            }
            console.log(nam)
        })


    })
    .catch(err => console.log(err))

const fetchSome = async function () {
    try {
        const xx = await fetch(countriesAPI)
        const JSONS = await xx.json()
        JSONS.filter((n) => {
            const nam = {
                name: n.name,
                capital: n.capital,
                languages: n.languages,
                population: n.population,
                area: n.area,
            }
            console.log(nam)
        })
    } catch (error) {
        console.log(error)
    }
}
fetchSome()

// console.log('%cExercise Two begins here%c',
//     'color:red;font-size:2rem;background:yellow;',
//     '')
// 1. Print out all the cat names in to catNames variable.

const fetchCat = async () => {
    try {
        let arr = []
        const fetchs = await fetch(catsAPI)
        const jsons = await fetchs.json()
        jsons.filter((n) => {
            arr.push(n.name)
        })
        console.log(arr)
    } catch (error) {
        console.log(error)
    }
}
fetchCat()

fetch(catsAPI)
    .then((rr) => rr.json())
    .then((resolve) => {
        let arr = []
        for (const c in resolve) {
            arr.push(resolve[c].name)
            // in this example it is possible to use for of loop and also filter. the for in loop must be called with the name of the object with the key iterator
        }
        console.log(arr)
    })

    .catch((error) => console.log(error))

// Exercise THREE Begins here

// 1. Read the cats api and find the average weight of cat in metric unit.

