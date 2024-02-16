const accountId = 748000
let accountEmail = "kanuj3766@gmail.com" //  Variables declared by let are only available inside the block where they're defined.
var accountPassword = "54321" // Variables declared by var are available throughout the function in which they're declared.
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
/*
comment- it can be used to add single as well as multi-line comment so it is more convenient.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
