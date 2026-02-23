let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let button = document.querySelector('.btn');

// event bubbling
// console.log('Event Bubbling')
// button.addEventListener('click', function (){
//     console.log('button clicked')
// });

// c.addEventListener('click', function (e){
//     // will stop propagating to top after this event listener
//     e.stopImmediatePropagation(); 
//     console.log('c clicked')
// });

// c.addEventListener('click', function (e){
//     console.log('c clicked again')
// });

// b.addEventListener('click', function (){
//     console.log('b clicked')
// });

// a.addEventListener('click', function (){
//     console.log('a clicked')
// });

// event capturing
console.log('Event Capturing')
button.addEventListener('click', function (e){
    console.log('button clicked !')
}, true);

c.addEventListener('click', function (e){
    console.log('c clicked !')
});

b.addEventListener('click', function (e){
    console.log('b clicked !')
});

a.addEventListener('click', function (e){
    console.log('a clicked !')
}, true);


// without event delegation
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (){
        // console.log('clicked', btn)
    })
})

// delegating a common parent to handle event
const div = document.querySelector('.c')
div.addEventListener('click', function (e) {
    console.log(e.target.innerText)
})
