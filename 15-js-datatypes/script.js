// function hoisting with name and body
// f1 = function() {
//     return 2;
// };

console.log(f1())  // 2
console.log(a)
console.log(a * 4)

function f1(){
    return 2;
}
 
var a = 4

if(true){
    var a = 10;
    let b = 20;
}
console.log(a) // 10
// console.log(b) // reference error

const person = { name: 'krushna' }
person.name = 'krish'
console.log(person)
// person = {}

// solution
const people = { name: 'arjun' }
Object.freeze(people);
people.name = 'parth'
console.log(people);

// Data types

// Symbol
let u1 = Symbol('uid')
let u2 = Symbol('uid')

console.log(u1 === u2) // false

let obj = {
    uid: 1,
    name: 'Raj',
    rollNo: 24
};

// Symbol is key
let newUid = Symbol('uid');  // uid is description(name added in object) and newUid is Symbol

newUid.description = "newDescUid"; // doesn't work
obj[newUid] = "007"; // adding newUid in object as secret key with value 007
console.log(obj); // {uid: 1, name: 'Raj', rollNo: 24, Symbol(uid): '007'}
obj[newUid] = "009" // value can be changed 

newUid = Symbol('new description'); // creates new
obj[newUid] = "description value"

console.log(obj); // {uid: 1, name: 'Raj', rollNo: 24, Symbol(uid): '007', Symbol(secret key): 'secret'}
console.log(Object.keys(obj));  // ['uid', 'name', 'rollNo']

// BigInt

let number = 9007199254740991 // MAX_SAFE_INTEGER
console.log(number + 2)  // error in precision 9007199254740992

let num = 9007199254740991n;  // bigint type 
// console.log(num + 2);  // error can't mix other type with BigInt
console.log(num + 2n); // 9007199254740993

// Arrays

const firstArr = [1,2,3];
const secondArr = firstArr;
console.log(secondArr)

secondArr[2] = 4;
console.log(firstArr)

// Objects

const firstObj = {
    "name": "Sundar"
}

const secondObj = firstObj;
console.log(secondObj)

secondObj.name = "Sundari"
console.log(firstObj)

// Dynamic Typing
let z = 10;
console.log(z, typeof z)
z = true
console.log(z, typeof z)
z = "string"
console.log(z, typeof z)
z = null
console.log(z, typeof z)

// Type Coercion
// Implicit Coercion
console.log("5" + 1);
console.log(1 + "5");
console.log("5" - 1);

// Truthy & Falsy Values
console.log(!!undefined)
console.log(!!null)
console.log(!0)
console.log(!!-0)
console.log(!!NaN)
console.log(!!"")
console.log(!!0n)
console.log(!![])
console.log(!!{})

// practice
console.log(true + false) // 1 + 0 = 1
console.log(null + 1) // 0 + 1 = 1

// NaN
console.log(0/0)
console.log(2 * "Hello")