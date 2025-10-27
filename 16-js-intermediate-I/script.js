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
cars.splice(2, 3)
// console.log(cars)

// or
// let newCars = cars.splice(2, 3)
// console.log(newCars)

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