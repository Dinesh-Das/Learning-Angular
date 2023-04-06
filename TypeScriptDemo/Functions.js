"use strict";
// Named Functions
// keyword functionname(parameterlist) : returntype
function add(num1, num2) {
    return num1 + num2;
}
// Arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
// Function Expression
const mult = function (num1, num2) { return num1 * num2; };
// Optional parameters (c is optional parameter)
function mySum(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(mySum(10, 20));
console.log(mySum(10, 20, 30));
// Requried parameters (c is required parameter, if no value is passed default value will be taken)
function mySub(a, b, c = 10) {
    return a - b - c;
}
console.log(mySub(10, 20));
console.log(mySub(10, 20, 30));
// REST parameters
function add2(a, b, ...c) {
    return a + b + c.reduce((x, y) => x + y, 0);
}
let numbers = [1, 2, 3, 4, 5, 6];
console.log(add2(10, 20, ...numbers));
console.log(add2(10, 20, ...[6, 7, 8, 9, 0, 1]));
console.log(add2(10, 20, 12, 5, 3, 4, 1, 5));
// Generic Function
function getItem(items) {
    return new Array().concat(items);
}
let concatResult = getItem([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(concatResult);
let concatString = getItem(['a', 'b', 'c', 'd', 'e']);
console.log(concatString);
