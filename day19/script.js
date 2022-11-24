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
        count++
        return count
    }
    function praticeInner2() {
        count--
        return count
    }
    return {
        praticeInner: praticeInner(),
        praticeInner2: praticeInner2()
    }
}
const oneByOne = praticeOuter()
console.log(oneByOne.praticeInner)
console.log(oneByOne.praticeInner2)
console.log(oneByOne.praticeInner)
console.log(oneByOne.praticeInner2)



function outers() {
    let sum = 0
    function inner1() {
        sum += 900
        return sum
    }
    function inner2() {
        sum += 3
        return sum
    }
    function inner3() {
        sum--
        return sum
    }
    return {
        inner1: inner1(),
        inner2: inner2(),
        inner3: inner3()
    }
}

const toPrint = outers()
console.log(toPrint.inner1)
console.log(toPrint.inner2)
console.log(toPrint.inner3)

console.log(toPrint.inner1)
console.log(toPrint.inner2)
console.log(toPrint.inner3)