function syMyName() {
    console.log("D");
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("p");
}


// syMyName()


// function addTwoNumbers(number1, number2){ // variable we're giving is parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4); // value we're giving is argument  

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;\
    return number1 + number2
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username) {
        console.log("Please enter a username");
        return 

    }
    return ` ${username} just logged in`
}

// console.log(loginUserMessage("Dalip"))
// console.log(loginUserMessage())



function calculateCartPrice(val1, val2, ...num1){
    return num1
}


// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "dalip",
    price: 199
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 500, 1000]))