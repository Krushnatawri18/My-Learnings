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