"use strict";
let lname;
lname = "Dinesh";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
let dob = "34";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Dinesh", "Dev", "Raj"];
let numList; //Generics
numList = [1, 2, 3, 4, 5];
// let newNum =numList[5]
let results = numList.filter((num) => num > 2);
console.log(results);
let num = numList.find((num) => num === 2);
console.log(num);
let exists = empList.find((emp) => emp === "Dinesh");
console.log(exists);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 1 /* Color.Green */;
console.log(c);
// Tuples 
let swapNumb;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumb = swapNumbers(10, 20);
swapNumb[0];
swapNumb[1];
// ANY (Do not use) (Because of TypeSafety)
let dept;
dept = "IT";
dept = 10;
