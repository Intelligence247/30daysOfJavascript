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
            // console.log(nam)
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
        // console.log(arr)
    })

    .catch((error) => console.log(error))

// Exercise THREE Begins here

// 1. Read the cats api and find the average weight of cat in metric unit.

const weights = async function () {
    try {
        const fetchs = await fetch(catsAPI)
        const toJson = await fetchs.json()
        let sum = 0
        toJson.map((n) => {
            sum += n.weight.metric

        })
        console.log(sum)
    } catch (error) {
        console.log(error)
    }
}
weights()


// Read the countries api and find out the 10 largest countries

const largestCountry = async () => {
    let ten = []
    try {
        const fetchs = await fetch(countriesAPI)
        const jsons = await fetchs.json()
        jsons.sort((a, b) => {
            if (a.population > b.population) return -1
            if (a.population < b.population) return 1
            return 0
        })

        let sp = jsons.splice(0, 10)
        // console.log(sp)
        sp.map((element) => {
            const ten = {
                country: element.name,
                population: element.population,
                lang: element.languages[0].name,
            }
            console.log(ten)
        });
    } catch (error) {
        console.log(error)
    }
}
largestCountry()


//3. Read the countries api and count total number of languages in the world used as officials.

const officials = async () => {
    let arc = []
    try {
        const fetchs = await fetch(countriesAPI)
        const jsons = await fetchs.json()
        jsons.map((element) => {
            let ten = element.languages[0].name;
            arc.push(ten)

        });
        // console.log(arc.length)
        let newSet = new Set(arc)
        console.log(newSet)
    } catch (error) {
        console.log(error)
    }
}
officials()