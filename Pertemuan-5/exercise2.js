// ubah coding di bawah ini tentang BMI
// dengan menggunakan:

// 1. IIFE
// let output=(function(berat, tinggi) {
//     let bmi = berat / (tinggi * tinggi);
//     return "BMI adalah= " + bmi;
// })(65, 1.60);

// // 2. Callback
// function hitungBMI(berat, tinggi, callback) {
//     let output = berat / (tinggi * tinggi)
//     return callback(output)
// }

// let output = hitungBMI(65, 1.60, function(output) {
//     return "BMI kamu= " + output
// })
// console.log(output);