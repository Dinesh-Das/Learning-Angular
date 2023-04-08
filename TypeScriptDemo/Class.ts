// We can write business logics (Writing services/Components)
// Creating class in TS

import {Login,User} from "./Interface";
// import * as UserLogin from "./Interface";

interface Address {
    street:string;
    city:string;
    state:string;
    pin:string;
}

class Employee implements Login{
    // Defining properties

    #id!: number;   //We can use private keyword or # symbol to make properties private

    protected name!: string;

    address!: Address;

    // In typescript you can either have default constructor or parameterised constructor
    constructor(id:number,name:string,address:Address){
        this.#id=id;
        this.name=name;
        this.address=address;
    }
    login(): User {
        return {name:"John",id:1,email:""};
        // throw new Error("Method not implemented.");/
    }

    // Creating method
    getNameWithAddress():string{
        return `${this.name} stays at ${this.address}`;
    }

    // Static methods
    static getEmployeeCount():number{
        return 50;
    }

    // Getters
    get empId():number{
        return this.#id;
    }

    // Setter
    set empId(id:number){
        this.#id =id;
    }
}

// Instance of class
let jhon = new Employee(1,"Jhon",{street:"ABC",state:"Maharashtra",city:"Mumbai",pin:"40005"});

// jhon.id = 1;
// jhon.name = "John Shwitz";
// jhon.address = "Highway 76";
console.log(Employee.getEmployeeCount());
console.log(jhon);
console.log(jhon.empId); 

let address = jhon.getNameWithAddress();
console.log(address)


// Inheriting
class Manager extends Employee{
    constructor(id:number, name:string,address:Address){
        super(id,name,address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let mike = new Manager(2,"Mike",{street:"ABC",state:"Maharashtra",city:"Aurangabad",pin:"40005"});
console.log(mike.getNameWithAddress());