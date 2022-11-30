/*Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
Even numbers background is green
Odd numbers background is yellow
Prime numbers background is red*/
let countries = [
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
let h1
h1 = document.createElement('h1')
h1.textContent = 'Number Generator'
document.body.appendChild(h1)
h1.style.width = 'max-content'
h1.style.margin = 'auto'
h1.style.marginBottom = '0.1rem'
h1.style.fontSize = '24px'

let h2
h2 = document.createElement('h2')
h2.textContent = '30DaysOfJavaScript:DOM Day 2'
document.body.appendChild(h2)
h2.style.width = 'max-content'
h2.style.margin = 'auto'
h2.style.fontSize = '13px'
h2.style.textDecoration = 'underline'
h2.style.fontWeight = '100'

for (let i = 0; i < 1; i++) {
    let h3 = document.createElement('h3')
    h3.textContent = 'Author: Asabeneh Yetayeh'
    document.body.appendChild(h3)
    h3.style.width = 'max-content'
    h3.style.margin = 'auto'
    h3.style.fontSize = '10px'
    h3.style.textDecoration = 'underline'
    h3.style.fontWeight = '100'
}




let mainEl = document.createElement('main')
mainEl.style.display = "flex"
mainEl.style.flexDirection = 'row'
mainEl.style.flexWrap = 'wrap'
mainEl.style.width = '27rem'
mainEl.style.margin = 'auto'
mainEl.style.fontSize = '1.5rem'
mainEl.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji'
mainEl.style.marginTop = '2rem'
mainEl.style.marginBlock = '2rem'
document.body.appendChild(mainEl)

//Another code for prime starts here
const prime = (n) => {
    const x = Math.abs(n)
    if (x < 2) return false
    if (x == 2) return true
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false
        }
    }
    return true
}
// console.log(prime(71))


let generateNum
for (let i = 0; i <= 101; i++) {
    generateNum = document.createElement('div')
    generateNum.textContent = i
    mainEl.appendChild(generateNum)
    generateNum.style.width = '4.5rem'
    generateNum.style.height = '3rem'
    generateNum.style.backgroundColor = 'blue'
    generateNum.style.display = 'flex'
    generateNum.style.justifyContent = 'center'
    generateNum.style.alignItems = 'center'
    generateNum.style.border = '1px solid white'
    generateNum.style.color = "white"
    if (i % 2 == 0) {
        generateNum.style.backgroundColor = 'green'
    } else if (prime(i)) {
        generateNum.style.backgroundColor = 'red'
    } else if (i % 2 == 1) {
        generateNum.style.backgroundColor = 'yellow'
    }
}



// Exercises: Level 2
// Use the countries array to display all the countries.See the design
let world
world = document.createElement('h1')
world.textContent = 'WORLD COUNTRIES LIST'
document.body.appendChild(world)
world.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji'
world.style.width = 'max-content'
world.style.margin = 'auto'
world.style.fontSize = '1.2rem'
world.style.letterSpacing = '0.6rem'
world.style.marginTop = '5rem'
let total
total = document.createElement('h2')
total.textContent = 'Total Number of countries: 193'
document.body.appendChild(total)
total.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji'
total.style.width = 'max-content'
total.style.margin = 'auto'
total.style.fontSize = '0.7rem'

let day2
day2 = document.createElement('h2')
day2.textContent = '30DaysOfJavaScript:DOM Day 2'
document.body.appendChild(day2)
day2.style.width = 'max-content'
day2.style.margin = 'auto'
day2.style.fontSize = '0.5rem'
day2.style.fontWeight = '600'


let h3 = document.createElement('h3')
h3.textContent = 'Author: Asabeneh Yetayeh'
document.body.appendChild(h3)
h3.style.width = 'max-content'
h3.style.margin = 'auto'
h3.style.fontSize = '0.5rem'
h3.style.fontWeight = '600'
h3.style.marginBottom = '2rem'

let sectEl = document.createElement('section')
document.body.appendChild(sectEl)
sectEl.style.display = 'flex'
sectEl.style.width = '32rem'
sectEl.style.flexWrap = 'wrap'
sectEl.style.margin = 'auto'
sectEl.style.gap = '0.4rem'
sectEl.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji'


let xx;
for (let i = 0; i < countries.length; i++) {
    xx = document.createElement('p')
    xx.textContent = countries[i]
    sectEl.appendChild(xx)
    xx.style.width = '5rem'
    xx.style.height = '6rem'
    xx.style.fontSize = '8px'
    xx.style.display = 'flex'
    xx.style.justifyContent = 'center'
    xx.style.alignItems = 'center'
    xx.style.fontWeight = 550
    xx.style.border = '0.1px solid #c1c1c1'
}




















// const isPrime = (xx) => {
//     let x = Math.abs(xx)
//     if (x == 0 || x == 1) return false
//     if (x == 2) return true
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(2))
// for (let i = 0; i >= -100; i--) {
//     if (isPrime(i))
//         console.log(i)
// }
// .flat() Method can be used to print element of array of array into a single array