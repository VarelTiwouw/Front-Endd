// JavaScript Function

// Cara 1. Function Declaration
// Fungsi yang berdiri sendiri

// function greetings1(){
//     console.log("Hello World");
// }

// greetings1(); // Function Call(Memanggil Fungsi)

// // Cara 2. Function Expression
// let greetings2 = function(){
//     console.log("Hellow World");
// };
// greetings2();

// // Parameter & Argument
// //                  parameter
// function greetings3(fullName) {
//     return "Hello" + fullName;
// }
// //                       argument
// let output = greetings3(" John Doe");
// console.log(output);

// // Cara 2
// let greetings4 = function (fullName) {
//     return "Hello" + fullName;
// }
// let output2 = greetings4(" John Doe");
// console.log(output2);

// Global dan Lokal

let x = 10; // Global

function foo() {
    let y = 20; // Local
    console.log(x); //10
    console.log(y); //20
    if(c < y) {
        let z = 30;
        console.log(z); //30
    }
    // console.log(z); //error
}

console.log(x); //10
// console.log(y); //error

foo();