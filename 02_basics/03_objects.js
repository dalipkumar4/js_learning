// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "dalip",
    "fullName": "dalipkumar",
    [mySym]: "mykey1",
    age: 18,
    loation: "Delhi",
    email: "dalip@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym])


jsUser.email = "me@gmail.com"
// Object.freeze(jsUser) // no one change the object cause object is locked
jsUser.email = "you@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this for same object reference
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());