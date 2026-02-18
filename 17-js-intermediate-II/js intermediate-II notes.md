1. `DOM`
- A standard for accessing documents.
- Its a tree like structure which represents every part of HTML document.

2. `DOM Nodes`
- Every single element present in DOM.

i. `Document Node`
- Represents whole HTML document or root of DOM tree.

ii. `Element Node`
- Represents simple elements.

iii. `Text Node`
- The text content of an element.

iv. `Attribute Node`
- Represents attributes like class and id.

v. `Comment Node`
- Represents HTML comments.

3. `DOM Manipulation`

a. `Selecting the elements`

i. `getElementById`

ii. `getElementsByClassName`
- Returns an HTML collection (array) of elements with that class name.

iii. `querySelector`
- Single first element selection.
```js
document.querySelector('.box'); // selecting class

document.querySelector('#box'); // selecting id

document.querySelector('[type="text"]'); // selecting attribute
```

iv. `querySelectorAll`
- Returns a collection (array) of all elements.

### `Note`
- If you're seeing for eg. `<p id="topic-id">Topic Id</p>` and if you want to see all properties of that element then you can do console.dir(topicId).

b. `Text content access`

i. `innerText`
- Sets a plain text.
- Slower.
- Just fetches the text which is visible on screen.
```js
let val1 = document.getElementById('box').textContent; 
/* 
    Hello
    World
*/
```

ii. `textContent`
- Sets a plain text.
- Faster.
- Ignores the css styles like includes hidden text, whitespaces and line breaks.
```js
let val2 = document.getElementById('box').innerText; // Hello
```

iii. `innerHTML`
- Insert html string into dom nodes like real element.
- eg. 
```js
let element = document.querySelector('p');
element.textContent = "Topic Manipulation with textContent";

element.innerText = "Topic Manipulation with innerText"

element.innerHTML = "<i>Topic Manipulation with innerHTML by adding new html tag</>"  // content would be displayed as italic as i tag inserted into dom nodes
```

c. `Attribute manipulation`

i. `setAttribute`
- Takes two params 
1. attribute name 
2. value to be set for that attribute name
```js
element.setAttribute(name, value)
```

ii. `getAttribute`
```js
element.getAttribute(name)
```

iii. `removeAttribute`
- Removes the attribute from an element.
```js
element.removeAttribute(name)
```

d. `Dynamic DOM manipulation`

i. `createElement`
- Creates a dynamic html element.
```js
document.createElement(tagName);

const div = document.createElement("div"); // but will not be visible on the page until you append/prepend it

div.textContent = 'Hello world !'
document.body.append(div); // add to body
```

ii. `remove`
- Delete an element from the webpage.
```js
const element = document.getElementById("box");
element.remove();   // removes from DOM
```

iii. `appendChild`
- Appends element at last.
```js
const div = document.createElement("div");
div.textContent = "Hello!";
document.body.appendChild(div);
```

iv. `removeChild`
- Remove a specific child node from its parent.
```js
parent.removeChild(child);
```

v. `prepend`
- Appends element at beginning.
```js
const div = document.createElement("div");
div.textContent = "Hello!";
document.body.prepend(div);
```

e. `Style updates`

i. `style`
- Manipulating css style of an element.
```js
let child = document.querySelector('div h2');
child.style.color = "orange";
```

ii. `classList`
- For adding or removing or toggling a class for an element.
```js
document.querySelector('div h2').classList.add('style-h2');

document.querySelector('h2').classList.remove('style-h2');

document.querySelector('h2').classList.toggle('style-h2');
```

4. `Event Handling`

i. `click`

ii. `dblclick`

iii. `input`
- For looking any change either addition of text or backspace in input box.

iv. `change`
- Fired for input, select and textarea tag whenever user moodifies the element's value.
- Change event doesn't fire for input tag until the control loses the focus.

v. `keydown`
- When key is pressed like you didn't release the key, you are just pressed and pressing it.

vi. `submit`

vii. `mouseover`

viii. `mouseout`

ix. `mousemove`

x. `keyup`
- When key is released like you released the keyboard button, happens after keydown as key is being pressed.

5. `Event Bubbling`
- Event starts at target element and then bubbles upward to its parent element till html.
- By default behavior.
- Event bubbling occurs everytime after event capturing if turned on or even set to off.

6. `Event Capturing`
- Event starts at the top of the DOM tree and travels down to the target element.
- Need to start capturing mode and then bubbling will follow.
```js
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Div clicked (capturing)");
  },
  true // enables capturing
);
```

7. `Event Propagation`
- Process by which an event travels through the DOM after its triggered.
- Stopping event propagation with `e.stopPropagation()` will prevent bubbling or capturing from continuing.

a. `Capturing phase (top -> down)`

b. `Target phase (the clicked element)`

c. `Bubbling phase (bottom -> up)`

8. `Event Delegation`
- Process of applying single event listener over parent to handle events of child elements.
- Works because of event bubbling.
```js
// Not optimal way - as adding n event listeners for n buttons, causing more memory usage for creating function
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    console.log("Button clicked");
  });
});

// doesn't handle dynamically added elements as querySelectorAll runs once up there
const newButton = document.createElement("button");
document.body.appendChild(newButton);

// Efficient way - as have only single event listener running for clicked buttons and also handles dynamically added elements
document.getElementById("parent").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
```