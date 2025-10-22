/***** CLOSURE *****/

// Eg. 1
function adjustSize(size) {
    return () => {
        document.body.style.fontSize = `${size}px`;
    }
}

const size12 = adjustSize(12);
const size14 = adjustSize(14);
const size16 = adjustSize(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').addEventListener('click', size16)

// Eg. 2
function makeCounter() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

// console.log(counter1.value()); // 0

counter1.increment();
counter1.increment();
// console.log(counter1.value()); // 2

counter1.decrement();
// console.log(counter1.value()); // 1
// console.log(counter2.value()); // 0

// Eg. 3 - Closure scope chain
// global scope
// const e = 10;
function sum(a) {
    // closure 
    return function (b) {
        // closure 
        return function (c, d) {
            // closure 
            return function (e) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3, 4)(5)); // 15


// Eg. 4 - Closure with setTimeout
function x() {
    for (var i = 1; i <= 5; i++) {
        // here IIFE creates a fresh copy of j
        (function (j) {
            // closure closed over j
            setTimeout(function () {
                // console.log(j);
            }, j * 1000)
        })(i)
    }
    // console.log("Closure with SetTimeout!")
}

x()

const add = a => b => a + b;
// console.log(add(5)(3));

// Eg. 5 - Memoization with closure

function slowSquare(n){
    console.log('Calculating..')
    return n * n;
}

function memoize(func){
    const cache = {};

    return function(arg){
        if(arg in cache){
            console.log('Calculated already!')
            return cache[arg];
        }

        const result = func(arg);
        cache[arg] = result;
        return result;
    }
}

const memoizeFunc = memoize(slowSquare);
console.log(memoizeFunc(2));
console.log(memoizeFunc(2));
console.log(memoizeFunc(4));
console.log(memoizeFunc(4));

// Eg. 6 - Closure with memory management
function startTimer() {
  let counter = 0;
  let unusedLargeData = new Array(1000000).fill("💾");

  return function(time){
    console.log(time + " "+ counter)
  }
}

const newFunc = startTimer();
newFunc(2);