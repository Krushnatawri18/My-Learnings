### ``JavaScript Intermediate``

### `Arrays`
- A heterogenous collection of elements which stores different data types like number, string, object, etc.
```js
const heterogenousArray = [1, 'keshav', {rollNo: 1}, [null, undefined], true, 1.246];
console.log(heterogenousArray[2].rollNo, heterogenousArray[3][1])
```
- Arrays are objects under the hood.
```js
const arr = [23, 56, 78];
// the keys '0', '1', '2' are actually string keys and length is a special property that get updated whenever you add or remove elements.
// BTS - const arr = {0 : 23, 1 : 56, 2 : 78, length: 3}

console.log(typeof []);  // object
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true (because Array extends Object)
```

## Note
- Best practice is used to declare array with const. 
```js
const cars = ['mercedez', 'audi', 'bmw'];
// cause you're trying to make cars point to new array in memory
cars = ['rolls-royce', 'audi', 'bmw']; // error: assignment to constant variable (reassignment)
cars[0] = 'rolls-royce' // allowed
cars.push('mercedez') // allowed
console.log(cars)
```

### `ForEach`
- A method that executes a provided function once for each element in an array.
```js
const array = [8, 12, , 15, 10, 4, , 9];
// copy of val will be created so manipulating val won't affect elements of an array
array.forEach(function (val) {
    val = val + 5
})
console.log('forEach', array)

// will work as we have passed index
array.forEach(function (val, index) {
    array[index] = val + 5
})
```

### `Map`
- Returns a new array from calling a function for every array element.
- Need to return else undefined will be returned.
- Does not change the original array.
```js
const newArray = array.map(function (val){
    return val;
});
console.log(newArray)

// to replace value of an array
const replaceArr = spreadArr.map((val) => val === 23 ? 22 : val)
console.log(replaceArr)
```

### `Filter`
- Returns a new array containing elements which pass certain certain provided by function.
- Skips empty slots.
- Does not change the original array.
```js
const unfilteredArray = [8, 12, , 15, 10, 4, , 9]; // sparse array - empty slots
const anotherArray = unfilteredArray.filter(function (val){
    if(val < 10) return true;  // if true element will be put in anotherArray
    return false;
})

// or
const anotherArray = unfilteredArray.filter(val => val < 10)
console.log(anotherArray) // [8, 4, 9]
```

### `Reduce`
- Returns a single accumulated value from array elements.
- Skips empty slots.
- Does not change the original array.
```js
const sum = array.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0)
console.log(sum)
```

### `Objects`
- A variable that holds many variables.
- Collection of key-value pairs.
```js
const car = {
    "name": "M4",
    "brand": "BMW",
    "color": "black"
};

let z = "name"

console.log(car.name) // M4
console.log(car['name'])  // M4

console.log(car.z)  // undefined, as car doesn't have any key named 'z'
console.log(car[z])  // M4, as it replaces z with 'name'
```

- Key can be boolean or number.
```js
const object = {
    24: 'number',
    true: 'boolean'
}
console.log(car[24], car[true]); // number boolean
```

#### `Object.freeze`
- BTS - 
```js
// conceptual code
class JSObject {
    bool isExtensible;                   // Can we add new properties?
    Map<PropertyKey, PropertyDescriptor> properties;  // All properties
}

struct PropertyDescriptor {
    Value value;         // The value of the property
    bool writable;       // Can we change the value?
    bool configurable;   // Can we delete or redefine it?
    bool enumerable;     // Can we see it or iterate in loops?
}
```

- If we make object freeze, then it makes ``isExtensible = false``,
for each property, ``writable = false``, ``configurable = false``, making it read-only at top level.
- Prevents mutation whenever you try to write, delete or redefine a property, js engine checks the flags firs, if it says no then ignores or give error in strict mode.

// Need to learn Object.create with prototype and Object.hasOwn with prototype