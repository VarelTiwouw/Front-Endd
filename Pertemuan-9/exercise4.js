// // let people = ["Greg", "Mary", "Devon", "James"];

// // // //1
// // // for (let i = 0; i < people.length; i++) {
// // //   console.log(people[i]);
// // // }

// // // // //2
// // // people.forEach(function (item, index) {
// // //   console.log(index);
// // //   console.log(item);
// // // });

// // //3
// // people.shift();
// // console.log(people);

// // //4
// // people.pop();
// // console.log(people);

// // //5
// // people.unshift("Matt");
// // console.log(people);

// // //6
// // people.push("Varel");
// // console.log(people);

// // // //7
// // // for (let i = 0; i < people.length; i++) {
// // //   console.log(people[i]);

// // //   if (people[i] === "Mary") {
// // //     break;
// // //   }
// // // }

// // // //8
// // // let newPeople = people.slice(1, people.length - 1);
// // // console.log(newPeople);

// // //9
// // people.splice(2, 1, "Elizabeth", "Artie");
// // console.log(people);

// // //10
// // let withBob = people.concat("Bob");
// // console.log(withBob);

// // Exercise 2

// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
//   };
  
//   //1
//   console.log("1. Output setelah menambah Go:");
//   programming.languages.push("Go");
//   console.log(programming.languages);
  
//   //2.
//   console.log("2. Output setelah mengubah difficulty menjadi 7:");
//   programming["difficulty"] = 7;
//   console.log(programming.difficulty);
  
//   //3.
//   console.log("3. Output setelah menghapus jokes:");
//   delete programming.jokes;
//   console.log(programming);
  
//   //4.
//   console.log("4. Output setelah menambah isFun:");
//   programming.isFun = true;
//   console.log(programming);
  
//   //5.
//   console.log("5. Output dari map dengan index:");
//   let mappedLanguages = programming.languages.map(function(language, index) {
//     return index + " - " + language;
//   });
//   console.log(mappedLanguages);
  
//   console.log("SELESAI");
