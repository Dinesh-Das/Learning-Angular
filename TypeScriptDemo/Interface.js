"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "Dinesh", id: 1, email: "" };
let emp = { name: "Dinesh", id: 1, email: "", salary: 1000 };
// Below example is of object destructuring
let { name: userName, email: userLogin } = { name: "Dinesh", id: 1, email: "" };
// Array destructuring
let users = [{ name: "Dinesh", id: 1, email: "" }, { name: "Ram", id: 2, email: "" }];
let [user1, user2, ...restUsers] = [{ name: "Dinesh", id: 1, email: "" }, { name: "Ram", id: 2, email: "" }, { name: "Sham", id: 3, email: "" }, { name: "Jay", id: 4, email: "" }];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
