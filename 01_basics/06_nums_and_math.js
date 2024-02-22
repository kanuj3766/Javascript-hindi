/*const score = 500
//console.log(score);                   // 500
const balance = new Number(300)
//console.log(balance);                    // [Number: 300]
//console.log(balance.toString().length);  // 3
//console.log(balance.toFixed(1))          //300.0
// console.log(balance.toPrecision());       //300
//console.log(balance.toPrecision(1));       // 3e+2
// console.log(balance.toExponential());      //3e+2
*/

/*
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));       // 123.9
console.log(otherNumber.toExponential());     //1.238966e+2
console.log(otherNumber.toFixed());          //124
console.log(otherNumber.valueOf());         //123.8966
console.log(otherNumber.toString());       //123.8966
console.log(otherNumber.toFixed());       //124
*/
/*
const hundreds = 100000000
console.log(hundreds.toLocaleString());         //100,000,000
console.log(hundreds.toLocaleString('en-In'));  //10,00,00,000
console.log(hundreds.toString());               //1000000000
*/
/************************MATHS************************ */

/*
console.log(Math);                    // Object [Math] {}
console.log(Math.abs(-4));            // 4
console.log(Math.round(4.6));         // 5
console.log(Math.ceil(4.2));          // 5
console.log(Math.floor(4.9));         // 4
console.log(Math.min(4, 3, 6, 8));    // 3
console.log(Math.max(4, 3, 6, 8));    // 8
console.log(Math.pow(2,3));           // 8
*/
console.log(Math.random());         // random value < 1
console.log(Math.random()*10 + 1);  // random value b/w 1 to 9 in decimal
console.log(Math.floor(Math.random()*10) + 1); // random value b/w 1 to 9 in without decimal

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min) // random value b/w 10 to 20