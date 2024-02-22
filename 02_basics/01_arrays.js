//Array
const array = [0, 1, 2, 3, 4, 5, 6,]
const myheros = ["batman", "saktiman", "Ironman", "Thor"]
const array2 = new Array(1, 2, 3, 4, 5)
console.log(myheros);       //  [ 'batman', 'saktiman', 'Ironman', 'Thor' ]
console.log(array2);        //   [ 1, 2, 3, 4, 5 ]
console.log(array);        /*  [
                                0, 1, 2, 3,
                                4, 5, 6
                               ] */
console.log(array[1]);     //  1

/*********************Array method************** */
/*
//array.push(9)
//console.log(array);  // output => [
                           0, 1, 2, 3,
                           4, 5, 6, 9
                           ]
                           

array.push(8)
console.log(array); // output =>    [
                            0, 1, 2, 3, 4,
                            5, 6, 9, 8
                           ]
                           

array.pop(5)
console.log(array);   //output => [
                          0, 1, 2, 3,
                          4, 5, 6, 9
                         ]
                         

 
array.pop()            
console.log(array);                             // output => [
                                                      0, 1, 2, 3,
                                                      4, 5, 6
                                                     ] 
                                                    
array.unshift(9);
console.log(array);                         // output =>  [
                                             //              9, 0, 1, 2,
                                              //             3, 4, 5, 6
                                              //            ]

array.shift()
console.log(array);           // output =>         [
                                        //           0, 1, 2, 3,
                                          //          4, 5, 6
                                            //    ]

console.log(array.includes(9));    // false
console.log(array.indexOf(3));     // 3

const newArr = array.join()
console.log(array);                // [
                                   //    0, 1, 2, 3,
                                   //    4, 5, 6
                                     // ]
console.log(newArr);//  0,1,2,3,4,5,6
*/


/************slice & splice ****************/
/*
console.log("A",array);
const myn1 = array.slice(1,3)
console.log(myn1);               // [1, 2]


console.log("B", array);           // B [
                                         0, 1, 2, 3,
                                         4, 5, 6
                                        ]
                                        

const myn2 = array.splice(1,3)    
console.log("C", array);       //  C [0, 4, 5, 6]
console.log(myn2);           // [1, 2, 3]
*/
