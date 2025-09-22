var n = 5;
let m = 6; // will show uninitialized or not available in creation phase
const o = 7; // // will show uninitialized or not available in creation phase
const obj = {
  name: 'Krushna'
}

const array = [2,3,4];

function square(n) {
  var ans = n * n;
  return ans;
}

function func1(){
  const obj = {
    name: 'krish'
  }
  return obj;
}

function func2(){
  const array = [4,5,6];
  return array;
}

var square1 = square(n);
var square2 = square(8);  
var result = func1();
var newArray = func2();

console.log(square1)
console.log(square2)
console.log(result)
console.log(newArray)
console.log(m)
console.log(o)