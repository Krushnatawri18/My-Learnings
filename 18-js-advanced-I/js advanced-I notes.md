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

6. `callback hell`
- Nesting multiple asynchronous callbacks.
eg.
```
getUser(userId, function(user) {
  getOrders(user, function(orders) {
    getOrderDetails(orders[0], function(details) {
      processDetails(details, function(result) {
        console.log(result);
      }, handleError);
    }, handleError);
  }, handleError);
}, handleError);
```

7. `promises`
- Promise object refers to the completion or failure of an asynchronous operation.
- Created to make asynchronous javascript easier to use.
- Writing multiple asynchronous callbacks in a cleaner way.
- Three states we have

a. `pending`	operation started (not finished)

b. `rejected`	operation failed

c. `fulfilled`	operation completed

eg.
```
let myPromise = new Promise(function(resolve, reject) {
  ok = true;

// Code that may take some time

  if (ok) {
    resolve("OK");
  } else {
    reject("Error");
  }
});

// Using then() to display the result
myPromise.then(
  function(value) {myDisplayer(value);},
  function(value) {myDisplayer(value);}
);
```

- Better than callback hell as we can handle errors at the end.

8. `promises static method`

a. `Promise.all(iterable)`

Fulfills when all promises in the iterable are fulfilled; rejects immediately if any promise rejects.

b. `Promise.allSettled(iterable)`

Waits for all promises to settle (either fulfill or reject) and returns an array of their results.

c. `Promise.race(iterable)`

Settles (fulfills or rejects) as soon as any of the promises in the iterable settles.

d. `Promise.any(iterable)`

Fulfills as soon as any promise in the iterable fulfills; rejects if all promises reject.

9. `Fetch`
- Browser-based built-in api to make HTTP requests.
- Promise-based.
eg.
```
fetch('/api/users').then(res => res.json());

// or
const res = await fetch(url);
```

- Sending an HTTP request to a server
- Waiting for a response
- Receiving raw response data
- Converting it into usable format (JSON)

- It does not auto-parse JSON.

eg.
```
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // need to parse into JSON
  const data = await response.json();

  console.log(data);
}

getUsers();
```

eg.
```
async function createUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // telling server what you are sending
      'Authorization': 'Bearer token_name' // for login/authentication
    },
    body: JSON.stringify({
      name: 'Harsh',
      email: 'harsh@example.com'
    })
  });

  const data = await response.json();
  console.log(data);
}

createUser();
```