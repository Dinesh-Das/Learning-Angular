"use strict";
// We can write business logics (Writing services/Components)
// Creating class in TS
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    // In typescript you can either have default constructor or parameterised constructor
    constructor(id, name, address) {
        // Defining properties
        _Employee_id.set(this, void 0); //We can use private keyword or # symbol to make properties private
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    // Creating method
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    // Static methods
    static getEmployeeCount() {
        return 50;
    }
    // Getters
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    // Setter
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
// Instance of class
let jhon = new Employee(1, "Jhon", "Highway 76");
// jhon.id = 1;
// jhon.name = "John Shwitz";
// jhon.address = "Highway 76";
console.log(Employee.getEmployeeCount());
console.log(jhon);
console.log(jhon.empId);
let address = jhon.getNameWithAddress();
console.log(address);
// Inheriting
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let mike = new Manager(2, "Mike", "Alphabet road");
console.log(mike.getNameWithAddress());
