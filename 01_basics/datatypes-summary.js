/*
 Primitive
 7 Types of primitive data types
 1. String
 2. Number
 3. Boolean
 4. null 
 5. undefined
 6. Symbol
 7. BigInt
 */
 

 const score = 100
 const scoreValue = 100.5;


 const isLoggedIn = false
 const outsideTemp = null

 let userEmail;

 const id = Symbol("123")
 const anotherId = Symbol('123')

 console.log(id === anotherId)  // output => false
 console.log(typeof anotherId)  // output => Symbol

 // const bigNumber = 32644566551588931n


 // Reference (Non - primitive)
 //there are three type 
 //1. Array
 //2. function
 //3. Object

 
const heroes = ["Ironman", "Batman", "Captain", "Doctor", "Saktiman"];
let myObj ={
    name:"Anuj kumar",
    age: 22
}



const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heroes) // output => object
console.log(typeof myFunction) // output => function
