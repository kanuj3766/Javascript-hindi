var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER:", a);  // INNNER: 10
}
//console.log(a);               // 300
//console.log(b);
//console.log(c);               // 300


function one(){
    const username ="Anuj"

    function two(){
       // const website = "youtube"
        console.log(username);              // Anuj


    }
    console.log(website);
    two()
}
// one()

if(true){
    const username = "anuj"
    if (username === "anuj") {
        const website = "youtube"    // website is not define
        console.log(username + website);   // anujyoutube
    }
   // console.log(website);      // username is not define

}
//console.log(username);    // error - username is not define



/*=========================interesting======================= */

console.log(addone(5));

function addone(num){
    return num + 1              // 6
}

addTwo(5)                     //  ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}