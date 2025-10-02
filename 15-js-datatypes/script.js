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
console.log(people)