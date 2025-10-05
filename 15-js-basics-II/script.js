// function hoisting with name and body
// f1 = function() {
//     return 2;
// };

console.log(f1())  // 2
console.log(a)
console.log(a * 4)

function f1() {
    return 2;
}

var a = 4

if (true) {
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

const firstArr = [1, 2, 3];
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
// console.log("5" + 1);
// console.log(1 + "5");
// console.log("5" - 1);
// console.log(null == false)
// console.log(undefined == false)
// console.log([] == false)
// console.log(-0 == false)
// console.log("" == false)
// console.log([] == ![])  // [] is true, !true(![]) is false
// [] == false -> "" == false -> 0 == false -> true

// Truthy & Falsy Values
// console.log('Truthy and falsy values')
// console.log(!!undefined)
// console.log(!!null)
// console.log(!0)
// console.log(!!-0)
// console.log(!!NaN)
// console.log(!!"")
// console.log(!!0n)
// console.log(!![])
// console.log(!!{})
// console.log("Truthy == true")
// console.log("hello" == true)
// console.log({} == true)
// console.log([] == true)

// practice
// console.log(true + false) // 1 + 0 = 1
// console.log(null + 1) // 0 + 1 = 1

// NaN
// console.log(0/0)
// console.log(2 * "Hello")

// Undefined vs Null
let x;
console.log(x) // undefined

function base() {
    console.log('In a base')
    // return 2;
}

// function func(){
//     let value;
//     console.log(value)   // undefined
//     console.log(base())  // doesn't get returned value - undefined
// }
// func()

let object = {}
console.log(obj.property) // undefined

let arr = []
console.log(arr[2])  // undefined

console.log(null == false)
console.log(undefined == false)

console.log('5' == 5,
    false == 0,     // true → false is coerced to number 0
    true == 1,        // true → true is coerced to number 1
    '' == 0,          // true → empty string is coerced to number 0
    null == false,
    undefined == false)

// typeof
// console.log('typeof and instanceof')
// console.log(typeof function f(){})
// console.log(f1 instanceof Function)
// console.log(arr instanceof Array)
// console.log(12 instanceof Number)
// console.log("name" instanceof String)
// console.log(true instanceof Boolean)
// console.log(Symbol('a') instanceof Symbol)
// console.log(10000000000000000000000n instanceof BigInt)

if (document.all) {
    console.log('Hi')
} else {
    console.log('Hey')
}

console.log(Boolean({}))

if (-1) {
    console.log('True')
} else {
    console.log('False')
}

// Loops
// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

// while
// let j = 0;
// while (j < 11) {
//     if (j == 10) {
//         console.log('10 found')
//     }
//     j++;
// }

// Functions
// anonymous function
let func = function () {
    console.log('Func called');
}
func();

// arrow functions
let val1 = () => {
    console.log('Arrow function called');
}
val1();

// let myFunction = (a, b) => a * b;
// console.log(myFunction(2, 3));

// let hello = () => "Hello World!";
// console.log(hello())

// let f2 = (x, y) => { x * y } ;
// console.log(f2(2, 4))

// let f3 = (x, y) => {return x * y};
// console.log(f3(3, 4))

// function add(v1, v2) {
//     console.log(v1 + v2)
// }
// add() // NaN
// add(2)  // NaN

// rest operator
function abcd(...val){
    console.log(val)  // [1, 2, 3, 4, 5, 6, 7]
}

abcd(1,2,3,4,5,6,7);

const myObj = {
    id: 1,
    name: 'Falak',
    rollNo: 24,
    class: 'X'
}
const {id, name, ...other} = myObj;
console.log(other);  // {rollNo: 24, class: 'X'}

// first order functions
function xyz(val){
    val();
}   

xyz(function (){
    console.log('First order functions')
})

// higher order functions
function hof(){
    let closure = 10;
    return function(){
        console.log('Higher order functions')
        console.log('closure', closure)
    }
}

hof()();

// pure and impure functions
let variable = 5;

// pure function
function pure(){
    console.log(variable)
}
pure()

// impure function
function impure(){
    variable++;
    console.log(variable)
}
impure()

