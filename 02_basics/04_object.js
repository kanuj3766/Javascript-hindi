//const tinderUser =new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name =  "anuj"
tinderUser.isLoggedIn = false
//console.log(tinderUser);     // output => { id: '123abc', name: 'anuj', isLoggedIn: false }


const regularUser = {
    email: "kanuj3766@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Anuj",
            lastname: "kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);  // output=> Anuj

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
const obj4 = {obj1,obj2}
console.log(obj4);         // output =>  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const obj5 =Object.assign({}, obj1, obj2, obj3)
console.log(obj5);        // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj6 = {...obj1, ...obj2}
console.log(obj6);             // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]
users[1].email
console.log(tinderUser);                    // { id: '123abc', name: 'anuj', isLoggedIn: false }
console.log(Object.keys(tinderUser));      //  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));   // [ '123abc', 'anuj', false ]
console.log(Object.entries(tinderUser));  //  [ [ 'id', '123abc' ], [ 'name', 'anuj' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true


const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "anuj"
}
course.courseInstructor
const {courseInstructor: instructor} = course  
//console.log(courseInstructor);
console.log(instructor);            // anuj
/*
{
    "name": "Anuj",
    "coursename": "js in hindi",
     "price": "free"
}


[
    {},
    {},
    {}
]
*/