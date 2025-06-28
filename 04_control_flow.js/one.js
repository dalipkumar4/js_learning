// if
// const isUserLoggedIn = true
// const temperature = 41

// if ( temperature === 41 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Executed");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`Use power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // shorthand if else statement

// if(balance < 500) {
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( isUserLoggedIn && debitCard && 2==3){ // both statement should be true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle|| loggedInFromEmail ) {
    console.log("user logged in");
}