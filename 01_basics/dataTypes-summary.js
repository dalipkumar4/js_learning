// Primitive 

// 7 types : string, Number, Boolean, Null, undefined, Symbol, BigInt, 

const score = 100
const scoreValue = 100.3

const isLoggenIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2451535253355323525n



// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["shaktimaan", "naagraj", "doga"];

let myObj = {
    name: "dalip",
    age: 18, 
}

const myFunction = function() {
    console.log("Hello Dalip");
}

console.log(typeof myFunction)