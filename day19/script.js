// Closure
// JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

function outerFuncton() {
    let count = 0;
    function innerFuncton() {
        count++
        return count
    }
    return innerFuncton
}
const func = outerFuncton()
console.log(func())
console.log(func())
console.log(func())

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


const outer = () => {
    let count = 0
    const inner = () => {
        count++
        return count
    }
    return inner
}

const con = outer()
console.log(con())
console.log(con())
console.log(con())



function praticeOuter() {
    let count = 0
    function praticeInner() {
        count--
        return count
    }
    return praticeInner()
}
console.log(praticeOuter())
console.log(praticeOuter())