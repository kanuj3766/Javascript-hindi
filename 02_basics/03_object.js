//There are 3 ways to create objects
// 1. By object literal
// 2. By Creating instance of object directly
// 3. By using an object constructor
const mySym = Symbol("key1")

const JsUser = {
    Name: "Anuj",
    "Full name": "Anuj kumar",
    [mySym]: "mykey1",
    age: 18,
    location:"Raipur",
    Email:"kanuj3766@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.Email);              // kanuj3766@gmail.com
console.log(JsUser["Full name"]);       // Anuj kumar
console.log(JsUser.Name);               // Anuj
console.log(JsUser.age);                // 18
console.log(JsUser.location);            // Raipur
console.log(JsUser.isLoggedIn);          // false
console.log(JsUser["Email"]);            // kanuj3766@gmail.com
console.log(JsUser[mySym]);              /** mykey1
                                             {
                                               Name: 'Anuj',
                                               'Full name': 'Anuj kumar',
                                                age: 18,
                                                location: 'Raipur',
                                                Email: 'kanuj3766@gmail.com',
                                                isLoggedIn: false,
                                                lastLoginDays: [ 'Monday', 'Saturday' ],
                                                [Symbol(key1)]: 'mykey1'
                                             }*/
                                            
 


JsUser.Email = "kanuj3766@gmail.com"
//Object.freeze(JsUser)
JsUser.Email = "kanuj3766@micro.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.Name}`);
}

console.log(JsUser.greeting());     // Hello js user
console.log(JsUser.greetingTwo());  // hello js user, Anuj