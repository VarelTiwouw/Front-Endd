// JavaScript Array
// Deklarasi Array
// // Cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// // Cara 2. kata kunci new
// // let numbers2

// // Array Length
// console.log(numbers.lenght); //5
// console.log(students.lenght);
// console.log(john.lenght);

// // Mengakses element/data tertentu didalam array
// // Melalui 
// console.log(numbers[2]);
// console.log(students[1]);
// console.log(john[2]);
// console.log(john[3][1]);

// Mengakses element/data terakhir dalam array
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers2[numbers2.leght - 1]);

// Array Method
let array = [1, 2, 3, 'hallo', false, true];
console.log(array);
// 1. toString
console.log(array.toString());
// 2. Join
console.log(array.join())
console.log(array.join(" "))
console.log(array.join("-"))
console.log(array.join("x"))
console.log(array.join("awok"))
// 3. pop
array.pop(); // hapus index terakhir
console.log(array);
// 4. push
array.push("Selamat Pagi");
console.log(array);
// 5. shift
array.shift();
console.log(array)
// 6. 