// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// 2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function linear(a, b, c, ya, yb, yc, y = 1, x = 1) {
    let x2 = (-(b * y) - c) / a;
    let y2 = (-(ya * x) - yc) / yb;
    return `{x = ${x2}, y = ${y2}}`
}
console.log(linear(10, 8, 60, 5, 7, 3))

function lin(y, c, b, a) {
    let x = (b * y + c) / -a;
    return x;
}

console.log(lin(9, 11, 2, 13))
function allmi(a, b, c, f = 4, t = 2) {
    // let sqrt = Math.sqrt((b ** t - f * a * c));
    let almighty = (-b + (Math.sqrt((b * b) - (f * a * c)))) / (t * a);
    let almighty2 = (-b - (Math.sqrt((b * b) - (f * a * c)))) / (t * a);

    return `{X1 = ${almighty}, X2 = ${almighty2}}`
}
console.log(allmi(1, 4, 4))
console.log(allmi(1, -1, -2))
console.log(allmi(7, 8, 2))
// console.log(allmi(prompt('a'), prompt('b'), prompt('c')))
function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));




function fac(n) {
    let constant = 1;
    if (n == 1 && n == 0) {
        return constant;
    } else {
        for (let i = n; i >= 1; i--) {
            constant = constant * i

        }
    }
    return constant;
}
console.log(fac(4))






let characters = "abcdefghijklmnopqrstuvwzyz1234567890";
let id = "";
for (let i = 0; i <= 7; i++) {
    const num = Math.floor(Math.random() * characters.length);
    id = id + characters.charAt(num);
}
console.log(id);



// 12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItemss() {
    console.log(arguments)
}

sumOfArrayItemss(1, 23, 34)



function tests() {
    let x = 0;
    let s = 0;
    let n = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(x += arguments[i])
        if (i == Number) {
            console.log(i)
        }
    }
    return x

}
console.log(tests(1, 2, 3, 4));





function fact(n) {
    let x = 1;
    if (n == 1 && n == 0) {
        return x;
    } else {
        for (let i = n; i >= 1; i--) {
            x = x * i
        }

    }
    return x;
}
console.log(fact(4))













const facto = (nth) => {
    let consts = 1;
    if (nth == 1 && nth == 0) {
        return consts
    }
    for (let i = nth; i >= 1; i--) {
        consts = consts * i;
    }
    return consts;
}
console.log(facto(9))








