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
try {
    setTimeout(function () {
        noSuchVariable; // script will die here
    }, 1000);
} catch (err) {
    console.log("won't work");
}



setTimeout(function () {
    try {
        noSuchVariable; // try...catch handles the error!
    } catch (err) {
        console.log("error is caught here!");

    }
}, 1000);

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
    alert(user.name); // doesn't work

} catch (err) {
    // ...the execution jumps here
    alert("Our apologies, the data has errors, we'll try to request it one more time.");
    alert(err.name);
    console.log(err.message);
}


// Here we use the catch block only to show the message, but we can do much more: send a new network request, suggest an alternative to the visitor, send information about the error to a logging facility, … . All much better than just dying.
