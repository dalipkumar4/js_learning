// Primitive 

// 7 types : string, Number, Boolean, Null, undefined, Symbol, BigInt, 

const score = 100
const scoreValue = 100.3

const isLoggenIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

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

// console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// HEAP: - when we stored something in heap  we get REFERENCE
// STACK: - when we stored something in stack then we get COPY


// Primitive value stored in stack
// Not Primitive values stored in heap

let myYoutubename = "dalipkumar"

let anothername = myYoutubename
anothername = "jainhopper"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = { // It will copy and to HEAP
    email: "dalip@gmail.com",
    upi: "dalip@ibl"
}

let userTwo = userOne

userTwo.email = "max@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);