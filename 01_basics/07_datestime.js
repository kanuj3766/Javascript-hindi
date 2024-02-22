/*
let myDate = new Date()

console.log(myDate.toString());          // current date and time ->  Thu Feb 22 2024  07:18:39 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())       // Thu Feb 22 2024
console.log(myDate.toLocaleString());    //  2/22/2024, 7:18:39 AM
console.log(typeof myDate);              // object


let myCreatedDate = new Date(23023, 0, 23);
//let CreatedDate = new Date(2023, 0, 23, 5, 3);
//let myDate = new Date("23-14-2024");
//let myCreateDate = new Date("01-14-2023");
//console.log(myCreatedDate.toLocaleString());  //  1/23/23023, 12:00:00 AM
//console.log(CreatedDate.toLocaleString());    //  1/23/2023, 5:03:00 AM
//console.log(myDate.toLocaleString());         //  Invalid Date
//console.log(myCreateDate.toLocaleString());   //  1/14/2023, 12:00:00 AM


let myTimeStamp =Date.now()
console.log(myTimeStamp);                   // 1708587569033  
console.log(myCreatedDate.getTime());       // 664370380800000   (in milisec)
console.log(Math.floor(Date.now()/1000));   // 1708587569
*/

let newDate = new Date()
console.log(newDate)                    // 2024-02-22T07:47:06.356Z
console.log(newDate.getMonth() + 1);    //2
console.log(newDate.getDay());          //4
console.log(newDate.getHours());       //7
console.log(newDate.getFullYear());    //2024
console.log(newDate.getMilliseconds());  // 356
console.log(newDate.getTime());          //1708588026356



`${newDate.getDate()} and the time`
newDate.toLocaleString('default',{weekday:"long",
})