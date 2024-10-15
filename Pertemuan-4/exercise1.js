function hitungBmi(berat, tinggi){
    let bmi = berat / (tinggi * tinggi)
    return bmi
}

let berat = 69;
let tinggi = 169;

let hasil = hitungBmi(berat, tinggi);
console.log("BMI adalah" + hasil);