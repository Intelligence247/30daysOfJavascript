// 1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Abdullahi';
let lastName = 'Usman';
let country = 'Nigeria';
let city = "Ilorin";
let age = 80;
let isMarried = true;
let year2 = 2021;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year2)
// 2.Check if type of '10' is equal to 10

let strin10 = '10';
let nonString10 = 10;
console.log(strin10 === nonString10);
// 3.Check if parseInt('9.8') is equal to 10
let gravityExercise = parseInt('9.8');
console.log(gravityExercise === nonString10);

// 4. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
let highNumber = 20;
let lowerNumber = 19;
let hightNumber2 = 20;
let stringNumber = '20';
// for truthies
console.log(highNumber === hightNumber2);
console.log(lowerNumber < hightNumber2);
console.log(highNumber >= lowerNumber)

// for falsy values

console.log(stringNumber === highNumber);
console.log(lowerNumber > stringNumber);
console.log(highNumber != hightNumber2)

// 5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3    true
// 4 >= 3   true
// 4 < 3    false
// 4 <= 3   true x false
// 4 == 4   true
// 4 === 4  true
// 4 != 4   false
// 4 !== 4  true x false
// 4 != '4' false
// 4 == '4' true
// 4 === '4' false

console.log(`question five starts below`);
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
// Find the length of python and jargon and make a falsy comparison statement.
let firstLength = 'python';
let secondLength = 'jargon';
console.log(firstLength.length !== secondLength.length);


// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12     true
// 4 > 3 && 10 > 12     false
// 4 > 3 || 10 < 12     true
// 4 > 3 || 10 > 12     true
// !(4 > 3)             false
// !(4 < 3)             true
// !(false)             true
// !(4 > 3 && 10 < 12)  false
// !(4 > 3 && 10 > 12)  true
// !(4 === '4')         true
console.log('question 6 starts here')
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
// There is no 'on' in both dragon and python
console.log(!(firstLength.includes('on'), secondLength.includes('on')));

// 7. Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
console.log('task number seven starts here');
let today = new Date;
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(today.getSeconds(1578092201341));

let past = new Date('1970-01-01');
let present = new Date;
let difference = present - past;
console.log(difference)
// or
console.log(Date.now())


// Exercises: Level 2
// 1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = 12;
// let height = 30;
let base = prompt('Enter base', 'Type here');
let height = prompt('Enter height', 'Type here');
console.log(base * height);

// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

let side_a = Number(prompt('Enter side a'));
let side_b = Number(prompt('Enter side b'));
let side_c = Number(prompt('Enter side c'));
// console.log(typeof side_a)
console.log(side_a + side_b + side_c);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt('Enter the length of the object'));
let width = Number(prompt('Enter the width of the object'));
console.log('The area =', length * width);
console.log('The Perimeter =', 2 * (length + width))

// 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radiusExercise3 = Number(prompt('Enter the radius of a circle to get the area'));
console.log('area =', Math.PI * (radiusExercise3 ** 2))

// 5.Calculate the slope, x - intercept and y - intercept of y = 2x - 2
// let y_Intercept = Number(prompt('Enter Y-intercept'));
// let x_Intercept = Number(prompt('Enter X-intercept'));
let x_Intercept = 3;
let y_Intercept = 4;
let answerIntercept = y_Intercept = 2 * x_Intercept - 2;
console.log('Slope =', answerIntercept)

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let y1 = Number(prompt('Enter Y1'));
// let x1 = Number(prompt('Enter X1'));
// let y2 = Number(prompt('Enter Y2'));
// let x2 = Number(prompt('Enter X2'));
let y1 = 2;
let x1 = 2;
let y2 = 6;
let x2 = 10;
let answerTwoPoints = (y2 - y1) / (x2 - x1);
console.log('Slope =', answerTwoPoints);

//7. Compare the slope of above two questions.
let comparism = answerIntercept >= answerTwoPoints;
console.log(comparism)

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = -3;
let calculation = x ** 2 + 6 * (x) + 9;
console.log(calculation);

// 9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hoursExercise = Number(prompt('Enter hours'));
let rate_per_hour = Number(prompt('Enter rate per hour'));
console.log('Your weekly earning is', hoursExercise * rate_per_hour)

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "Abdullahi";
if (myName.length > 7) {
    console.log('My name is long')
} else {
    console.log('My name is short')
}

// 11. Compare your first name length and your family name length and you should get this output.
let myFamilyName = "oloka";
let myFirstname = myName;
if (myFirstname.length > myFamilyName.length) {
    console.log(`My Firstname, ${myName} is longer than my family name, ${myFamilyName}`)
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you., this means it should be in the console

let myAge = 250;
let yourAge = 25;
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`);
}

// 13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let yearOld = Number(prompt('How old are you'));
if (yearOld >= 18) {
    console.log(`You are ${yearOld}. You are old enough to drive`)
} else {
    console.log(`You are ${yearOld}. You will be allowed to drive after ${18 - yearOld} years.`)
}

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
let enterNumberOfYears = prompt('Enter number of years you live');
let yearSeconds = (enterNumberOfYears * 365 * 24 * 60 * 60) + (enterNumberOfYears / 4 * (24 * 60 * 60));
console.log(yearSeconds);


// 15.Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
let humanDate = new Date();
let humanHours = humanDate.getHours();
let humanMinutes = humanDate.getMinutes();
let humanDay = humanDate.getDate();
let humanMonth = humanDate.getMonth() + 1;
let humanYear = humanDate.getFullYear();

console.log(`${humanYear}-${humanMonth}-${humanDay}-${humanHours}-${humanMinutes}`);
console.log(`${humanDay}-${humanMonth}-${humanYear}-${humanHours}-${humanMinutes}`);
console.log(`${humanDay}/${humanMonth}-${humanYear}/${humanHours}/${humanMinutes}`);



// Exercises :Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05 
console.log('Exercise: Level 3 starts from here');
humanMonth = humanMonth.toString().length < 2 ? `${humanMonth}` : humanMonth;
console.log(`${humanYear}-${humanMonth}-${humanDay} ${humanHours}:${humanMinutes}`);








// question 1 calculating seconds since january 1 1970
// Slope how the answers shoulb suppose to be
// Exercise 3 number one, i want to ask if theres an alternative way of adding 0, without adding it there
