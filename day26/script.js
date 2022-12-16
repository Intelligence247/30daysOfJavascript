// function myFunction() {
// Declare variables
// let input, filter, ul, li, a, i, txtValue;
// input = document.getElementById('myInput');
// filter = input.value.toLowerCase();
// ul = document.getElementById("myUL");
// li = ul.getElementsByTagName('li');

// Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toLowerCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }






const countries = [
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
const countries2 = countries.map((n) => n.toUpperCase())
console.log(countries2)

const section = document.querySelector('#countries')
const input = document.querySelector('input')
const startWord = document.querySelector('#startWord')
const anyWord = document.querySelector('#anyWord')
// input.textContent = 'Abdullahi'
const describeKey = document.querySelector('#describeKey')
let span1 = document.createElement('span')
describeKey.appendChild(span1)
span1.style.fontStyle = 'italic'
span1.style.color = 'red'
let span2 = document.createElement('span')
describeKey.appendChild(span2)
span2.style.color = 'green'

startWord.addEventListener('click', e => {

    // console.log(input.value)
    section.innerHTML = ''
    let length = []
    for (let i = 0; i < countries2.length; i++) {
        let p
        p = document.createElement('p')
        section.appendChild(p)
        if (countries2[i].startsWith(input.value.toUpperCase()) && (input.value.length >= 1)) {
            p.style.background = 'linear-gradient(0deg, rgba(37, 40, 43, 0.8), rgba(34, 0, 255, 0.3)), url(./media/map.jpg)'
            p.style.width = '10rem'
            p.style.height = '10rem'
            p.style.display = 'flex'
            p.style.justifyContent = 'center'
            p.style.alignItems = 'center'
            p.style.backgroundPosition = 'center'
            p.style.color = 'white'
            p.style.backgroundSize = 'cover'
            p.textContent = countries2[i]
            length.push(countries2[i])
            // describeKey.textContent = countries[i].length
            // input.addEventListener('input', e => {
            // })
            let ss = span1.textContent = input.value
            let ss2 = span2.textContent = length.length

            describeKey.textContent = 'Countries starting with' + ' ' + ss + ' ' + 'are' + ' ' + ss2


        } else if (input.value.length == 0 || input.value == null || input.value == '') {
            p.textContent = ''
            p.style.display = 'none'
        } else {
            p.textContent = ''
            p.style.display = 'none'
        }


    }
    console.log(length.length)



})




anyWord.addEventListener('click', e => {
    // console.log(input.value)
    section.innerHTML = ''
    let length = []
    for (let i = 0; i < countries2.length; i++) {
        let p
        p = document.createElement('p')
        section.appendChild(p)
        if (countries2[i].includes(input.value.toUpperCase())) {
            p.style.background = 'linear-gradient(0deg, rgba(37, 40, 43, 0.8), rgba(34, 0, 255, 0.3)), url(./media/map.jpg)'
            p.style.width = '10rem'
            p.style.height = '10rem'
            p.style.display = 'flex'
            p.style.justifyContent = 'center'
            p.style.alignItems = 'center'
            p.style.backgroundPosition = 'center'
            p.style.color = 'white'
            p.style.backgroundSize = 'cover'
            p.textContent = countries2[i]
            length.push(countries2[i])
            describeKey.textContent = 'Countries containing' + ' ' + input.value.toUpperCase() + ' ' + 'are' + ' ' + length.length
        } else {
            p.textContent = ''
            p.style.display = 'none'
        }

        if (input.value.length == 0) {
            p.textContent = ''
            p.style.display = 'none'
        }

    }

    // input.addEventListener('input', e => { })

    let ss = span1.textContent = input.value
    let ss2 = span2.textContent = length.length
    describeKey.textContent = 'Countries containing' + ' ' + ss + ' ' + 'are' + ' ' + ss2


})


const arrow = document.querySelector('.arrow')
arrow.style.cursor = 'pointer'
const imgarr = document.querySelector('#downup')
let reversedarr = countries2.reverse()

// imgarr.src = ''

arrow.addEventListener('click', (e) => {
    section.innerHTML = ''
    for (const c of reversedarr) {
        imgarr.src = './media/arrow-up-fill.png'
        p = document.createElement('p')
        section.appendChild(p)
        p.style.background = 'linear-gradient(0deg, rgba(37, 40, 43, 0.8), rgba(34, 0, 255, 0.3)), url(./media/map.jpg)'
        p.style.width = '10rem'
        p.style.height = '10rem'
        p.style.display = 'flex'
        p.style.justifyContent = 'center'
        p.style.alignItems = 'center'
        p.style.backgroundPosition = 'center'
        p.style.color = 'white'
        p.style.backgroundSize = 'cover'
        p.textContent = c
    }
})