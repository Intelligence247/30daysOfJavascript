// Explain the difference between forEach, map, filter, and reduce.
// forEach function iterate an array and works with arrays only which returns a non array value
// while map also iterate through an array and returns an array value. the difference is map returns an array while for each does not
// The filter: filters out a full fill value in a new array
// the Reduce function has an accumulator and the current prameter which only returns a single value, and also the initial value which must be added if not it will take the first value array as the initial which might give a wrong calc,
// and if the array is empty the reduce function will throw an error

const countriesExercise = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const namesExercise = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbersExercise = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 2.Define a callback function before you use it in forEach, map, filter or reduce.
// a call back function is a function which can be pass to a parameter in another function

// 3.Use forEach to console.log each country in the countries array.

countriesExercise.forEach((country) => console.log(country))

// 4.Use forEach to console.log each number in the numbers array.
namesExercise.forEach(name => console.log(name))
// 5.Use forEach to console.log each number in the numbers array.
numbersExercise.forEach((num) => console.log(num))
// 6.Use map to create a new array by changing each country to uppercase in the countries array.
const countiresUpper = countriesExercise.map((upper) => upper.toUpperCase())
console.log(countiresUpper)

// 7.Use map to create an array of countries length from countries array.
const cLength = countriesExercise.map((clength) => clength.length)
console.log(cLength)

// 8.Use map to create a new array by changing each number to square in the numbers array
const numSq = numbersExercise.map((numsq) => numsq ** 2)
console.log(numSq)

// 9.Use map to change to each name to uppercase in the names array
const upArr = namesExercise.map((name) => name.toUpperCase())
console.log(upArr)

// 10.Use map to map the products array to its corresponding prices.
const pMap = products.map((price) => price)
console.log(pMap)

// 11.Use filter to filter out countries containing land.
const filLand = countriesExercise.filter((land) => land.includes('land'))
console.log(filLand)

// 12.Use filter to filter out countries having six character.
const countryWithSixCharacters = countriesExercise.filter((six) => six.length == 6)
console.log(countryWithSixCharacters)

// 13.Use filter to filter out countries containing six letters and more in the country array.
const countryWithSixOrMore = countriesExercise.filter((sixMore) => sixMore.length >= 6)
console.log(countryWithSixOrMore)

// 14.Use filter to filter out country start with 'E';
const countryStartE = countriesExercise.filter((E) => E.startsWith('E'))
console.log(countryStartE)

// 15.Use filter to filter out only prices with values.
const productPrice = products.filter((ex) => ex.price)
console.log(productPrice)


// 16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const q16 = countriesExercise.map((arr) => console.log(arr.toString()))
// console.log(q16)

// 17.Use reduce to sum all the numbers in the numbers array.
const reduceSum = numbersExercise.reduce((acc, cur) => acc + cur, 0)
console.log(reduceSum)

// 18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatenateReduce = countriesExercise.reduce((countr, concatt) => countr + ' ' + concatt, 'Estonia')
console.log(`${concatenateReduce} are all north European Countries`)

//19. Explain the difference between some and every
// Every iS checks if all the values are the same in one aspect and it returns a boolean
// while some checks if values are the same in some aspect and it returns a boolean 

// 20.Use some to check if some names' length greater than seven in names array
let someCheck = namesExercise.some((name) => name.length > 7)
console.log(someCheck)

// 21.Use every to check if all the countries contain the word land
let everyCheck = namesExercise.every((name) => name.includes('land'))
console.log(everyCheck)

// 22.Explain the difference between find and findIndex.
// find is used to find or check whether a values has something or not and it returns the value. and it returns the first element that satifies the condition
// while findIndex is used to check the index or the position of a particular value. it reuturns the index of the first element which satisfies the condition

// 23.Use find to find the first country containing only six letters in the countries array
let findC = countriesExercise.find(coun => coun.length == 6)
console.log(findC)

// 24.Use findIndex to find the position of the first country containing only six letters in the countries array

findIndexC = countriesExercise.findIndex((cc) => cc.length == 6);
console.log(findIndexC)

// 25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
findIndexNorway = countriesExercise.findIndex((nn) => nn.includes("Norway"))
console.log(findIndexNorway)

// 26.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
findIndexRussia = countriesExercise.findIndex((rr) => rr.includes('Russia'))
console.log(findIndexRussia)
console.log(products)
const copyProducts = Object.assign({}, products)
console.log(copyProducts)

const keys = Object.keys(copyProducts)
console.log(keys)
const valus = Object.values(copyProducts)
console.log(valus)


const entries = Object.entries(copyProducts)
console.log(entries)

products.getprice = function () {
    let xrr = this.price
    return xrr;
}

console.log([`Exercise, 2, starts, here`])
// 1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

let nn_3 = 0;
const xx1 = products.map((nn1) => {
    const xx2 = products.filter((nn2) => {
        const xx3 = products.reduce((nn3, nn4) => {
            return `${nn_3 += nn1.price}, ${nn2}, ${nn3 + nn4.price, 0}`
        })
        return xx3
    })
    return xx2
})
console.log(xx1)
let nn_2 = 0;
const pro_products = products.map((nn) => nn_2 += nn.price).filter((xx) => xx + xx).reduce((n, r) => n + r, 0)
console.log(pro_products)
// console.log(pro_products)

// 2. Find the sum of price of products using only reduce reduce(callback))
const reduce_Product = products.reduce(($, _) => $ + _.price, 0)
console.log(reduce_Product)

const countriesAll = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

// 3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const categorizeCountries = countriesAll.filter((g, e) => g.includes('land'))
console.log(categorizeCountries)

const categorizeCountriesIa = countriesAll.filter((inn) => inn.includes('ia'))
console.log(categorizeCountriesIa)

const categorizeCountriesIsland = countriesAll.filter((ii) => ii.includes('island'))
console.log(categorizeCountriesIsland)


const categorizeCountriesStan = countriesAll.filter(sta => sta.includes('stan'))
console.log(categorizeCountriesStan)


// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const letterAndNum = countriesAll.filter((ss) => ss.startsWith('A'))
console.log([`A`, letterAndNum.length])

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array


let getFirstTenCountries = countriesAll.slice(0, 10).map((item) => {
    return item;
});
console.log(getFirstTenCountries)

const getFirstTenCountries3 = countriesAll.slice(0, 10).filter((v) => v)
console.log(getFirstTenCountries3)

// 6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
let lastin = countriesAll.length;
const lastTenCountryris = countriesAll.slice(lastin - 10, lastin).map((lTen) => lTen)
console.log(lastTenCountryris)


console.log(`Exercise level three starts here`)





const countriesAllAndData = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: '??land Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://restcountries.eu/data/and.svg',
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        flag: 'https://restcountries.eu/data/ago.svg',
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://restcountries.eu/data/aia.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://restcountries.eu/data/ata.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://restcountries.eu/data/atg.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaran??'],
        population: 43590400,
        flag: 'https://restcountries.eu/data/arg.svg',
        currency: 'Argentine peso'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://restcountries.eu/data/arm.svg',
        currency: 'Armenian dram'
    },
    {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        flag: 'https://restcountries.eu/data/abw.svg',
        currency: 'Aruban florin'
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        languages: ['English'],
        population: 24117360,
        flag: 'https://restcountries.eu/data/aus.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Austria',
        capital: 'Vienna',
        languages: ['German'],
        population: 8725931,
        flag: 'https://restcountries.eu/data/aut.svg',
        currency: 'Euro'
    },
    {
        name: 'Azerbaijan',
        capital: 'Baku',
        languages: ['Azerbaijani'],
        population: 9730500,
        flag: 'https://restcountries.eu/data/aze.svg',
        currency: 'Azerbaijani manat'
    },
    {
        name: 'Bahamas',
        capital: 'Nassau',
        languages: ['English'],
        population: 378040,
        flag: 'https://restcountries.eu/data/bhs.svg',
        currency: 'Bahamian dollar'
    },
    {
        name: 'Bahrain',
        capital: 'Manama',
        languages: ['Arabic'],
        population: 1404900,
        flag: 'https://restcountries.eu/data/bhr.svg',
        currency: 'Bahraini dinar'
    },
    {
        name: 'Bangladesh',
        capital: 'Dhaka',
        languages: ['Bengali'],
        population: 161006790,
        flag: 'https://restcountries.eu/data/bgd.svg',
        currency: 'Bangladeshi taka'
    },
    {
        name: 'Barbados',
        capital: 'Bridgetown',
        languages: ['English'],
        population: 285000,
        flag: 'https://restcountries.eu/data/brb.svg',
        currency: 'Barbadian dollar'
    },
    {
        name: 'Belarus',
        capital: 'Minsk',
        languages: ['Belarusian', 'Russian'],
        population: 9498700,
        flag: 'https://restcountries.eu/data/blr.svg',
        currency: 'New Belarusian ruble'
    },
    {
        name: 'Belgium',
        capital: 'Brussels',
        languages: ['Dutch', 'French', 'German'],
        population: 11319511,
        flag: 'https://restcountries.eu/data/bel.svg',
        currency: 'Euro'
    },
    {
        name: 'Belize',
        capital: 'Belmopan',
        languages: ['English', 'Spanish'],
        population: 370300,
        flag: 'https://restcountries.eu/data/blz.svg',
        currency: 'Belize dollar'
    },
    {
        name: 'Benin',
        capital: 'Porto-Novo',
        languages: ['French'],
        population: 10653654,
        flag: 'https://restcountries.eu/data/ben.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Bermuda',
        capital: 'Hamilton',
        languages: ['English'],
        population: 61954,
        flag: 'https://restcountries.eu/data/bmu.svg',
        currency: 'Bermudian dollar'
    },
    {
        name: 'Bhutan',
        capital: 'Thimphu',
        languages: ['Dzongkha'],
        population: 775620,
        flag: 'https://restcountries.eu/data/btn.svg',
        currency: 'Bhutanese ngultrum'
    },
    {
        name: 'Bolivia (Plurinational State of)',
        capital: 'Sucre',
        languages: ['Spanish', 'Aymara', 'Quechua'],
        population: 10985059,
        flag: 'https://restcountries.eu/data/bol.svg',
        currency: 'Bolivian boliviano'
    },
    {
        name: 'Bonaire, Sint Eustatius and Saba',
        capital: 'Kralendijk',
        languages: ['Dutch'],
        population: 17408,
        flag: 'https://restcountries.eu/data/bes.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        languages: ['Bosnian', 'Croatian', 'Serbian'],
        population: 3531159,
        flag: 'https://restcountries.eu/data/bih.svg',
        currency: 'Bosnia and Herzegovina convertible mark'
    },
    {
        name: 'Botswana',
        capital: 'Gaborone',
        languages: ['English', 'Tswana'],
        population: 2141206,
        flag: 'https://restcountries.eu/data/bwa.svg',
        currency: 'Botswana pula'
    },
    {
        name: 'Bouvet Island',
        capital: '',
        languages: ['Norwegian', 'Norwegian Bokm??l', 'Norwegian Nynorsk'],
        population: 0,
        flag: 'https://restcountries.eu/data/bvt.svg',
        currency: 'Norwegian krone'
    },
    {
        name: 'Brazil',
        capital: 'Bras??lia',
        languages: ['Portuguese'],
        population: 206135893,
        flag: 'https://restcountries.eu/data/bra.svg',
        currency: 'Brazilian real'
    },
    {
        name: 'British Indian Ocean Territory',
        capital: 'Diego Garcia',
        languages: ['English'],
        population: 3000,
        flag: 'https://restcountries.eu/data/iot.svg',
        currency: 'United States dollar'
    },
    {
        name: 'United States Minor Outlying Islands',
        capital: '',
        languages: ['English'],
        population: 300,
        flag: 'https://restcountries.eu/data/umi.svg',
        currency: 'United States Dollar'
    },
    {
        name: 'Virgin Islands (British)',
        capital: 'Road Town',
        languages: ['English'],
        population: 28514,
        flag: 'https://restcountries.eu/data/vgb.svg',
        currency: '[D]'
    },
    {
        name: 'Virgin Islands (U.S.)',
        capital: 'Charlotte Amalie',
        languages: ['English'],
        population: 114743,
        flag: 'https://restcountries.eu/data/vir.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Brunei Darussalam',
        capital: 'Bandar Seri Begawan',
        languages: ['Malay'],
        population: 411900,
        flag: 'https://restcountries.eu/data/brn.svg',
        currency: 'Brunei dollar'
    },
    {
        name: 'Bulgaria',
        capital: 'Sofia',
        languages: ['Bulgarian'],
        population: 7153784,
        flag: 'https://restcountries.eu/data/bgr.svg',
        currency: 'Bulgarian lev'
    },
    {
        name: 'Burkina Faso',
        capital: 'Ouagadougou',
        languages: ['French', 'Fula'],
        population: 19034397,
        flag: 'https://restcountries.eu/data/bfa.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Burundi',
        capital: 'Bujumbura',
        languages: ['French', 'Kirundi'],
        population: 10114505,
        flag: 'https://restcountries.eu/data/bdi.svg',
        currency: 'Burundian franc'
    },
    {
        name: 'Cambodia',
        capital: 'Phnom Penh',
        languages: ['Khmer'],
        population: 15626444,
        flag: 'https://restcountries.eu/data/khm.svg',
        currency: 'Cambodian riel'
    },
    {
        name: 'Cameroon',
        capital: 'Yaound??',
        languages: ['English', 'French'],
        population: 22709892,
        flag: 'https://restcountries.eu/data/cmr.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        languages: ['English', 'French'],
        population: 36155487,
        flag: 'https://restcountries.eu/data/can.svg',
        currency: 'Canadian dollar'
    },
    {
        name: 'Cabo Verde',
        capital: 'Praia',
        languages: ['Portuguese'],
        population: 531239,
        flag: 'https://restcountries.eu/data/cpv.svg',
        currency: 'Cape Verdean escudo'
    },
    {
        name: 'Cayman Islands',
        capital: 'George Town',
        languages: ['English'],
        population: 58238,
        flag: 'https://restcountries.eu/data/cym.svg',
        currency: 'Cayman Islands dollar'
    },
    {
        name: 'Central African Republic',
        capital: 'Bangui',
        languages: ['French', 'Sango'],
        population: 4998000,
        flag: 'https://restcountries.eu/data/caf.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Chad',
        capital: "N'Djamena",
        languages: ['French', 'Arabic'],
        population: 14497000,
        flag: 'https://restcountries.eu/data/tcd.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Chile',
        capital: 'Santiago',
        languages: ['Spanish'],
        population: 18191900,
        flag: 'https://restcountries.eu/data/chl.svg',
        currency: 'Chilean peso'
    },
    {
        name: 'China',
        capital: 'Beijing',
        languages: ['Chinese'],
        population: 1377422166,
        flag: 'https://restcountries.eu/data/chn.svg',
        currency: 'Chinese yuan'
    },
    {
        name: 'Christmas Island',
        capital: 'Flying Fish Cove',
        languages: ['English'],
        population: 2072,
        flag: 'https://restcountries.eu/data/cxr.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Cocos (Keeling) Islands',
        capital: 'West Island',
        languages: ['English'],
        population: 550,
        flag: 'https://restcountries.eu/data/cck.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Colombia',
        capital: 'Bogot??',
        languages: ['Spanish'],
        population: 48759958,
        flag: 'https://restcountries.eu/data/col.svg',
        currency: 'Colombian peso'
    },
    {
        name: 'Comoros',
        capital: 'Moroni',
        languages: ['Arabic', 'French'],
        population: 806153,
        flag: 'https://restcountries.eu/data/com.svg',
        currency: 'Comorian franc'
    },
    {
        name: 'Congo',
        capital: 'Brazzaville',
        languages: ['French', 'Lingala'],
        population: 4741000,
        flag: 'https://restcountries.eu/data/cog.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Congo (Democratic Republic of the)',
        capital: 'Kinshasa',
        languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
        population: 85026000,
        flag: 'https://restcountries.eu/data/cod.svg',
        currency: 'Congolese franc'
    },
    {
        name: 'Cook Islands',
        capital: 'Avarua',
        languages: ['English'],
        population: 18100,
        flag: 'https://restcountries.eu/data/cok.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Costa Rica',
        capital: 'San Jos??',
        languages: ['Spanish'],
        population: 4890379,
        flag: 'https://restcountries.eu/data/cri.svg',
        currency: 'Costa Rican col??n'
    },
    {
        name: 'Croatia',
        capital: 'Zagreb',
        languages: ['Croatian'],
        population: 4190669,
        flag: 'https://restcountries.eu/data/hrv.svg',
        currency: 'Croatian kuna'
    },
    {
        name: 'Cuba',
        capital: 'Havana',
        languages: ['Spanish'],
        population: 11239004,
        flag: 'https://restcountries.eu/data/cub.svg',
        currency: 'Cuban convertible peso'
    },
    {
        name: 'Cura??ao',
        capital: 'Willemstad',
        languages: ['Dutch', '(Eastern) Punjabi', 'English'],
        population: 154843,
        flag: 'https://restcountries.eu/data/cuw.svg',
        currency: 'Netherlands Antillean guilder'
    },
    {
        name: 'Cyprus',
        capital: 'Nicosia',
        languages: ['Greek (modern)', 'Turkish', 'Armenian'],
        population: 847000,
        flag: 'https://restcountries.eu/data/cyp.svg',
        currency: 'Euro'
    },
    {
        name: 'Czech Republic',
        capital: 'Prague',
        languages: ['Czech', 'Slovak'],
        population: 10558524,
        flag: 'https://restcountries.eu/data/cze.svg',
        currency: 'Czech koruna'
    },
    {
        name: 'Denmark',
        capital: 'Copenhagen',
        languages: ['Danish'],
        population: 5717014,
        flag: 'https://restcountries.eu/data/dnk.svg',
        currency: 'Danish krone'
    },
    {
        name: 'Djibouti',
        capital: 'Djibouti',
        languages: ['French', 'Arabic'],
        population: 900000,
        flag: 'https://restcountries.eu/data/dji.svg',
        currency: 'Djiboutian franc'
    },
    {
        name: 'Dominica',
        capital: 'Roseau',
        languages: ['English'],
        population: 71293,
        flag: 'https://restcountries.eu/data/dma.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Dominican Republic',
        capital: 'Santo Domingo',
        languages: ['Spanish'],
        population: 10075045,
        flag: 'https://restcountries.eu/data/dom.svg',
        currency: 'Dominican peso'
    },
    {
        name: 'Ecuador',
        capital: 'Quito',
        languages: ['Spanish'],
        population: 16545799,
        flag: 'https://restcountries.eu/data/ecu.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Egypt',
        capital: 'Cairo',
        languages: ['Arabic'],
        population: 91290000,
        flag: 'https://restcountries.eu/data/egy.svg',
        currency: 'Egyptian pound'
    },
    {
        name: 'El Salvador',
        capital: 'San Salvador',
        languages: ['Spanish'],
        population: 6520675,
        flag: 'https://restcountries.eu/data/slv.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Equatorial Guinea',
        capital: 'Malabo',
        languages: ['Spanish', 'French'],
        population: 1222442,
        flag: 'https://restcountries.eu/data/gnq.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Eritrea',
        capital: 'Asmara',
        languages: ['Tigrinya', 'Arabic', 'English'],
        population: 5352000,
        flag: 'https://restcountries.eu/data/eri.svg',
        currency: 'Eritrean nakfa'
    },
    {
        name: 'Estonia',
        capital: 'Tallinn',
        languages: ['Estonian'],
        population: 1315944,
        flag: 'https://restcountries.eu/data/est.svg',
        currency: 'Euro'
    },
    {
        name: 'Ethiopia',
        capital: 'Addis Ababa',
        languages: ['Amharic'],
        population: 92206005,
        flag: 'https://restcountries.eu/data/eth.svg',
        currency: 'Ethiopian birr'
    },
    {
        name: 'Falkland Islands (Malvinas)',
        capital: 'Stanley',
        languages: ['English'],
        population: 2563,
        flag: 'https://restcountries.eu/data/flk.svg',
        currency: 'Falkland Islands pound'
    },
    {
        name: 'Faroe Islands',
        capital: 'T??rshavn',
        languages: ['Faroese'],
        population: 49376,
        flag: 'https://restcountries.eu/data/fro.svg',
        currency: 'Danish krone'
    },
    {
        name: 'Fiji',
        capital: 'Suva',
        languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
        population: 867000,
        flag: 'https://restcountries.eu/data/fji.svg',
        currency: 'Fijian dollar'
    },
    {
        name: 'Finland',
        capital: 'Helsinki',
        languages: ['Finnish', 'Swedish'],
        population: 5491817,
        flag: 'https://restcountries.eu/data/fin.svg',
        currency: 'Euro'
    },
    {
        name: 'France',
        capital: 'Paris',
        languages: ['French'],
        population: 66710000,
        flag: 'https://restcountries.eu/data/fra.svg',
        currency: 'Euro'
    },
    {
        name: 'French Guiana',
        capital: 'Cayenne',
        languages: ['French'],
        population: 254541,
        flag: 'https://restcountries.eu/data/guf.svg',
        currency: 'Euro'
    },
    {
        name: 'French Polynesia',
        capital: 'Papeet??',
        languages: ['French'],
        population: 271800,
        flag: 'https://restcountries.eu/data/pyf.svg',
        currency: 'CFP franc'
    },
    {
        name: 'French Southern Territories',
        capital: 'Port-aux-Fran??ais',
        languages: ['French'],
        population: 140,
        flag: 'https://restcountries.eu/data/atf.svg',
        currency: 'Euro'
    },
    {
        name: 'Gabon',
        capital: 'Libreville',
        languages: ['French'],
        population: 1802278,
        flag: 'https://restcountries.eu/data/gab.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Gambia',
        capital: 'Banjul',
        languages: ['English'],
        population: 1882450,
        flag: 'https://restcountries.eu/data/gmb.svg',
        currency: 'Gambian dalasi'
    },
    {
        name: 'Georgia',
        capital: 'Tbilisi',
        languages: ['Georgian'],
        population: 3720400,
        flag: 'https://restcountries.eu/data/geo.svg',
        currency: 'Georgian Lari'
    },
    {
        name: 'Germany',
        capital: 'Berlin',
        languages: ['German'],
        population: 81770900,
        flag: 'https://restcountries.eu/data/deu.svg',
        currency: 'Euro'
    },
    {
        name: 'Ghana',
        capital: 'Accra',
        languages: ['English'],
        population: 27670174,
        flag: 'https://restcountries.eu/data/gha.svg',
        currency: 'Ghanaian cedi'
    },
    {
        name: 'Gibraltar',
        capital: 'Gibraltar',
        languages: ['English'],
        population: 33140,
        flag: 'https://restcountries.eu/data/gib.svg',
        currency: 'Gibraltar pound'
    },
    {
        name: 'Greece',
        capital: 'Athens',
        languages: ['Greek (modern)'],
        population: 10858018,
        flag: 'https://restcountries.eu/data/grc.svg',
        currency: 'Euro'
    },
    {
        name: 'Greenland',
        capital: 'Nuuk',
        languages: ['Kalaallisut'],
        population: 55847,
        flag: 'https://restcountries.eu/data/grl.svg',
        currency: 'Danish krone'
    },
    {
        name: 'Grenada',
        capital: "St. George's",
        languages: ['English'],
        population: 103328,
        flag: 'https://restcountries.eu/data/grd.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Guadeloupe',
        capital: 'Basse-Terre',
        languages: ['French'],
        population: 400132,
        flag: 'https://restcountries.eu/data/glp.svg',
        currency: 'Euro'
    },
    {
        name: 'Guam',
        capital: 'Hag??t??a',
        languages: ['English', 'Chamorro', 'Spanish'],
        population: 184200,
        flag: 'https://restcountries.eu/data/gum.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Guatemala',
        capital: 'Guatemala City',
        languages: ['Spanish'],
        population: 16176133,
        flag: 'https://restcountries.eu/data/gtm.svg',
        currency: 'Guatemalan quetzal'
    },
    {
        name: 'Guernsey',
        capital: 'St. Peter Port',
        languages: ['English', 'French'],
        population: 62999,
        flag: 'https://restcountries.eu/data/ggy.svg',
        currency: 'British pound'
    },
    {
        name: 'Guinea',
        capital: 'Conakry',
        languages: ['French', 'Fula'],
        population: 12947000,
        flag: 'https://restcountries.eu/data/gin.svg',
        currency: 'Guinean franc'
    },
    {
        name: 'Guinea-Bissau',
        capital: 'Bissau',
        languages: ['Portuguese'],
        population: 1547777,
        flag: 'https://restcountries.eu/data/gnb.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Guyana',
        capital: 'Georgetown',
        languages: ['English'],
        population: 746900,
        flag: 'https://restcountries.eu/data/guy.svg',
        currency: 'Guyanese dollar'
    },
    {
        name: 'Haiti',
        capital: 'Port-au-Prince',
        languages: ['French', 'Haitian'],
        population: 11078033,
        flag: 'https://restcountries.eu/data/hti.svg',
        currency: 'Haitian gourde'
    },
    {
        name: 'Heard Island and McDonald Islands',
        capital: '',
        languages: ['English'],
        population: 0,
        flag: 'https://restcountries.eu/data/hmd.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Holy See',
        capital: 'Rome',
        languages: ['Latin', 'Italian', 'French', 'German'],
        population: 451,
        flag: 'https://restcountries.eu/data/vat.svg',
        currency: 'Euro'
    },
    {
        name: 'Honduras',
        capital: 'Tegucigalpa',
        languages: ['Spanish'],
        population: 8576532,
        flag: 'https://restcountries.eu/data/hnd.svg',
        currency: 'Honduran lempira'
    },
    {
        name: 'Hong Kong',
        capital: 'City of Victoria',
        languages: ['English', 'Chinese'],
        population: 7324300,
        flag: 'https://restcountries.eu/data/hkg.svg',
        currency: 'Hong Kong dollar'
    },
    {
        name: 'Hungary',
        capital: 'Budapest',
        languages: ['Hungarian'],
        population: 9823000,
        flag: 'https://restcountries.eu/data/hun.svg',
        currency: 'Hungarian forint'
    },
    {
        name: 'Iceland',
        capital: 'Reykjav??k',
        languages: ['Icelandic'],
        population: 334300,
        flag: 'https://restcountries.eu/data/isl.svg',
        currency: 'Icelandic kr??na'
    },
    {
        name: 'India',
        capital: 'New Delhi',
        languages: ['Hindi', 'English'],
        population: 1295210000,
        flag: 'https://restcountries.eu/data/ind.svg',
        currency: 'Indian rupee'
    },
    {
        name: 'Indonesia',
        capital: 'Jakarta',
        languages: ['Indonesian'],
        population: 258705000,
        flag: 'https://restcountries.eu/data/idn.svg',
        currency: 'Indonesian rupiah'
    },
    {
        name: "C??te d'Ivoire",
        capital: 'Yamoussoukro',
        languages: ['French'],
        population: 22671331,
        flag: 'https://restcountries.eu/data/civ.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Iran (Islamic Republic of)',
        capital: 'Tehran',
        languages: ['Persian (Farsi)'],
        population: 79369900,
        flag: 'https://restcountries.eu/data/irn.svg',
        currency: 'Iranian rial'
    },
    {
        name: 'Iraq',
        capital: 'Baghdad',
        languages: ['Arabic', 'Kurdish'],
        population: 37883543,
        flag: 'https://restcountries.eu/data/irq.svg',
        currency: 'Iraqi dinar'
    },
    {
        name: 'Ireland',
        capital: 'Dublin',
        languages: ['Irish', 'English'],
        population: 6378000,
        flag: 'https://restcountries.eu/data/irl.svg',
        currency: 'Euro'
    },
    {
        name: 'Isle of Man',
        capital: 'Douglas',
        languages: ['English', 'Manx'],
        population: 84497,
        flag: 'https://restcountries.eu/data/imn.svg',
        currency: 'British pound'
    },
    {
        name: 'Israel',
        capital: 'Jerusalem',
        languages: ['Hebrew (modern)', 'Arabic'],
        population: 8527400,
        flag: 'https://restcountries.eu/data/isr.svg',
        currency: 'Israeli new shekel'
    },
    {
        name: 'Italy',
        capital: 'Rome',
        languages: ['Italian'],
        population: 60665551,
        flag: 'https://restcountries.eu/data/ita.svg',
        currency: 'Euro'
    },
    {
        name: 'Jamaica',
        capital: 'Kingston',
        languages: ['English'],
        population: 2723246,
        flag: 'https://restcountries.eu/data/jam.svg',
        currency: 'Jamaican dollar'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        languages: ['Japanese'],
        population: 126960000,
        flag: 'https://restcountries.eu/data/jpn.svg',
        currency: 'Japanese yen'
    },
    {
        name: 'Jersey',
        capital: 'Saint Helier',
        languages: ['English', 'French'],
        population: 100800,
        flag: 'https://restcountries.eu/data/jey.svg',
        currency: 'British pound'
    },
    {
        name: 'Jordan',
        capital: 'Amman',
        languages: ['Arabic'],
        population: 9531712,
        flag: 'https://restcountries.eu/data/jor.svg',
        currency: 'Jordanian dinar'
    },
    {
        name: 'Kazakhstan',
        capital: 'Astana',
        languages: ['Kazakh', 'Russian'],
        population: 17753200,
        flag: 'https://restcountries.eu/data/kaz.svg',
        currency: 'Kazakhstani tenge'
    },
    {
        name: 'Kenya',
        capital: 'Nairobi',
        languages: ['English', 'Swahili'],
        population: 47251000,
        flag: 'https://restcountries.eu/data/ken.svg',
        currency: 'Kenyan shilling'
    },
    {
        name: 'Kiribati',
        capital: 'South Tarawa',
        languages: ['English'],
        population: 113400,
        flag: 'https://restcountries.eu/data/kir.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Kuwait',
        capital: 'Kuwait City',
        languages: ['Arabic'],
        population: 4183658,
        flag: 'https://restcountries.eu/data/kwt.svg',
        currency: 'Kuwaiti dinar'
    },
    {
        name: 'Kyrgyzstan',
        capital: 'Bishkek',
        languages: ['Kyrgyz', 'Russian'],
        population: 6047800,
        flag: 'https://restcountries.eu/data/kgz.svg',
        currency: 'Kyrgyzstani som'
    },
    {
        name: "Lao People's Democratic Republic",
        capital: 'Vientiane',
        languages: ['Lao'],
        population: 6492400,
        flag: 'https://restcountries.eu/data/lao.svg',
        currency: 'Lao kip'
    },
    {
        name: 'Latvia',
        capital: 'Riga',
        languages: ['Latvian'],
        population: 1961600,
        flag: 'https://restcountries.eu/data/lva.svg',
        currency: 'Euro'
    },
    {
        name: 'Lebanon',
        capital: 'Beirut',
        languages: ['Arabic', 'French'],
        population: 5988000,
        flag: 'https://restcountries.eu/data/lbn.svg',
        currency: 'Lebanese pound'
    },
    {
        name: 'Lesotho',
        capital: 'Maseru',
        languages: ['English', 'Southern Sotho'],
        population: 1894194,
        flag: 'https://restcountries.eu/data/lso.svg',
        currency: 'Lesotho loti'
    },
    {
        name: 'Liberia',
        capital: 'Monrovia',
        languages: ['English'],
        population: 4615000,
        flag: 'https://restcountries.eu/data/lbr.svg',
        currency: 'Liberian dollar'
    },
    {
        name: 'Libya',
        capital: 'Tripoli',
        languages: ['Arabic'],
        population: 6385000,
        flag: 'https://restcountries.eu/data/lby.svg',
        currency: 'Libyan dinar'
    },
    {
        name: 'Liechtenstein',
        capital: 'Vaduz',
        languages: ['German'],
        population: 37623,
        flag: 'https://restcountries.eu/data/lie.svg',
        currency: 'Swiss franc'
    },
    {
        name: 'Lithuania',
        capital: 'Vilnius',
        languages: ['Lithuanian'],
        population: 2872294,
        flag: 'https://restcountries.eu/data/ltu.svg',
        currency: 'Euro'
    },
    {
        name: 'Luxembourg',
        capital: 'Luxembourg',
        languages: ['French', 'German', 'Luxembourgish'],
        population: 576200,
        flag: 'https://restcountries.eu/data/lux.svg',
        currency: 'Euro'
    },
    {
        name: 'Macao',
        capital: '',
        languages: ['Chinese', 'Portuguese'],
        population: 649100,
        flag: 'https://restcountries.eu/data/mac.svg',
        currency: 'Macanese pataca'
    },
    {
        name: 'Macedonia (the former Yugoslav Republic of)',
        capital: 'Skopje',
        languages: ['Macedonian'],
        population: 2058539,
        flag: 'https://restcountries.eu/data/mkd.svg',
        currency: 'Macedonian denar'
    },
    {
        name: 'Madagascar',
        capital: 'Antananarivo',
        languages: ['French', 'Malagasy'],
        population: 22434363,
        flag: 'https://restcountries.eu/data/mdg.svg',
        currency: 'Malagasy ariary'
    },
    {
        name: 'Malawi',
        capital: 'Lilongwe',
        languages: ['English', 'Chichewa'],
        population: 16832910,
        flag: 'https://restcountries.eu/data/mwi.svg',
        currency: 'Malawian kwacha'
    },
    {
        name: 'Malaysia',
        capital: 'Kuala Lumpur',
        languages: ['Malaysian'],
        population: 31405416,
        flag: 'https://restcountries.eu/data/mys.svg',
        currency: 'Malaysian ringgit'
    },
    {
        name: 'Maldives',
        capital: 'Mal??',
        languages: ['Divehi'],
        population: 344023,
        flag: 'https://restcountries.eu/data/mdv.svg',
        currency: 'Maldivian rufiyaa'
    },
    {
        name: 'Mali',
        capital: 'Bamako',
        languages: ['French'],
        population: 18135000,
        flag: 'https://restcountries.eu/data/mli.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Malta',
        capital: 'Valletta',
        languages: ['Maltese', 'English'],
        population: 425384,
        flag: 'https://restcountries.eu/data/mlt.svg',
        currency: 'Euro'
    },
    {
        name: 'Marshall Islands',
        capital: 'Majuro',
        languages: ['English', 'Marshallese'],
        population: 54880,
        flag: 'https://restcountries.eu/data/mhl.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Martinique',
        capital: 'Fort-de-France',
        languages: ['French'],
        population: 378243,
        flag: 'https://restcountries.eu/data/mtq.svg',
        currency: 'Euro'
    },
    {
        name: 'Mauritania',
        capital: 'Nouakchott',
        languages: ['Arabic'],
        population: 3718678,
        flag: 'https://restcountries.eu/data/mrt.svg',
        currency: 'Mauritanian ouguiya'
    },
    {
        name: 'Mauritius',
        capital: 'Port Louis',
        languages: ['English'],
        population: 1262879,
        flag: 'https://restcountries.eu/data/mus.svg',
        currency: 'Mauritian rupee'
    },
    {
        name: 'Mayotte',
        capital: 'Mamoudzou',
        languages: ['French'],
        population: 226915,
        flag: 'https://restcountries.eu/data/myt.svg',
        currency: 'Euro'
    },
    {
        name: 'Mexico',
        capital: 'Mexico City',
        languages: ['Spanish'],
        population: 122273473,
        flag: 'https://restcountries.eu/data/mex.svg',
        currency: 'Mexican peso'
    },
    {
        name: 'Micronesia (Federated States of)',
        capital: 'Palikir',
        languages: ['English'],
        population: 102800,
        flag: 'https://restcountries.eu/data/fsm.svg',
        currency: '[D]'
    },
    {
        name: 'Moldova (Republic of)',
        capital: 'Chi??in??u',
        languages: ['Romanian'],
        population: 3553100,
        flag: 'https://restcountries.eu/data/mda.svg',
        currency: 'Moldovan leu'
    },
    {
        name: 'Monaco',
        capital: 'Monaco',
        languages: ['French'],
        population: 38400,
        flag: 'https://restcountries.eu/data/mco.svg',
        currency: 'Euro'
    },
    {
        name: 'Mongolia',
        capital: 'Ulan Bator',
        languages: ['Mongolian'],
        population: 3093100,
        flag: 'https://restcountries.eu/data/mng.svg',
        currency: 'Mongolian t??gr??g'
    },
    {
        name: 'Montenegro',
        capital: 'Podgorica',
        languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
        population: 621810,
        flag: 'https://restcountries.eu/data/mne.svg',
        currency: 'Euro'
    },
    {
        name: 'Montserrat',
        capital: 'Plymouth',
        languages: ['English'],
        population: 4922,
        flag: 'https://restcountries.eu/data/msr.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Morocco',
        capital: 'Rabat',
        languages: ['Arabic'],
        population: 33337529,
        flag: 'https://restcountries.eu/data/mar.svg',
        currency: 'Moroccan dirham'
    },
    {
        name: 'Mozambique',
        capital: 'Maputo',
        languages: ['Portuguese'],
        population: 26423700,
        flag: 'https://restcountries.eu/data/moz.svg',
        currency: 'Mozambican metical'
    },
    {
        name: 'Myanmar',
        capital: 'Naypyidaw',
        languages: ['Burmese'],
        population: 51419420,
        flag: 'https://restcountries.eu/data/mmr.svg',
        currency: 'Burmese kyat'
    },
    {
        name: 'Namibia',
        capital: 'Windhoek',
        languages: ['English', 'Afrikaans'],
        population: 2324388,
        flag: 'https://restcountries.eu/data/nam.svg',
        currency: 'Namibian dollar'
    },
    {
        name: 'Nauru',
        capital: 'Yaren',
        languages: ['English', 'Nauruan'],
        population: 10084,
        flag: 'https://restcountries.eu/data/nru.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Nepal',
        capital: 'Kathmandu',
        languages: ['Nepali'],
        population: 28431500,
        flag: 'https://restcountries.eu/data/npl.svg',
        currency: 'Nepalese rupee'
    },
    {
        name: 'Netherlands',
        capital: 'Amsterdam',
        languages: ['Dutch'],
        population: 17019800,
        flag: 'https://restcountries.eu/data/nld.svg',
        currency: 'Euro'
    },
    {
        name: 'New Caledonia',
        capital: 'Noum??a',
        languages: ['French'],
        population: 268767,
        flag: 'https://restcountries.eu/data/ncl.svg',
        currency: 'CFP franc'
    },
    {
        name: 'New Zealand',
        capital: 'Wellington',
        languages: ['English', 'M??ori'],
        population: 4697854,
        flag: 'https://restcountries.eu/data/nzl.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Nicaragua',
        capital: 'Managua',
        languages: ['Spanish'],
        population: 6262703,
        flag: 'https://restcountries.eu/data/nic.svg',
        currency: 'Nicaraguan c??rdoba'
    },
    {
        name: 'Niger',
        capital: 'Niamey',
        languages: ['French'],
        population: 20715000,
        flag: 'https://restcountries.eu/data/ner.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Nigeria',
        capital: 'Abuja',
        languages: ['English'],
        population: 186988000,
        flag: 'https://restcountries.eu/data/nga.svg',
        currency: 'Nigerian naira'
    },
    {
        name: 'Niue',
        capital: 'Alofi',
        languages: ['English'],
        population: 1470,
        flag: 'https://restcountries.eu/data/niu.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Norfolk Island',
        capital: 'Kingston',
        languages: ['English'],
        population: 2302,
        flag: 'https://restcountries.eu/data/nfk.svg',
        currency: 'Australian dollar'
    },
    {
        name: "Korea (Democratic People's Republic of)",
        capital: 'Pyongyang',
        languages: ['Korean'],
        population: 25281000,
        flag: 'https://restcountries.eu/data/prk.svg',
        currency: 'North Korean won'
    },
    {
        name: 'Northern Mariana Islands',
        capital: 'Saipan',
        languages: ['English', 'Chamorro'],
        population: 56940,
        flag: 'https://restcountries.eu/data/mnp.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Norway',
        capital: 'Oslo',
        languages: ['Norwegian', 'Norwegian Bokm??l', 'Norwegian Nynorsk'],
        population: 5223256,
        flag: 'https://restcountries.eu/data/nor.svg',
        currency: 'Norwegian krone'
    },
    {
        name: 'Oman',
        capital: 'Muscat',
        languages: ['Arabic'],
        population: 4420133,
        flag: 'https://restcountries.eu/data/omn.svg',
        currency: 'Omani rial'
    },
    {
        name: 'Pakistan',
        capital: 'Islamabad',
        languages: ['English', 'Urdu'],
        population: 194125062,
        flag: 'https://restcountries.eu/data/pak.svg',
        currency: 'Pakistani rupee'
    },
    {
        name: 'Palau',
        capital: 'Ngerulmud',
        languages: ['English'],
        population: 17950,
        flag: 'https://restcountries.eu/data/plw.svg',
        currency: '[E]'
    },
    {
        name: 'Palestine, State of',
        capital: 'Ramallah',
        languages: ['Arabic'],
        population: 4682467,
        flag: 'https://restcountries.eu/data/pse.svg',
        currency: 'Israeli new sheqel'
    },
    {
        name: 'Panama',
        capital: 'Panama City',
        languages: ['Spanish'],
        population: 3814672,
        flag: 'https://restcountries.eu/data/pan.svg',
        currency: 'Panamanian balboa'
    },
    {
        name: 'Papua New Guinea',
        capital: 'Port Moresby',
        languages: ['English'],
        population: 8083700,
        flag: 'https://restcountries.eu/data/png.svg',
        currency: 'Papua New Guinean kina'
    },
    {
        name: 'Paraguay',
        capital: 'Asunci??n',
        languages: ['Spanish', 'Guaran??'],
        population: 6854536,
        flag: 'https://restcountries.eu/data/pry.svg',
        currency: 'Paraguayan guaran??'
    },
    {
        name: 'Peru',
        capital: 'Lima',
        languages: ['Spanish'],
        population: 31488700,
        flag: 'https://restcountries.eu/data/per.svg',
        currency: 'Peruvian sol'
    },
    {
        name: 'Philippines',
        capital: 'Manila',
        languages: ['English'],
        population: 103279800,
        flag: 'https://restcountries.eu/data/phl.svg',
        currency: 'Philippine peso'
    },
    {
        name: 'Pitcairn',
        capital: 'Adamstown',
        languages: ['English'],
        population: 56,
        flag: 'https://restcountries.eu/data/pcn.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Poland',
        capital: 'Warsaw',
        languages: ['Polish'],
        population: 38437239,
        flag: 'https://restcountries.eu/data/pol.svg',
        currency: 'Polish z??oty'
    },
    {
        name: 'Portugal',
        capital: 'Lisbon',
        languages: ['Portuguese'],
        population: 10374822,
        flag: 'https://restcountries.eu/data/prt.svg',
        currency: 'Euro'
    },
    {
        name: 'Puerto Rico',
        capital: 'San Juan',
        languages: ['Spanish', 'English'],
        population: 3474182,
        flag: 'https://restcountries.eu/data/pri.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Qatar',
        capital: 'Doha',
        languages: ['Arabic'],
        population: 2587564,
        flag: 'https://restcountries.eu/data/qat.svg',
        currency: 'Qatari riyal'
    },
    {
        name: 'Republic of Kosovo',
        capital: 'Pristina',
        languages: ['Albanian', 'Serbian'],
        population: 1733842,
        flag: 'https://restcountries.eu/data/kos.svg',
        currency: 'Euro'
    },
    {
        name: 'R??union',
        capital: 'Saint-Denis',
        languages: ['French'],
        population: 840974,
        flag: 'https://restcountries.eu/data/reu.svg',
        currency: 'Euro'
    },
    {
        name: 'Romania',
        capital: 'Bucharest',
        languages: ['Romanian'],
        population: 19861408,
        flag: 'https://restcountries.eu/data/rou.svg',
        currency: 'Romanian leu'
    },
    {
        name: 'Russian Federation',
        capital: 'Moscow',
        languages: ['Russian'],
        population: 146599183,
        flag: 'https://restcountries.eu/data/rus.svg',
        currency: 'Russian ruble'
    },
    {
        name: 'Rwanda',
        capital: 'Kigali',
        languages: ['Kinyarwanda', 'English', 'French'],
        population: 11553188,
        flag: 'https://restcountries.eu/data/rwa.svg',
        currency: 'Rwandan franc'
    },
    {
        name: 'Saint Barth??lemy',
        capital: 'Gustavia',
        languages: ['French'],
        population: 9417,
        flag: 'https://restcountries.eu/data/blm.svg',
        currency: 'Euro'
    },
    {
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        capital: 'Jamestown',
        languages: ['English'],
        population: 4255,
        flag: 'https://restcountries.eu/data/shn.svg',
        currency: 'Saint Helena pound'
    },
    {
        name: 'Saint Kitts and Nevis',
        capital: 'Basseterre',
        languages: ['English'],
        population: 46204,
        flag: 'https://restcountries.eu/data/kna.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Saint Lucia',
        capital: 'Castries',
        languages: ['English'],
        population: 186000,
        flag: 'https://restcountries.eu/data/lca.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Saint Martin (French part)',
        capital: 'Marigot',
        languages: ['English', 'French', 'Dutch'],
        population: 36979,
        flag: 'https://restcountries.eu/data/maf.svg',
        currency: 'Euro'
    },
    {
        name: 'Saint Pierre and Miquelon',
        capital: 'Saint-Pierre',
        languages: ['French'],
        population: 6069,
        flag: 'https://restcountries.eu/data/spm.svg',
        currency: 'Euro'
    },
    {
        name: 'Saint Vincent and the Grenadines',
        capital: 'Kingstown',
        languages: ['English'],
        population: 109991,
        flag: 'https://restcountries.eu/data/vct.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Samoa',
        capital: 'Apia',
        languages: ['Samoan', 'English'],
        population: 194899,
        flag: 'https://restcountries.eu/data/wsm.svg',
        currency: 'Samoan t??l??'
    },
    {
        name: 'San Marino',
        capital: 'City of San Marino',
        languages: ['Italian'],
        population: 33005,
        flag: 'https://restcountries.eu/data/smr.svg',
        currency: 'Euro'
    },
    {
        name: 'Sao Tome and Principe',
        capital: 'S??o Tom??',
        languages: ['Portuguese'],
        population: 187356,
        flag: 'https://restcountries.eu/data/stp.svg',
        currency: 'S??o Tom?? and Pr??ncipe dobra'
    },
    {
        name: 'Saudi Arabia',
        capital: 'Riyadh',
        languages: ['Arabic'],
        population: 32248200,
        flag: 'https://restcountries.eu/data/sau.svg',
        currency: 'Saudi riyal'
    },
    {
        name: 'Senegal',
        capital: 'Dakar',
        languages: ['French'],
        population: 14799859,
        flag: 'https://restcountries.eu/data/sen.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Serbia',
        capital: 'Belgrade',
        languages: ['Serbian'],
        population: 7076372,
        flag: 'https://restcountries.eu/data/srb.svg',
        currency: 'Serbian dinar'
    },
    {
        name: 'Seychelles',
        capital: 'Victoria',
        languages: ['French', 'English'],
        population: 91400,
        flag: 'https://restcountries.eu/data/syc.svg',
        currency: 'Seychellois rupee'
    },
    {
        name: 'Sierra Leone',
        capital: 'Freetown',
        languages: ['English'],
        population: 7075641,
        flag: 'https://restcountries.eu/data/sle.svg',
        currency: 'Sierra Leonean leone'
    },
    {
        name: 'Singapore',
        capital: 'Singapore',
        languages: ['English', 'Malay', 'Tamil', 'Chinese'],
        population: 5535000,
        flag: 'https://restcountries.eu/data/sgp.svg',
        currency: 'Brunei dollar'
    },
    {
        name: 'Sint Maarten (Dutch part)',
        capital: 'Philipsburg',
        languages: ['Dutch', 'English'],
        population: 38247,
        flag: 'https://restcountries.eu/data/sxm.svg',
        currency: 'Netherlands Antillean guilder'
    },
    {
        name: 'Slovakia',
        capital: 'Bratislava',
        languages: ['Slovak'],
        population: 5426252,
        flag: 'https://restcountries.eu/data/svk.svg',
        currency: 'Euro'
    },
    {
        name: 'Slovenia',
        capital: 'Ljubljana',
        languages: ['Slovene'],
        population: 2064188,
        flag: 'https://restcountries.eu/data/svn.svg',
        currency: 'Euro'
    },
    {
        name: 'Solomon Islands',
        capital: 'Honiara',
        languages: ['English'],
        population: 642000,
        flag: 'https://restcountries.eu/data/slb.svg',
        currency: 'Solomon Islands dollar'
    },
    {
        name: 'Somalia',
        capital: 'Mogadishu',
        languages: ['Somali', 'Arabic'],
        population: 11079000,
        flag: 'https://restcountries.eu/data/som.svg',
        currency: 'Somali shilling'
    },
    {
        name: 'South Africa',
        capital: 'Pretoria',
        languages: [
            'Afrikaans',
            'English',
            'Southern Ndebele',
            'Southern Sotho',
            'Swati',
            'Tswana',
            'Tsonga',
            'Venda',
            'Xhosa',
            'Zulu'
        ],
        population: 55653654,
        flag: 'https://restcountries.eu/data/zaf.svg',
        currency: 'South African rand'
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        capital: 'King Edward Point',
        languages: ['English'],
        population: 30,
        flag: 'https://restcountries.eu/data/sgs.svg',
        currency: 'British pound'
    },
    {
        name: 'Korea (Republic of)',
        capital: 'Seoul',
        languages: ['Korean'],
        population: 50801405,
        flag: 'https://restcountries.eu/data/kor.svg',
        currency: 'South Korean won'
    },
    {
        name: 'South Sudan',
        capital: 'Juba',
        languages: ['English'],
        population: 12131000,
        flag: 'https://restcountries.eu/data/ssd.svg',
        currency: 'South Sudanese pound'
    },
    {
        name: 'Spain',
        capital: 'Madrid',
        languages: ['Spanish'],
        population: 46438422,
        flag: 'https://restcountries.eu/data/esp.svg',
        currency: 'Euro'
    },
    {
        name: 'Sri Lanka',
        capital: 'Colombo',
        languages: ['Sinhalese', 'Tamil'],
        population: 20966000,
        flag: 'https://restcountries.eu/data/lka.svg',
        currency: 'Sri Lankan rupee'
    },
    {
        name: 'Sudan',
        capital: 'Khartoum',
        languages: ['Arabic', 'English'],
        population: 39598700,
        flag: 'https://restcountries.eu/data/sdn.svg',
        currency: 'Sudanese pound'
    },
    {
        name: 'Suriname',
        capital: 'Paramaribo',
        languages: ['Dutch'],
        population: 541638,
        flag: 'https://restcountries.eu/data/sur.svg',
        currency: 'Surinamese dollar'
    },
    {
        name: 'Svalbard and Jan Mayen',
        capital: 'Longyearbyen',
        languages: ['Norwegian'],
        population: 2562,
        flag: 'https://restcountries.eu/data/sjm.svg',
        currency: 'Norwegian krone'
    },
    {
        name: 'Swaziland',
        capital: 'Lobamba',
        languages: ['English', 'Swati'],
        population: 1132657,
        flag: 'https://restcountries.eu/data/swz.svg',
        currency: 'Swazi lilangeni'
    },
    {
        name: 'Sweden',
        capital: 'Stockholm',
        languages: ['Swedish'],
        population: 9894888,
        flag: 'https://restcountries.eu/data/swe.svg',
        currency: 'Swedish krona'
    },
    {
        name: 'Switzerland',
        capital: 'Bern',
        languages: ['German', 'French', 'Italian'],
        population: 8341600,
        flag: 'https://restcountries.eu/data/che.svg',
        currency: 'Swiss franc'
    },
    {
        name: 'Syrian Arab Republic',
        capital: 'Damascus',
        languages: ['Arabic'],
        population: 18564000,
        flag: 'https://restcountries.eu/data/syr.svg',
        currency: 'Syrian pound'
    },
    {
        name: 'Taiwan',
        capital: 'Taipei',
        languages: ['Chinese'],
        population: 23503349,
        flag: 'https://restcountries.eu/data/twn.svg',
        currency: 'New Taiwan dollar'
    },
    {
        name: 'Tajikistan',
        capital: 'Dushanbe',
        languages: ['Tajik', 'Russian'],
        population: 8593600,
        flag: 'https://restcountries.eu/data/tjk.svg',
        currency: 'Tajikistani somoni'
    },
    {
        name: 'Tanzania, United Republic of',
        capital: 'Dodoma',
        languages: ['Swahili', 'English'],
        population: 55155000,
        flag: 'https://restcountries.eu/data/tza.svg',
        currency: 'Tanzanian shilling'
    },
    {
        name: 'Thailand',
        capital: 'Bangkok',
        languages: ['Thai'],
        population: 65327652,
        flag: 'https://restcountries.eu/data/tha.svg',
        currency: 'Thai baht'
    },
    {
        name: 'Timor-Leste',
        capital: 'Dili',
        languages: ['Portuguese'],
        population: 1167242,
        flag: 'https://restcountries.eu/data/tls.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Togo',
        capital: 'Lom??',
        languages: ['French'],
        population: 7143000,
        flag: 'https://restcountries.eu/data/tgo.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Tokelau',
        capital: 'Fakaofo',
        languages: ['English'],
        population: 1411,
        flag: 'https://restcountries.eu/data/tkl.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Tonga',
        capital: "Nuku'alofa",
        languages: ['English', 'Tonga (Tonga Islands)'],
        population: 103252,
        flag: 'https://restcountries.eu/data/ton.svg',
        currency: 'Tongan pa??anga'
    },
    {
        name: 'Trinidad and Tobago',
        capital: 'Port of Spain',
        languages: ['English'],
        population: 1349667,
        flag: 'https://restcountries.eu/data/tto.svg',
        currency: 'Trinidad and Tobago dollar'
    },
    {
        name: 'Tunisia',
        capital: 'Tunis',
        languages: ['Arabic'],
        population: 11154400,
        flag: 'https://restcountries.eu/data/tun.svg',
        currency: 'Tunisian dinar'
    },
    {
        name: 'Turkey',
        capital: 'Ankara',
        languages: ['Turkish'],
        population: 78741053,
        flag: 'https://restcountries.eu/data/tur.svg',
        currency: 'Turkish lira'
    },
    {
        name: 'Turkmenistan',
        capital: 'Ashgabat',
        languages: ['Turkmen', 'Russian'],
        population: 4751120,
        flag: 'https://restcountries.eu/data/tkm.svg',
        currency: 'Turkmenistan manat'
    },
    {
        name: 'Turks and Caicos Islands',
        capital: 'Cockburn Town',
        languages: ['English'],
        population: 31458,
        flag: 'https://restcountries.eu/data/tca.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Tuvalu',
        capital: 'Funafuti',
        languages: ['English'],
        population: 10640,
        flag: 'https://restcountries.eu/data/tuv.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Uganda',
        capital: 'Kampala',
        languages: ['English', 'Swahili'],
        population: 33860700,
        flag: 'https://restcountries.eu/data/uga.svg',
        currency: 'Ugandan shilling'
    },
    {
        name: 'Ukraine',
        capital: 'Kiev',
        languages: ['Ukrainian'],
        population: 42692393,
        flag: 'https://restcountries.eu/data/ukr.svg',
        currency: 'Ukrainian hryvnia'
    },
    {
        name: 'United Arab Emirates',
        capital: 'Abu Dhabi',
        languages: ['Arabic'],
        population: 9856000,
        flag: 'https://restcountries.eu/data/are.svg',
        currency: 'United Arab Emirates dirham'
    },
    {
        name: 'United Kingdom of Great Britain and Northern Ireland',
        capital: 'London',
        languages: ['English'],
        population: 65110000,
        flag: 'https://restcountries.eu/data/gbr.svg',
        currency: 'British pound'
    },
    {
        name: 'United States of America',
        capital: 'Washington, D.C.',
        languages: ['English'],
        population: 323947000,
        flag: 'https://restcountries.eu/data/usa.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Uruguay',
        capital: 'Montevideo',
        languages: ['Spanish'],
        population: 3480222,
        flag: 'https://restcountries.eu/data/ury.svg',
        currency: 'Uruguayan peso'
    },
    {
        name: 'Uzbekistan',
        capital: 'Tashkent',
        languages: ['Uzbek', 'Russian'],
        population: 31576400,
        flag: 'https://restcountries.eu/data/uzb.svg',
        currency: "Uzbekistani so'm"
    },
    {
        name: 'Vanuatu',
        capital: 'Port Vila',
        languages: ['Bislama', 'English', 'French'],
        population: 277500,
        flag: 'https://restcountries.eu/data/vut.svg',
        currency: 'Vanuatu vatu'
    },
    {
        name: 'Venezuela (Bolivarian Republic of)',
        capital: 'Caracas',
        languages: ['Spanish'],
        population: 31028700,
        flag: 'https://restcountries.eu/data/ven.svg',
        currency: 'Venezuelan bol??var'
    },
    {
        name: 'Viet Nam',
        capital: 'Hanoi',
        languages: ['Vietnamese'],
        population: 92700000,
        flag: 'https://restcountries.eu/data/vnm.svg',
        currency: 'Vietnamese ?????ng'
    },
    {
        name: 'Wallis and Futuna',
        capital: 'Mata-Utu',
        languages: ['French'],
        population: 11750,
        flag: 'https://restcountries.eu/data/wlf.svg',
        currency: 'CFP franc'
    },
    {
        name: 'Western Sahara',
        capital: 'El Aai??n',
        languages: ['Spanish'],
        population: 510713,
        flag: 'https://restcountries.eu/data/esh.svg',
        currency: 'Moroccan dirham'
    },
    {
        name: 'Yemen',
        capital: "Sana'a",
        languages: ['Arabic'],
        population: 27478000,
        flag: 'https://restcountries.eu/data/yem.svg',
        currency: 'Yemeni rial'
    },
    {
        name: 'Zambia',
        capital: 'Lusaka',
        languages: ['English'],
        population: 15933883,
        flag: 'https://restcountries.eu/data/zmb.svg',
        currency: 'Zambian kwacha'
    },
    {
        name: 'Zimbabwe',
        capital: 'Harare',
        languages: ['English', 'Shona', 'Northern Ndebele'],
        population: 14240168,
        flag: 'https://restcountries.eu/data/zwe.svg',
        currency: 'Botswana pula'
    }
]


// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population





countriesAllAndData.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})
console.log(countriesAllAndData)

countriesAllAndData.sort(function (a, b) {
    if (a.capital < b.capital) return -1
    if (a.capital > b.capital) return 1
    return 0
})

console.log(countriesAllAndData)


const sortPop = countriesAllAndData.sort(function (a, b) {
    if (a.population < b.population) return -1;
    if (a.population > b.population) return 1;
    return 0;
})
console.log(sortPop)




// 2.*** Use countries_data.js file create a function which create the ten most populated countries

const sortPopDescend = countriesAllAndData.sort((b, a) => {
    if (a.population < b.population) return -1
    if (a.population > b.population) return 1
    return 0
})

console.log(sortPopDescend)

const sliceTenOfCountry = sortPopDescend.slice(0, 10).map((n) => n)
console.log(sliceTenOfCountry)

// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const agesStatics = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


// Statistic Count =

let ii = agesStatics.length
console.log(`The count is ${ii}`)
// console.log(meedian)
// console.log(ii)

let sumAge = 0;
let agesStaticsSum = agesStatics.map((sum) => sumAge += sum)
let toNum = [];

// let forEachAgeStatics = agesStatics.map((n) => toNum += Math.max(n))
// console.log(toNum)
const cortAge = agesStatics.sort((a, b) => b - a)
let max = cortAge[0]
let min = cortAge[cortAge.length - 1]
let range = max - min;
let mean = sumAge / ii



console.log('The sum =' + ' ' + sumAge)
console.log('This max is' + ' ' + max)
console.log('The min is' + ' ' + min)
console.log('The range is' + ' ' + range)
console.log('The mean is' + ' ' + mean)

let lengthOfCor = cortAge.length
let r2 = Math.floor(lengthOfCor / 2)


if (lengthOfCor % 2 == 0) {
    console.log(cortAge[lengthOfCor / 2])
} else {
    console.log(`The median is ${cortAge[r2]} `)
}



// var empty = []
// i = 0
// max = 0
// while (i<list.length){

//    if (list[i]==list[i+1]){
//        empty = list[i] 
//    i += 1
//     }else{
//       i +=1
//       }

//  }
//  document.write(empty) 

// list = [1,2,3,4,5,6,7,7]
// counts = {}
// list.forEach(function(e) {
//   if(counts[e] === undefined) {
//     counts[e] = 0
//   }
//   counts[e] += 1
// })

counts = {}
cortAge.forEach(function (e) {
    if (counts[e] === undefined) {
        counts[e] = 0
    }
    counts[e] += 1
}
)

console.log(counts)
const variance = cortAge.map((n) => n - mean)
const varianceSq = variance.map((n) => n ** 2)
let sumSq = 0;
const sumVarianceSq = varianceSq.forEach((s) => sumSq += s)
console.log(sumSq)

let finalAnsForVariance = sumSq / ii
console.log('The Varaince is' + ' ' + finalAnsForVariance)

let standardDeviation = Math.sqrt(finalAnsForVariance);
console.log('The Standart Deviation is' + ' ' + standardDeviation)
// S^2 = \frac{\sum (x_i - \bar{x})^2}{n - 1}



const dis = cortAge.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
}, {})
console.log(dis)

const copys = Object.assign({}, countriesAllAndData)
console.log(copys)
let keysCountries = Object.keys(copys)
console.log(keysCountries)
const valueCountries = Object.values(copys)
console.log(valueCountries)











// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const obj = {}
countriesAll.map(c => {
    if (obj[c[0]]) {
        obj[c[0]] = obj[c[0]] + 1
    } else {
        obj[c[0]] = 1
    }
})
let maxx = 0
for (const c in obj) {
    if (obj[c] > maxx) {
        maxx = obj[c]
    }
}
for (const c in obj) {
    if (obj[c] == maxx) {
        console.log(c)
    }
}




// *** Exercise three number 2, Find the 10 most spoken languages:


//  Exercise three number 4, how to find the mode and also the frequency distribution




























// const score = scores.find((user) => user.score > 80)
// console.log(score)
// const getLanguages = countriesAllAndData.map((n) => n.languages)
// console.log(getLanguages)
// const getLanguagesCopy = Object.assign(getLanguages)
// const getValues = Object.values(getLanguagesCopy)
// const getValueJoin = getValues.join(' ')
// console.log(getValues)


const lang = []
countriesAllAndData.forEach((c) => {
    for (const l of c.languages) {
        const langExist = lang.find(lan => lan.country === l)
        const langExistIndex = lang.findIndex(lan => lan.country === l)
        if (langExist) {
            lang.splice(langExistIndex, 1, { ...langExist, count: langExist.count + 1 })
        } else {
            lang.push({ country: l, count: 1 })
        }
    }
})
// console.log(lang) 
lang.sort((b, a) => {
    if (a.count < b.count) return -1
    if (a.count > b.count) return 1
    return 0
})
// console.log(lang)

const zeroToTen = lang.slice(0, 10)
console.log(zeroToTen)