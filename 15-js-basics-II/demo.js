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

console.log(counter1.value()); // 0

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2

counter1.decrement();
console.log(counter1.value()); // 1
console.log(counter2.value()); // 0

// Eg. 3 - Closure scope chain
// global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); // 20
