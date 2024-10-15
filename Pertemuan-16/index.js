// // //Asynchornous JS

// // //Syncrhonous -> SIngle thread
// // console.log("Proses 1");
// // console.log("Proses 2");
// // console.log("Proses 3");
// // console.log("Proses 4");

// // //Asynchronous -> nulti thred -> non blocking
// // //1 Parallel
// // setTimeout(() => {
// //     console.log("Proses 1");
// // }, 3000);
// // console.log("Proses 2");
// // setTimeout(() => {
// //     console.log("Proses 3");
// // }, 3000);
// // console.log("Proses 4");


// // //2. Cocurrent
// // setTimeout(() => {
// //     console.log("Proses 1");
// //     setTimeout(() =>{
// //         console.log("Proses 2");
// //         setTimeout(() =>{
// //             console.log("Proses 3");
// //             setTimeout(() =>{
// //                 console.log("Proses 4");
// //             }, 3000);
// //         }, 3000);
// //     }, 3000);
// // }, 3000);

// //Promise
// //Buat promise sederhana
// let condition = true;
// const newPromise = new Promise ((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

// //Pakai Promise
// //1. then - catch
// newPromise
//     .then((result) => result)
//     .then((result2) => console.log(result2))
//     .catch((error) => console.log(error));

// //2.Async - await
// //Harus dibuar dalam fungsi

// const consumePromise = async () => {
//     let result = await newPromise;
//     console.log(result);
// };

// consumePromise;

//Pakai Promise yang sudah ada
//1. Fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

(async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let json = await response.json();
    json.forEach(({name}) => console.log(name));
})

//2.Axios
axios
.get('https://jsonplaceholder.typicode.com/todos/1')
.then((result) => console.log(result.data));

(async () => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    result.data.forEach(({name})) => {
        console.log(name);
    });
})();