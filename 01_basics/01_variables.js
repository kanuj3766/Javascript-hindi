const accountId = 748000
let accountEmail = "kanuj3766@gmail.com"
var accountPassword = "54321"
accountCity =  "Raipur"
let accountState;

// accountId = 2 // not allowed 
accountEmail = "hc@321.com"
accountPassword = "12345"
accountCity = "Patna"
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
