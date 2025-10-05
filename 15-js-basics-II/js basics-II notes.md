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

console.log('5' == 5,
    false == 0,  // true → false is coerced to number 0
    true == 1,   // true → true is coerced to number 1
    '' == 0,     // true → empty string is coerced to number 0
    null == false,
    undefined == false)

// Explicit Coercion
console.log(Number("5") + 1); // 6
console.log(String(1) + "5"); // 15
```

## `Type Coercion Rules`
### 1. Coercion always tries to convert to Number, String, Boolean or Primitive.
### 2. Priorites
```js
Arithmetic(+,-) -> Number(unless with string)
Comparison(==) -> Number or Primitive
if, while, !, ? => Boolean
Object to primitive -> String or Number
```
```js
// convert ![] first because of higher precedence of !
console.log([] == ![])  // [] is true, !true(![]) is false
// now conversion of first param[] into primitive, [] == false -> "" == false -> 0 == false -> true
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
### 1. `Falsy values` - when used in comparision context
- O, -0, 0n, false, null, undefined, NaN, "", document.all

### 2. `Truthy values`
- [], {}, 12, 'name'

### `Note`
- Comparing falsy values with false doesn't mean they're same, they're only considered as false when used in boolean context like in `if` condition.
```js
// falsy == false
console.log(null == false)  // false
console.log(undefined == false)  // false
console.log([] == false) // true - type coercion
console.log(-0 == false) // true - type coercison
console.log("" == false) // true - type coercison

// truthy == true
console.log("hello" == true) // false, "hello" -> into number -> but can't -> NaN == true(1)
console.log({} == true)  // false, {} -> into string -> "[object Object]" -> into number -> NaN == true(1)
console.log([] == true)  // false, [] -> into string -> "" -> into number -> 0 == 1
```

### `Loose and Strict Equality`
### 1. `Loose Equality`
- Compares values after type coercion if needed.
- Types doesn't matter.
```js
'1' == 1        // true (string → number)
true == 1       // true (true → 1)
false == 0      // true (false → 0)
null == undefined // true (special case)
0 == ''         // true ('' → 0)
'0' == false    // true ('0' → 0, false → 0)
```
- Exception `undefined == null` returns `true`.

### 2. `Strict Equality`
- Compares both value and type.
- No type coercion.
```js
1 === 1         // true
'1' === 1       // false (string !== number)
true === 1      // false (boolean !== number)
null === undefined // false
```

## `Undefined vs Null`
### 1. `Undefined`
- Automatically assigned by Js when
#### a. When a variable is declared but not initialized.
#### b. When a function does not explicitly return a value.
#### c. When accessing non-existent property of an object or an array.
```js
let x;
console.log(x) // undefined

function base(){
    console.log('In a base')
    // return 2;
}

function func(){
    let value;
    console.log(value)   // undefined
    console.log(base())  // doesn't get returned value - undefined
}
func()

let object = {}
console.log(obj.property) // undefined

let arr = []
console.log(arr[2])  // undefined
```

### 2. `Null`
- Null value is explicitly given by developer.
- Represents absence of value or reset a variable.
```js
let y = null;
console.log(y); // null
let obj = { property: null };
console.log(obj.property); // null
```

### `Note`
- `typeof []` returns `object`.
- `typeof function f(){}` returns 'function`.
- To find real type of any array or function we use `instanceof`.
- `instanceof` only works with `reference` type not with `primitive` type.
```js
// variable instanceof Class
console.log(f1 instanceof Function) // true
console.log(arr instanceof Array) // true

console.log(12 instanceof Number)  // false
console.log("name" instanceof String)  // false
console.log(true instanceof Boolean)  // false
console.log(Symbol('a') instanceof Symbol)  // false
console.log(10000000000000000000000n instanceof BigInt)  // false
```

## `Functions`
### 1. `Anonymous Functions`
- Function expression without any name.
```js
// func is name of function but function expression doesn't have any name
let func = function(){
    console.log('Func called');
}
func();
```

### `Note`
- Function expression is a function assigned to a variable, passed as argument to another function and closure.
```js
// assigned to variable
const greet = function() {
    console.log("Hello!");
};
greet();

// passed as an argument
setTimeout(function() {
    console.log("Timer done");
}, 1000);
```

### 2. `Arrow Functions`
- Simpler function expression without writing any function keyword, return keyword and the curly braces.
```js
let myFunction = (a, b) => a * b;
console.log(myFunction(2, 3));

let hello = () => "Hello World!";
console.log(hello())

let val1 = () =>{
    console.log('Arrow function called');
}     
val1();
```
```js
// will not work as we're not returning any value
let f2 = (x, y) => { x * y } ;  // considers {} as function body, not an expression to return 
console.log(f2(2, 4))  // undefined

// will not work
let f3 = (x, y) => return x * y ;  // return will not work w/o curly braces

// right code as we're explicitly returning value
let f3 = (x, y) => { return x * y };  // or x * y will also work
console.log(f3(3, 4))
```

### 3. `Default Params`
```js
function add(v1, v2) {
    console.log(v1 + v2)
}
add() // NaN
add(2) // NaN

function sub(v1, v2 = 1) {  // default parameter
    console.log(v1 - v2)
}
sub() // NaN
sub(2) // 1
```

### 4. `Rest Operator`
- Converts number of elements into single array or object.
- Works in function parameters if it has a lot of parameters.

```js
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
```

### 5. `First Order Functions`
- Treating functions as values.
- Assigning to variables, pass as arguments and return from other functions.
```js
// first order functions
function xyz(val){
    val();
}   

xyz(function (){
    console.log('First order functions')
})
```
```js
function shout(msg){
    return msg;
}

function processing(fun){
    console.log(fun('HELLO'))
}

processing(shout)
```

### 6. `Higher Order Functions`
- Functions that either returns another function or takes another function in parameter.
```js
// Taking another function as parameter
function xyz(val){
    val();
}   

xyz(function (){
    console.log('First order functions')
})

// Returning another function
function hof(){
    return function(){
        console.log('Higher order functions')
    }
}

hof()();  // for calling inner function
```

### 7. `Pure and Impure Functions`
- Functions that change outside variables called as impure and who don't called as pure functions.
```js
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
```

### 8. `Closures`
- Function returning another function which uses variables of parent function.
```js
// closure
function parent(){
    let closure = 10;
    return function(){
        console.log('closure', closure)
    }
}
parent()();
```

