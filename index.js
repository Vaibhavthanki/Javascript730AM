console.log("Hello, World From External File 1234567890!");

// Data Types in JavaScript

// 1. Primitive Data Types

let str = "Hello, World"; // String
let num = 42; // Number "42" --> string
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("id"); // Symbol
let sym2 = Symbol("id"); // Symbol
let bigInt = 9007199254741991n; // BigInt

console.log(
  typeof num,
  "check16",
  typeof typeof num,
  typeof typeof undef,
  typeof nul,
);

// 2. Non-Primitive Data Types

let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function () {
  return "Hello from function";
};

console.log(typeof obj, typeof arr, typeof func);

if (typeof nul === "string") {
  console.log("str is a string");
} else {
  console.log("str is not a string");
}

// Variable Declarations

var a = 10; // Function-scoped
var a = 20; // Redeclaration allowed with var
a = 30; // Reassignment allowed

let b = 1000; // Block-scoped
// let b = 20; // Redeclaration not allowed with let
b = 30; // Reassignment allowed

if (b < 1000) {
  console.log("Minor");
  b = 990; // Reassignment allowed
} else {
  console.log("Adult");
  b = 1010; // Reassignment allowed
}

console.log("Value of a using var:", a); // 20
