// Exercises: Level 1
// 1.Declare a function fullName and it print out your full name.
console.log(['Exercise Starts here'])

function fullName() {
    let names = `Usman Abdullahi Babatunde`;
    return names;
}
console.log(fullName())

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    const space = " ";
    let myName = firstName + space + lastName;
    return myName;
}
console.log(fullName('Usman', 'Abdullahi'))

// 3.Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(param1, param2) {
    let sum = param1 + param2;
    return sum;
}
console.log(addNumbers(789, 80))

// 4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
console.log(areaOfRectangle(34, 24))

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter
}
console.log(perimeterOfRectangle(21, 23))

// 6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(90, 40, 29))

// 7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = (radius) => {
    let circleArea = Math.PI * radius ** 2;
    return circleArea;
}
console.log(areaOfCircle(90))

// 8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (r) => {
    const circumference = 2 * Math.PI * r;
    return circumference;
}
console.log(circumOfCircle(19))

// 9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.


function density(mass, volume = 23) {
    let calc = mass / volume;
    return calc;
}
console.log(density(240))


const speed = (distance, time) => {
    let velocity = distance / time + 'm/s';
    return velocity;
}
console.log(speed(900, 34))

// 11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity = 9.8) {
    let calc = mass * gravity + '\t' + 'N';
    return calc;
}
console.log(weight(431));

// 12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (oC) => {
    let calc = oC * (9 / 5) + 32;
    return calc;
}
console.log(convertCelsiusToFahrenheit(9))


// 13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// *The same groups apply to both men and women.
// *Underweight: BMI is less than 18.5
// *Normal weight: BMI is 18.5 to 24.9
// *Overweight: BMI is 25 to 29.9
// *Obese: BMI is 30 or more

function bmi(weight, height) {
    let answerBMI = weight / (height ** 2);
    if (answerBMI < 18.5) {
        console.log('Underweight: BMI is less than 18.5')
    } else if (answerBMI >= 18.5 && answerBMI <= 24.9) {
        console.log('Normal weight: BMI is 18.5 to 24.9')
    } else if (answerBMI >= 25 && answerBMI <= 29.9) {
        console.log('Overweight: BMI is 25 to 29.9')
    } else if (answerBMI >= 30) {
        console.log('Obese: BMI is 30 or more')
    } else {
        console.log("You have either made a mistake or the brower is not functioning properly")
    }
    return answerBMI;
}
console.log(bmi(1030, 6))


// 14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = month => {
    let answer = month;
    switch (answer) {
        case 'january':
        case 'febuary':
        case 'march':
            console.log(`'${month}' is an 'Autumn' season`);
            break;
        case 'april':
        case 'may':
        case 'june':
            console.log(`'${month}' is a 'Winter' season`);
            break;
        case 'july':
        case 'august':
        case 'september':
            console.log(`'${month}' is a 'Spring' season`);
            break;
        case 'october':
        case 'november':
        case 'december':
            console.log(`'${month}' is a 'Summer' season`);
            break;
        default:
            console.log(`'${month}' is not a month`)
    }
    return answer;
}
console.log(checkSeason('october'))

// 15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(param1, param2, param3) {
    if (param1 > param2 && param1 > param3) {
        return param1;
    } else if (param2 > param1 && param2 > param3) {
        return param2
    } else if (param3 > param1 && param3 > param2) {
        return param3
    }
}
console.log(findMax(23, 45, 56))
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0


// Exercises: Level 2

console.log(['Exercises: Level 2 starts here'])

// 1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
    let x = 'x';
    let solve = x + a ** 2
    return solve;
}
console.log(solveLinEquation(2))























































// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };