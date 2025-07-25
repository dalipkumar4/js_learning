const user = {
    username: "dalip",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "max"
// user.welcomeMessage()


// console.log(this) // Current context would be empty


// function chai(){
//     let username = "dalip"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "dalip"
//     console.log(this.username);
// }


const chai = () => {
    let username = "dalip"
    console.log(this);
}


// chai();


// Basic arrow function
// const addTwo = (num1, num2) => { 
//     return num1 + num2 // Explicit return
// }


// Implicit return function
// const addTwo = (num1, num2) =>  num1 + num2


// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "dalip"})

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()