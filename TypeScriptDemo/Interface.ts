// We can use ?to make optional vairable
// If we want to use interface/class in different files we need to export it
export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: User = { name: "Dinesh", id: 1, email: "" };

interface Employees extends User {
    salary: number;
}

let emp: Employees = { name: "Dinesh", id: 1, email: "", salary: 1000 };


export interface Login {
    login(): User;
}


// Below example is of object destructuring
let { name: userName, email: userLogin }: User = { name: "Dinesh", id: 1, email: "" };

// Array destructuring
let users: User[] = [{ name: "Dinesh", id: 1, email: "" }, { name: "Ram", id: 2, email: "" }];

let [user1, user2, ...restUsers]: User[] = [{ name: "Dinesh", id: 1, email: "" }, { name: "Ram", id: 2, email: "" }, { name: "Sham", id: 3, email: "" }, { name: "Jay", id: 4, email: "" }];

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter(user => user.id > 3);
console.log(result);

// Decoraters
// Ability to change the behaviour of class/method/property at runtime
// Decoraters are used internally by angular
// ex  @Component({}) -> These are above class declarations
// These are experimental features in typescript and in angular these are by default enabled


// ES Modules
// Importing/Export
// Package.json/TSCONFIG.json ->
// sourceMap: true (To debug angular/Typescript code), 
// outDir:"./Dist" (To generate output in seperate directory)
// noEmmit :true (No output file is created .js files)