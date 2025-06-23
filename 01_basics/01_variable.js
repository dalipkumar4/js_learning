const accountId = 144553
let accountEmail = "dalipkumar@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi" // possible but not recommended 
let accountState;

// accountId = 2 // not allowed 
 
accountEmail = "excel@.com"
accountPassword = "212122121"
accountCity = "Georgia"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 