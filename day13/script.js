// Console Object Methods
// In this section, we will cover about console and console object methods. Absolute beginners usually do not know which to use: console.log(), document.write() or document.getElementById.
// We use console object methods to show output on the browser console and we use document.write to show output on the browser document(view port). Both methods used only for testing and debugging purposes. The console method is the most popular testing and debugging tool on the browser. We use document.getElementById() when we like to interact with DOM try using JavaScript. We will cover DOM in another section.
// In addition to the famous, console.log() method, the console provides other more methods.

// console.log()
// We use console.log() to show output on the browser console. We can substitute values and also we can style the logging out put using %c.
// showing output
console.log('Welcome to 30 Days of JavaScript')

// Substitution
console.log('%d %s of JavaScript', '30', 'Days')


console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'font-size:24px;color:green;background-color:red;border:2px solid green',
    '',
    'color:red',
    '',
    'color:yellow'
) // log output green red and yellow text

console.log(
    '%cMy Name is%c\n%cUsman Abdullahi\nBabatunde.%c %cBut you can simply call me%c\n%c"INTELLIGENCE"%c',
    'color:pink;font-size:1.5rem',
    '',
    'color:blue;font-size:2rem',
    '',
    'color:yellow;font-size:1.5rem',
    '',
    'color:green;font-size:2rem',
    '')

// console.warn()
// We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices. Copy the following code and paste it on browser console to see warning messages.

console.warn('This is a warning')
console.warn('You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!')
console.warn('Warning is different from error')

// console.error()
// The console.error() method shows an error messages.

console.error('This is an error message')
console.error('We all make mistakes')

// console.table()
// The console.table() method display data as a table on the console.Displays tabular data as a table.The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

// Let us first start with a simple array. The code below displays a table with two columns. An index column to display the index and value column to display the names
const names = ['Asabeneh', 'Brook', 'David', 'John', 'Usman', 'Abdullahi', 'Babatunde', 'Intelligence']
console.table(names)

// Let us also check the result of an object. This creates table with two columns:an index column containing the keys and a value column contain the values of the object.



const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)

//   Check the rest of the examples by copying and paste on the browser console.
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)


const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)

// console.time()
// Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.


const countrie = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countrie.length; i++) {
    console.log(countrie[i][0], countrie[i][1])
}
console.timeEnd('Regular for loop')

console.time('my for of loop')
for (const [name, capital] of countrie) {
    console.log(name, capital)
}
console.timeEnd('my for of loop')

console.time('my for loop')
for (let i = 0; i < countrie.length; i += 1) {
    console.log(countrie[i][0], countrie[i][1])
}
console.timeEnd('my for loop')

console.time('my forEach loop')
countrie.forEach(([name, capital]) => { console.log(name, capital) })
console.timeEnd('my forEach loop')

console.log('30 Days of JavaScript is trending on GitHub')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')
console.info('Then I replied: "We are waiting for the challenge to be released"')

// console.assert()
// The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.

console.assert(false, 'You are not welcomed')
console.assert(3 > -9000, 'You are Highly welcome') //this will not print in the console because the assertion is true

for (let i = 0; i <= 10; i = i + 1) { // i++, i+=1, i=i+1
    let errorMessage = `${i} is not even`
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

// console.group()
// The console.group() can help to group different log groups. Copy the following code and paste it on browser console to the groups.

// console.group('Names')
console.group('Asabeneh names and mine')
console.log(names)
console.groupEnd()


console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

// console.count()
const mine = ('My namw is usman abcullahi babarinde')
console.count(mine)
console.count(mine)
console.count(mine)

const func = () => {
    console.count('Function has been called')
}
func()
func()
func()

//   console.clear()
// The console.clear() cleans the browser console.
// console.clear(mine)
// this will clean all not only the mine

