function sayMyname(){
    console.log('A');
    console.log('N');
    console.log('U');
    console.log('J');
    
}
sayMyname()           // output => A
                      //           N  
                      //           U
                      //           J
function addTwoNumber(b, c){
       let a = b + c
        return a

}

const a = addTwoNumber(5,9)
console.log("Result:", a);     //  output => 14



function loginUserMessage(username ="anu"){
    if(!username){
        console.log("please enter a name:");
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage("anuj ")); // anuj  just logged in 
console.log(loginUserMessage("anuj")); //  anuj  just logged in 




function calculateCartPrice(val1, val2, ...num1){
         return num1
}
console.log(calculateCartPrice(200,400,600,598,3568,5896));  // [ 600, 598, 3568, 5896 ]
console.log(calculateCartPrice(45,21,6));                    // [ 6 ]
console.log(calculateCartPrice(456, 123, 789, 963));           // [ 789, 963 ]


const user = {
    username: "ANUJ",
    price: 199


}
function handleObject(Anyobject){
    console.log(`Username is ${Anyobject.username} and price is ${Anyobject.price}`);  // Username is ANUJ and price is 199
}
//handleObject(user)   

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));                 // 400
console.log(returnSecondValue([200, 400, 500, 1000]));      // 400