1. `this keyword`
- The `this` keyword in JavaScript is a special reference that points to the object that is currently executing the code. 
- Its value depends entirely on how and where a function is called, not where it’s written.

2. `Scope`

a. `Global scope`
- this refers to window.

b. `Function scope`
- this refers to window.

c. `Method scope`
- this refers to the object of that method.

### Note 
- Arrow functions don't have their own this, they inherit from its lexical parent scope.

d. `Event handler scope`
- this refers to the element which is calling that event handler.

e. `Class scope`
- this refers to the newly created instance of class.

3. `call`
- Immediately invokes the function, with `this` set to the object you specify.
- Pass arguments one by one.
eg. 
```
function greet(greeting, name) {
  console.log(greeting, name, this.language);
}

const obj = { language: "JavaScript" };

greet.call(obj, "Hello", "Naman"); // Hello Naman JavaScript
```

4. `apply`
- Same as call just arguments are passed in an array.
eg.
```
greet.apply(obj, ["Hi", "Naman"]); // Hi Naman JavaScript
```

5. `bind`
- Doesn't invoke the function.
- Returns a new function with `this` permanently bound to the object you specify.
eg.
```
const boundGreet = greet.bind(obj, "Hey");
boundGreet("Naman"); // Hey Naman JavaScript
```