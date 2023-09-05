"use strict";

// console.log("Samir bey gecikmeyin")

//alert("Allah sefa versin Huseyn bey")

//var, let, const

// var name = "Samir";

// let surname = "Qehremanov";

// const address = "Sumqayit";

//let phoneNumber = "5646513135"

// let name = "Samir";

// let isMarried = true;

// let age = 30;

// let address =undefined;

// let phone = null;

// console.log(typeof name);
// console.log(typeof isMarried);
// console.log(typeof age);
// console.log(typeof address);
// console.log(typeof phone);

// let num1 = 100;

// let num2 = 2;

// let result = num1 % num2;

//  console.log(result);

// let count = 5;
// count ++;
// console.log(count);

// let age = 100;

// let surname = null;
// console.log(age / surname);

// alert( null === undefined)

// let num1 ="100";

// let num2 = 100;

// if (num1 == num2) {
//     console.log("true");
// }else{
//     console.log("false");
// }

// let age =20;

// let resul = age > 30 ? "Boyukdur": "kicikdir";

// console.log(result);

// let surname = 66;

// let result = surname ?? "XXX";

// console.log(result);

// let dayOfweek = "Sunday"

// switch (dayOfweek) {
//     case "Sunday":
//         console.log("This is a Sunday");
//         break;
//     case "Monday":
//         console.log("This is a Monday");
//         break;
//     case "Tuesday":
//         console.log("This is a Tuesday");
//         break;

//     default:
//         console.log("Not found day");
//         break;
// }

// let user = {
//     name: "Surac",
//     surname: "Ismayilov",
//     age: 23
// }

// console.log(user.name + " " + user.name);

// let result = `${user.name} - ${user.surname}`;

// console.log(result);

// let name = "test";

// console.log(typeof(name) == "string");

// let datas = ["Surac", "Ismayil",  "66", 55, 100, true];

// console.log(datas [datas.length - 1])

// datas.forEach((element,i) => {
//     console.log(element + "/" +i);
//  });

// for (let i = 0; i < datas.length; i++) {
//     if (!isNaN(datas[i]) && typeof(datas[i]) != "boolean" && typeof(datas[i]) != "string") {
//         let result = datas[i] + 30;
//         console.log(result);
//     }
// }

// let name = "Surac";

// name+= "Ismayilov";
// console.log(name);




 let stu1 = {
     name: "Surac",
     surname: "Ismayilov",
 }

 let stu2 = {
     name: "Pervin",
     surname: "Mirzeyev",
 }

 let stu3 = {
     name: "Fidan",
     surname: "Bashirova",
 }

 let stu4 = {
     name: "Kubra",
     surname: "Memmedova",
 }


 let students = [stu1, stu2, stu3, stu4,];



 document.querySelector(".btn").addEventListener("click",function(){
    students.forEach(student => {
        let fullName = `${student.name} ${student.surname}`;
   
           let h1 = document.createElement("h1");
   
           h1.innerText = fullName;
   
           document.querySelector(".test").append(h1);
    });

    this.style.display = "none"
   
 })


 