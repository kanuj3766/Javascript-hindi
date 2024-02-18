const name = "Anuj kumar"
const repoCount = 50
//console.log(name + repoCount + " value"); // output => Anuj kumar50 value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // output => Hello my name is Anuj kumar and my repo count is 50

const gameName = new String('Anuj-kumar-com')
console.log(gameName[0]);                 // output => A
console.log(gameName.__proto__);         // output => {}
console.log(gameName.length);            // output => 14
console.log(gameName.toUpperCase());     // output => ANUJ-KUMAR-COM
console.log(gameName.charAt(2));         //output => u
console.log(gameName.indexOf('t'));      // output => -1

const newString = gameName.substring(0,4);
console.log(newString);                   // output => Anuj

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);                // output => blank

const newStringOne = "     Anuj     "
console.log(newStringOne);                 // output => Anuj
console.log(newStringOne.trim());

const url = "https://github.com/kanuj3766/Javascript-hindi"

console.log(url.replace('%20', '-')) //      output => https://github.com/kanuj3766/Javascript-hindi

console.log(url.includes('chandan')) // output => false

console.log(gameName.split('-'));    //  output => ["Anuj", "kumar", "com"]
