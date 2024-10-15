// Java Object & COnditional
// Deklarasi Object
// Object Literal
let john = {
    firstName: "John", // Property & value
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function () {
        console.log("Hello my name is " + this.firstName);
    },
    addres: {
        street: "Jl. Arnold Mononutu",
        city: "Minahasa Utara",
        province: "Sulawesi Utara",
        postalCode: 95371,
    }
};
console.log(john)

// Mengakses pewpweru dalam object
// 1. Dor notation
console.log(john.firstName); //John
console.log(john.age); // 30
john.age = 31; // Ubah Nilai
console.log(john)
john.job = "Teacher";
console.log(john);
// 2. Bracket Notation
console.log(john["isMarried"]) // true
john["natioanality"] = "Indonesia" // Tambah properti baru

// Object Method
john.sayGreetings();

// Object Inside object
console.log(john.addres.city)

// Delete Property Object
delete john.grade;
console.log(john);

// JavaScript Conditional
// 1. if - else

// Jika temperature > 37 tampilkan cuaca panas
// else tampilkan cuaca dingin

temp = 34
if (temp >= 37) {
    console.log("Cuaca hari ini panas")
} else {
    console.log("Cuaca hari ini dingin")
}

// 2. if - else if - else

// Jika nilai  100 - 80 grade A
// Jika nilai 70 - 80 grade B
// Jika nilai 50 - 70 grade C
// Jika nilai < 50 grade D

let nilai = 85;
if (nilai >= 80 && nilai <=100){
    console.log("Grade A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("Grade B")
} else if (nilai >= 50 && nilai <= 70){
    console.log("Grade C")
} else {
    console.log("Grade D")
}

// Switch - case
// 1. Tampilkan Janauary
// 2. Tampilkan February
// 3. Tampilkan Maret
// :
// 12 Tampilkan Desember

let month = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("Maret")
        break;
    default:
        console.log("Not found");
        break;
}