/***** DOM Manipulation *****/

// 1. Selecting the elements
let topicId = document.getElementById('topic-id');
console.log('getElementById', topicId);
console.dir('with dir', topicId);

let topicClassNames = document.getElementsByClassName('topic-class');
console.log('getElementsByClassName', topicClassNames)

let firstTopic = document.querySelector('h3');
console.log('querySelector', firstTopic);

let allTopics = document.querySelectorAll('h3');
console.log('querySelectorAll', allTopics);

// 2. Text content access
let element = document.querySelector('p');
element.textContent = "Topic Manipulation with textContent";

element.innerText = "Topic Manipulation with innerText"

element.innerHTML = "<i>Topic Manipulation with innerHTML by adding new html tag</>"

let val1 = document.getElementById('box').textContent;
console.log(val1);

let val2 = document.getElementById('box').innerText;
console.log(val2)

// 3. Attribute manipulation
let a = document.querySelector('a');
a.href = "https://www.google.com";

let image = document.querySelector('img');
image.setAttribute(
    'src',
    'https://images.unsplash.com/photo-1762450127876-515aed711718?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'
);
// console.dir(image);

let div = document.querySelector('div');
div.setAttribute('title', 'div tooltip');

let href = a.getAttribute('href');
console.log('getAttribute', href);

a.removeAttribute('href');
console.log('removeAttribute', a);

let btn = document.querySelector('button');
btn.removeAttribute('disabled')

// 4. Dynamic DOM manipulation
// createElement
let h1 = document.createElement('h1');
console.log(h1) // prints blank h1
h1.textContent = "Hello my world !";  // adding text content
document.body.append(h1); // appending h1 element at the end in body, even after script tag
// document.querySelector('body).append(h1)

// document.body.prepend(h1);  // adding h1 element at the start in body

// remove
h1.remove();

// appendChild
let h2 = document.createElement('h2');
h2.innerText = "Hello world from JavaScript";
document.querySelector('div').appendChild(h2);
// document.querySelector('body').append(h2);

// removeChild
document.body.querySelector('div').removeChild(h2);

// 5. Style updates
let child = document.querySelector('div h2');
child.style.color = "orange";
// child.style.backgroundColor = "blue";
h1.style.fontFamily = "Gilroy";

// classList
document.querySelector('div h2').classList.add('style-h2');

document.querySelector('h2').classList.remove('style-h2');

// toggle will remove the class if its already there or will add if not there
document.querySelector('h2').classList.toggle('style-h2');

let list = document.querySelectorAll('ul li:nth-child(2n');

list.forEach(function (val) {
    val.classList.add('highlight');
});

// Event handling
let p = document.querySelector('.test');
function dblclick() {
    console.log('clicked')
    p.style.color = 'green';
}

// on double click it will add dblclick event listener
p.addEventListener('dblclick', dblclick);

// on double click it will remove dblclick event listener
p.removeEventListener('dblclick', dblclick);

let input = document.querySelector('#inputbox');
function inputEvent(event){
    // if(event.data === null) // backspace input change case

    // for not a backspace input change
    if(event.data !== null){
        console.log('input', event.data);
    }
}

// for checking any change in input
input.addEventListener('input', inputEvent);

// change event
let select = document.querySelector('select');
let label = document.querySelector('label');
select.addEventListener('change', function(e) {
    label.textContent = `${e.target.value} selected`
});

input.addEventListener('change', function(e) {
    console.log('data', e.target.value)
})

let skillsDiv1 = document.querySelector('#skills1');
skillsDiv1.addEventListener('change', (e) => {
    console.log(e.target.value, e.target.checked)
})

let skillsDiv2 = document.querySelector('#skills2');
skillsDiv2.addEventListener('change', (e) => {
    console.log(e.target.value, e.target.checked)
})