/***** Arrays *****/

// array definitions
let array1 = [12, 34, 58, 74, 96];
let array2 = new Array(12, 34, 58, 74, 96)
// console.log(array1, array2)

// console.log(array1 == array2)  // false - both are different objects
// console.log(array1 === array2)  // false

//  console.log(JSON.stringify(array1) === JSON.stringify(array2)); // true
// console.log(array1.every((val, i) => val === array2[i])); // true

// array methods
const cars = ['mercedez', 'audi', 'bmw', 'buggati', 'lamborgini', 'ferrari', 'porsche'];

// 1. push - adds element to last
cars.push('volkswagen')
// console.log(cars)

// 2. pop - removes last element
cars.pop();
// console.log(cars)

// 3. shift - removes first element
cars.shift()
// console.log(cars)

// 4. unshift - adds element to first
cars.unshift('nissan')
// console.log(cars)

// 5. splice - perform over original array
// takes two params, 
// 1. index - from where to start, 
// 2. deleteCount - how many elements to delete from that index
// 3. items - elements to add (optional)
cars.splice(2, 3)
// console.log(cars)

// or
// let newCars = cars.splice(2, 3)
// console.log(newCars)

// adding element with splice
const colors = ['blue', 'yellow'];
colors.splice(1, 0, 'red', 'green'); // removing 0 elements from index 1 and adding items
console.log(colors)

// 6. slice - returns a new array by copying elements of original array (doesn't change original one)
// takes two params, 
// 1. start - from where to start, if not given will take index 0 (inclusive),
// 2. end - where to stop copying, if not given will slice till end of an array (exclusive)
let slicedCars = cars.slice(1, 3);  // omitting start with (undefined, 3), and omitting end with (0)
// console.log(slicedCars)

let reverseSlicedCars = cars.slice(-2);  // takes 2 elements from end
// console.log(reverseSlicedCars)

// Note - Whether we put end number or -ve integer something beyond array size still it won't give error or put undefined in my new array if it don't find element for particular that index

// 7. reverse - reverses original array
cars.reverse()
// console.log(cars)

// 8. sort - sorts and returns the same array - not copy
// takes one param,
// 1. compareFunction - a function that defines the sort order
const array = [8, 12, , 15, 10, 4, , 9];
array.forEach(function (val, index) {
    array[index] = val + 5
})
console.log('forEach', array)
// sort function converts numbers into string and sort lexicographically - like in dictionary order which symbol comes first sequentially
// like here "10" < "4", cayse "1" comes before "4"
console.log(array.sort())  // unexpected - [10, 2, 3, 4, 6, 8]

// so write
console.log(array.sort((a, b) => a - b)) // sorts in ascending order
console.log(array.sort(function (a, b) {
    return b - a
})) // sorts in descending order 

cars.sort() // works fine on strings w/o compareFunction
// console.log(cars)

// for custom string sorting
const fruits = ['Banana', 'apple', 'Chiku'];
// localeCompare compares the string and arranges it in particular order
fruits.sort((a, b) => a.localeCompare(b))  // ascending order
// console.log(fruits)
fruits.sort((a, b) => b.localeCompare(a))  // descending order
// console.log(fruits)

// forEach
fruits.forEach(function (val) {
    console.log("fruit " + val)
})

array.forEach(function (val) {
    val = val + 5
})
console.log(array)

// 9. map
const numbers = [2, 4, 6, 8, 10]
const mapNumbers = numbers.map(num => num * 2)
console.log(mapNumbers)

// 10. filter
const unfilteredArray = [8, 12, , 15, 10, 4, , 9];
const anotherArray = unfilteredArray.filter(val => val < 10)
console.log(anotherArray)

// 11. reduce
const sum = array.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0)
console.log(sum)

// 12. find - returns the value of first element that passes criteria if found else undefined
const foundArrayElement = array.find(function (val) {
    return val === 18;
})
// console.log(foundArrayElement)

const arrayOfObjects = [
    { id: 1, key: 16 },
    { id: 2, key: 12 },
    { id: 3, key: 16 },
]
const foundArrayOfObject = arrayOfObjects.find(function (val) {
    return val.key == 16;
})
// console.log(foundArrayOfObject)  // {id: 1, key: 16}

// 13. some - returns true if at least one element pass criteria provided by function else returns false
// skips empty elements
// does not change the original array
const marks = [45, , 62, , 84, 96, 58]
const any = marks.some(function (val) {
    return val > 85;
})
console.log(any)

// 14. every - returns true only if all elements pass criteria provided by function else returns false
const oddNumbers = [1, 3, 5, 7]
const isOddNumbers = oddNumbers.every(function (val) {
    return val % 2 !== 0
})
console.log(isOddNumbers)

// Destructuring
const arr = [23, 48, 56, 78, 34]
let [a, b, , , c] = arr;
console.log(a, b, c) // 23, 48, 34

const copyArr = arr;  // shares same references, so reflects change in arr if we do in copyArr, and vice-versa
copyArr[0] = 22;
console.log(arr)

// so we do use
// Spread operator
const heterogenousArray = [1, 'keshav', { rollNo: 1 }, [null, undefined], true, 1.246];
const spreadArr = [...heterogenousArray];
spreadArr[0] = 23;
console.log(spreadArr)

// includes - return true if an array contains a particular value
// takes two params
// 1. element - value to search for
// 2. start - starting position, default is 0 (optional)
const players = ['sunil gavaskar', 'sachin tendulkar', 'ms dhoni', 'virat kohli', 'rohit sharma'];
console.log(players.includes('virat kohli')) // true
console.log(players.includes('Virat kohli')) // false, as it's case-sensitive

// indexOf - returns the first index of particular value else -1 if not found
// takes two params
// 1. element - value to search for
// 2. start - starting position, default is 0, negative value starts searching from end of an array (optional)
let index = players.indexOf('rohit sharma', -2);
console.log(index)  // 4


/***** Objects *****/
const car = {
    "name": "M4",
    "brand": "BMW",
    "color": "black",
};

let z = "name"

console.log(car.z)  // undefined, as car doesn't have any key named 'z'
console.log(car[z])  // M4, as it replaces z with 'name'

// Computed properties 
const role = 'Captain';

// Destructuring 
const user = {
    "name": "Cristiano Ronaldo",
    [role]: 'Cristiano Ronaldo',
    goat: true,
    address: {
        city: 'Lisbon',
        country: 'Portugal',
        location: {
            lat: 23.4,
            lng: 79.6,
            direction: 'west'
        }
    }
}

let { lat, lng } = user.address.location;
console.log(lat, lng)

// remove property from object
// delete user.address.location.direction;

// to remove nested property from object
function deleteNestedProperty(obj, path) {
    // splits all keys by '.'
    const keys = path.split('.');

    // removes last key from keys array
    const lastKey = keys.pop();

    // as we have removed target/last key so it will return object from which we have to remove property if exist
    // added optional chaining in case wrong path is given then we can't remove property
    const targetObjectToRemoveFrom = keys.reduce((acc, key) => {
        return acc?.[key]
    }, obj);

    // first check whether we got target object to search in and then checking whether lastKey is present in or not
    if (targetObjectToRemoveFrom && lastKey in targetObjectToRemoveFrom) {
        delete targetObjectToRemoveFrom[lastKey];
    }
}

deleteNestedProperty(user, 'address.location.direction');
console.log('removal of nested property', user)

// for-in 
for (let key in user) {
    console.log(key, user[key])
}

// Object.keys - return an array of object keys as element
console.log(Object.keys(user));

// Object.values - return an array of object values as element
console.log(Object.values(user));

// Object.entries
console.log(Object.entries(user));

// Copying objects
// 1. Spread operator - shallow copy
let newUser = { ...user };
user.address.location.lat = 23.8;
console.log(user, newUser); // both will get updated as spread doesn't do deep copy

// 2. Deep clone
newUser = JSON.stringify(user)  // converts object into string like {"name":"Cristiano Ronaldo","address":{"city":"Lisbon","country":"Portugal","location":{"lat":23.8,"lng":79.6}}}

// now to convert that actual valued string into object so no references only copy
newUser = JSON.parse(newUser);

newUser.address.location.lat = 23.4
console.log(user, newUser); // now only newUser will be updated

// 3. Object.assign - shallow copy
// takes two params
// 1. target - where to copy to
// 2. source - from where to copy to
let anotherUser = Object.assign({}, user);
// console.log(anotherUser);

// can also add own property and then put copied from source
anotherUser = Object.assign({ goals: 950 }, user);
// console.log(anotherUser)

anotherUser.name = 'Mr. Football' // will update only anotherUser as its first level change
anotherUser.address.country = 'Spain';  // will update both objects
anotherUser.address.city = 'Madrid'; // will update both objects
console.log(anotherUser)
console.log(user)

// Object.freeze - shallow copy
const globe = {
    "India": "New Delhi",
    "USA": "New York",
    "China": "Beijing",
    "Europe": {
        "UK": "London",
        "France": "Paris"
    }
};

Object.freeze(globe)
globe["Russia"] = "Moscow";  // can't add new property, even it doesn't give any error
globe["India"] = "Delhi";  // even can't change existing properties
delete globe['China'];  // even can't remove existing properties 

// as its shallow copy, you can delete nested object property
delete globe.Europe.UK;
// even can add new property in nested object
globe.Europe.Spain = "Madrid";
console.log(globe);
console.log('typeof globe[key]', typeof globe['India'])

// checks if object is frozen or not
console.log(Object.isFrozen(globe)) // true
console.log(Object.isFrozen(globe['Europe']))  // false as nested object isn't frozen

// Deep freeze
function deepFreeze(obj) {
    Object.freeze(obj);

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]);
        }
    })
    console.log('object in deepFreeze', obj);
    return obj;
}

deepFreeze(globe);
globe.Europe.Italy = "Rome"; // can't be added as deep frozen
console.log(globe);

// Optional chaining
// console.log(user.addresses.city); // error
console.log(user?.addresses?.city) // undefined
