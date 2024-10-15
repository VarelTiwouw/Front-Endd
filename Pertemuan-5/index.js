// IIFE dan Callback
// // 1. IIFE (Immediately Invoked Function Expression)
// ( function () {
//     console.log("Hello World");
// })();
// // With params & args & return value
// let output = ( function (fullName) {
//     return "Hello " + fullName;
// })("John Doe");

// console.log(output);

// 2. Callback
// No params & args & retrun value
function sayHello(callBack){
    callBack();
}

sayHello(function () {
    console.log("Hello World");
});

// With params & args & retrun value
function sayHello(callBack) {
    // logic
    let output = callBack("John Doe")
    return output;
}

let output = sayHello(function (fullName) {
    return "Hello " + fullName;
});
console.log(output);