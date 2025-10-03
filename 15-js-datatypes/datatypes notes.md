## Datatypes in Js

### `Bad practice`
```js
a = 12;  // not a good practice

console.log(a);
console.log(typeof a);  // number
```

### `Hoisting`
- Moving declarations of variables and functions to the top of code before compilation phase before code gets executed.
- Moves declaration not initialization.
- `var` variables are hoisted and initialized to undefined.
- `let` and `const` are hoisted but reside in TDZ until its declaration made, preventing access before initialization.
- With `functions`, both function name and body get hoisted.
```js
// function hoisting with name and body
// f1 = function() {
//     return 2;
// };

console.log(f1())  // 2

function f1(){
    return 2;
}
```

### `Temporal Dead Zone`
- Time from starting scope till the line where variable is declared and initialized.

### 1.`var`
- ES5 feature, should not be used.
- Can be redeclared and reassigned.
```js
// var declaration and initialization
var a = 12;  // global scoped as js engine converts whole code as function
var a = 13;

a = 16; // reassigned
```
- Function scoped.
```js
// function scoped
function f1(){
    if(true){
        var a = 10;
    }
    console.log(a); // still can access a=10
}

f1();
console.log(a) // can't access a
```
- Temporal Dead Zone
```js
// hoisting
// var a = undefined
console.log(a)  // undefined
console.log(a * 4)  // NaN

var a = 12;
// a = 12
```
- Added in window.

![alt text](image.png)

- Leaks memory.
```js
if(true){
    var a = 10;
    let b = 20;
}
console.log(a) // 10
console.log(b) // reference error
```

### 2. `let`
- ES6 feature.
- Can't be redeclared but can be reassigned.
```js
// let declaration and initialization
let a = 12;
// let a = 13;  // error: can't redeclare

a = 16; // reassigned
```
- Block (braces) scoped.
```js
function f1(){
    if(true){
        let a = 10;
        console.log(a);  // 10
    }
    let a = 20;
    console.log(a); // 20
}

f1();
console.log(a) // error: not defined
```
- Temporal Dead Zone
```js
// Temporal Dead Zone + Hoisting
// let b = undefined; // let is hoisted but not initialized, can't access until initialization

console.log(a)  // error: a is not defined
console.log(b) // error: can't access b before initialization (as its in TDZ)

// till this b will have TDZ
let b = 12;
```

### 3. `const`
- ES6 feature.
- Can't be redeclared and reassigned.
```js
// const declaration and initialization
const a;  // not allowed
a = 16;

const b = 12;
const b = 16; // error: can't redeclare & reassign
```
- Block (braces) scoped.
```js
const a = 20;
function f1(){
    const a = 10;
    console.log(a);  // 10
}
console.log(a); // 20
f1();
```
- Temporal Dead Zone
```js
// Temporal Dead Zone + Hoisting
// const b = undefined; // const is hoisted but not initialized, can't access until initialization

console.log(a)  // error: a is not defined
console.log(b) // error: can't access b before initialization (as its in TDZ)

// till this b will have TDZ
const b = 12;
```

### `Note`
- Const allows to change object properties.
```js
const person = { name: 'krushna' }
person.name = 'krish' // allowed to change contents but not the reference (address like pointing to something else)
console.log(person)
person = {} // but can't reassign
```
- Solution
```js
const people = { name: 'arjun' }
Object.freeze(people); // will prevent any modification
people.name = 'parth' // not give error
console.log(people) // { name: 'arjun' }
```

### `Datatypes`

### 1. `Primitive`
- Data types which can be copied as separate and real value.

#### a. `String`
```js
let name = "John"
let surname = 'John'
let username = `John`
```

#### b. `Number`
```js
let num1 = 12
let num2 = -99
let num3 = 12.4
```

#### c. `Boolean`
```js
let val1 = true
let val2 = false
```

#### d. `Null`
- Data type which has absence of value.
```js
let val = null
```

#### e. `Undefined`
- Data type with no assigned value (default).
```js
let val // undefined
```

#### f. `Symbol`
- A unique immutable data type.
- Used to not override keys of any libraries that you're extending.
```js
let u1 = Symbol('uid')
let u2 = Symbol('uid')

console.log(u1 === u2) // false

let obj = {
    uid: 1,
    name: 'Raj',
    rollNo: 24
};

let newUid = Symbol('uid');  // uid is description(name added in object) and newUid is Symbol

newUid.description = "newDescUid"; // doesn't work
obj[newUid] = "007"; // adding newUid in object as secret key with value 007
console.log(obj); // {uid: 1, name: 'Raj', rollNo: 24, Symbol(uid): '007'}
obj[newUid] = "009" // value can be changed 

newUid = Symbol('new description'); // creates new
obj[newUid] = "description value"

console.log(obj); // {uid: 1, name: 'Raj', rollNo: 24, Symbol(uid): '009', Symbol(secret key): 'secret'}
console.log(Object.keys(obj));  // ['uid', 'name', 'rollNo']
```

#### g. `BigInt`
- To store value more than MAX_SAFE_INTEGER and let number work properly with precision like adding some number to it.
```js
let number = 9007199254740991 // MAX_SAFE_INTEGER
console.log(number + 2)  // error in precision 9007199254740992

let num = 9007199254740991n;  // bigint type 
// console.log(num + 2);  // error can't mix other type with BigInt
console.log(num + 2n); // 9007199254740993
```

### 2. `Reference`
- Data types which can be copied as reference not as real value.

#### a. `Arrays`
```js
const firstArr = [1,2,3];
const secondArr = firstArr;
console.log(secondArr)  // [1,2,3]

secondArr[2] = 4;
console.log(firstArr) // [1,2,4]
```

#### b. `Objects`
```js
const firstObj = {
    "name": "Sundar"
}

const secondObj = firstObj;
console.log(secondObj) // {name: 'Sundar'}

secondObj.name = "Sundari"
console.log(firstObj) // {name: 'Sundari'}
```

## `Dynamic Typing`
- JavaScript is dynamic typed language.
- Defining type of variable at runtime based on what value it contains.
```js
let z = 10;
console.log(z, typeof z) // 10 number
z = true
console.log(z, typeof z) // true boolean
z = "string"
console.log(z, typeof z) // string string
z = []
console.log(z, typeof z) // [] object
```
### `Note`
- typeof `Null` is `object`
- typeof `NaN` is `Number`

## `Type Coercion`
- Automatic conversion of value of data type into another during operations.
```js
// Implicit Coercion - If any of the operand is string and operator is '+' then Js will concatenate
console.log("5" + 1);
console.log(1 + "5");
console.log("5" - 1); // here "5" will be converted into 5 cause operator '-' does only subtraction thing

// Explicit Coercion
console.log(Number("5") + 1); // 6
console.log(String(1) + "5"); // 15
```

### `Note`
- `!!` is logical NOT operator, first it converts any value to its boolean equivalent and then negates it and then again negates it.
```js
console.log(!0) // converts 0(falsy) into truthy value - true
console.log(!!0) // converts first to truthy value and then negates it to falsy value - false
```
- NaN has typeof as Number because its a failed mathematical calculation which is always going to be categorized as Number.
```js
console.log(0/0)
console.log(2 * "Hello")
```

## `Truthy vs Falsy Values`
### 1. `Falsy values`
- O, -0, 0n, false, null, undefined, NaN, ""

### 2. `Truthy values`
- [], {}, 12, 'name'