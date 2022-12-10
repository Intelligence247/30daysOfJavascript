//Link to reading => (https://javascript.info/try-catch)

// Error handling, "try...catch"

// The “try…catch” syntax
// The try...catch construct has two main blocks: try, and then catch:

// try {

//   // code...

// } catch (err) {

//   // error handling

// }

// How it works
// 1. First, the code in try {...} is executed.
// 2. If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.

// What i understood so far about so far is that...
// Try and catch doesnt add anything to our codes but rather it only function is to throw an error message when our codes are wrong whether in its syntax or other mistakes which might occur...
// Try and catch cannot work when it has syntax error, Note the try and catch will still function if the codes in it is wrong syntaxically... for it not to work the syntax error must occur and the try and catch syntax


// Also try and catch is synchronous 




// try {
//     setTimeout(function () {
//         noSuchVariable; // script will die here
//     }, 1000);
// } catch (err) {
//     console.log("won't work");
// }






// setTimeout(function () {
//     try {
//         noSuchVariable; // try...catch handles the error!
//     } catch (err) {
//         console.log("error is caught here!");

//     }
// }, 0);




// Error object
// When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:

try {
    nnbh
} catch (err) {
    console.log(err.name)
    console.log(err.stack)
    console.log(err.message)
    console.log(err)
}
let x = 200.23421
// console.log(x.Math.trunc)
// Math.trunc cuts out the decimal in a number



let json = "{ bad json }";

try {

    let user = JSON.parse(json); // <-- when an error occurs...
    console.log(user.name); // doesn't work

} catch (err) {
    // ...the execution jumps here
    console.log("Our apologies, the data has errors, we'll try to request it one more time.");
    console.log(err.name);
    console.log(err.message);
}


// Here we use the catch block only to show the message, but we can do much more: send a new network request, suggest an alternative to the visitor, send information about the error to a logging facility, … . All much better than just dying.

// Throwing our own Error 
let jsons = '{ "age": 30 }'; // incomplete data

try {

    let user = JSON.parse(jsons); // <-- no errors
    console.log(user.name); // no name!

} catch (err) {
    console.log("doesn't execute");
}

let test = { age: 200, name: 'Intelligence' }
console.log(test.age)
console.log(test.surname)
// The catch is not going to be executed here. Bcs the error there can not be detected by the system, Name does not only exist but for us it is still an error... *** Also from the new example i give above, surname does not exist in the object but it does not throw any error but in the console it will only print undefined, but absolutely not an error
// Here JSON.parse runs normally, but the absence of name is actually an error for us.
// To unify error handling, we’ll use the throw operator.

// "Throw" operator

// The throw operator generates an error

// The syntax
// throw <error object>

// JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.

let syn = new SyntaxError("SyntaxErrorr");
console.log(syn)
let ref = new ReferenceError("ReferenceErrorr")
console.log(ref)
let error = new Error("Things happen o_O")
console.log(error.name)
// This will print only the name which is "Error"
console.log(error.message)
// This will print the message which is "Things happen o_O"

try {
    JSON.parse("{ bad json o_O }");
} catch (err) {
    console.log(err.name); // SyntaxError
    console.log(err.message); // Unexpected token b in JSON at position 120
}


try {
    let obj = { age: 30, level: '100', course: 'Telecom' }
    if (!obj.name) {
        throw new SyntaxError("Incomplete data: no name")
    }
    console.log(obj.name)
} catch (err) {
    console.log('Object Error: ' + err.message)
}

// Rethrowing
try {
    userds = {/*...*/ }
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log('ReferenceError')
    }
}


// In the code below, we use rethrowing so that catch only handles SyntaxError:

let str = '{ "age": 30 }'; // incomplete data
try {

    let user = JSON.parse(str);

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    blabla(); // unexpected error

    console.log(user.name);

} catch (err) {

    if (err instanceof SyntaxError) {
        console.log("JSON Error: " + err.message);
    } else {
        throw err; // rethrow (*)
    }

}

function readData() {
    let json = '{ "age": 30 }';

    try {
        // ...
        blabla(); // error!
    } catch (err) {
        // ...
        if (!(err instanceof SyntaxError)) {
            throw err; // rethrow (don't know how to deal with it)
        }
    }
}

try {
    readData();
} catch (err) {
    console.log("External catch got: " + err); // caught it!
}

// Here readData only knows how to handle SyntaxError, while the outer try...catch knows how to handle everything.

// try...catch...finally

/* syntax
try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}
*/

try {
    console.log('try')
    if (confirm('Make an error ?')) BAD_CODE()

} catch (error) {
    console.log('catch')
} finally {
    console.log('finally')
}

// In this code if we confirm to make an erro then the try, catch and finally block of code is going to run, But if canceled the catch block of Code is not going to run

// One thing is finally will always run no matter what, If the code has an error or it doesn't... Except for syntax

// The finally clause is often used when we start doing something and want to finalize it in any case of outcome.
let num = +prompt("Enter a positive integer number?", 35)
let diff, result;
// diff = 'Abdullahi'
// result = 'Intelligence'
// console.log(diff, result)

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Must not be negative, and also an integer.");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
    result = fib(num);
} catch (err) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

console.log(result || "error occurred");
console.log(`execution took ${diff}ms`);


/* Variables are local inside try...catch...finally
Please note that result and diff variables in the code above are declared before try...catch.

Otherwise, if we declared let in try block, it would only be visible inside of it.*/


// finally and return
// The finally clause works for any exit from try...catch. That includes an explicit return.
// In the example below, there’s a return in try. In this case, finally is executed just before the control returns to the outer code.

function func() {

    try {
        return 1;

    } catch (err) {
        /* ... */
    } finally {
        console.log('finally');
    }
}

console.log(func());


// try...finally
// The try...finally construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized.

function func() {
    // start doing something that needs completion (like measurements)
    try {
        // ...
    } finally {
        // complete that thing even if all dies
    }
}

// In the code above, an error inside try always falls out, because there’s no catch. But finally works before the execution flow leaves the function.