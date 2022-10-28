//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age2 = prompt('Enter your age');
if (age2 >= 18) {
    console.log('You are old enough to drive');
} else {
    console.log(`You are left with ${18 - age2} years to drive.`)
}

// // 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 25;
let yourAge = prompt('Enter your age');
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`);
} else if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me`);
} else if (myAge === yourAge) {
    console.log(`We are age mate`);
} else {
    console.log(`${yourAge} is not a number`);
}
// 3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.

let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}
// 4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let anyNumber = prompt('Enter a number');
let even = anyNumber % 2;
if (even === 0) {
    console.log(`The remainder is = ${even}, therefore ${anyNumber} is an even number `)
} else {
    console.log(`The remainder is = ${even}, therefore ${anyNumber} is not an even number`)
}

// Exercise: Level 2
// 1.Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

let mark = 99;
if (mark >= 80 && mark <= 100) {
    console.log('A')
} else if (mark >= 70 && mark <= 79) {
    console.log('B');
} else if (mark >= 60 && mark <= 69) {
    console.log('C');
} else if (mark >= 50 && mark <= 59) {
    console.log('D');
} else {
    console.log("F")
}
// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let monthPrompt = prompt('Enter Month to know the season');
let month = monthPrompt.toLocaleLowerCase();
switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log(Autumn);
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('Winter');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('Spring');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('Summer');
        break;
    default:
        console.log(`${month} is not a month`);

}

// 3.Check if a day is weekend day or a working day. Your script will take day as an input.
let day2 = prompt('What is the day today?');
let dayCase = day2.toLocaleLowerCase();
switch (dayCase) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${dayCase} is a working day`)
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${dayCase} is a weekend`)
        break;
    default:
        console.log(`${dayCase} is not a day`)
}

// Exercises: Level 3
// 1.Write a program which tells the number of days in a month.
// January, March, May, July, August, October, and December. 31
// february 28
// September, April, June, and November. 30

let monthDays = 'february';
switch (monthDays) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthDays} has 31 days`);
        break;
    case 'september':
    case 'april':
    case 'june':
    case 'november':
        console.log(`${monthDays} has 30 days`);
        break;
    case 'february':
        console.log(`${monthDays} has 28 days`);
        break;
    default:
        console.log(`${monthDays} is not a month`)
        break;

}
let monthDays2 = 'february';
switch (monthDays2) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthDays2} has 31 days`);
        break;
    case 'september':
    case 'april':
    case 'june':
    case 'november':
        console.log(`${monthDays2} has 30 days`);
        break;
    case 'february':
        console.log(`${monthDays} has 29 days`);
        break;
    default:
        console.log(`${monthDays2} is not a month`)
        break;

}
// let leap = 'february';
// let leapDay = leap







// case insensitivity