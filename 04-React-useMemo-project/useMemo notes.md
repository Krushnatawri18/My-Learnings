### useMemo
- A React Hook that lets you cache the result of a calculation between re-renders.
- Prevents unnecessary expensive operations/task/calculations.

eg.
```
const cachedValue = useMemo(calculateValue, dependencies)
```

calculateValue - A function calculating the value that you want to cache between re-renders.
dependencies - The list of all reactive values referenced inside of the calculateValue code. 

Returns - On the initial render, useMemo returns the result of calling calculateValue with no arguments. (Memoization)

### Problem -

eg.
```
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  function expensiveTask(num) {
    console.log('Expensive task going ');
    // dummy expensive code which slows down incrementation
    for (let i = 0; i <= 1000000000; i++) {
    }
    return num * 2;
  }

  // this function will be called again and again whenever component will re-render because of state count change
  let doubleValue = expensiveTask(inputValue);

  return (
    <>
      <div>
        <h2>UseMemo</h2>
      </div>
      <br />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br /><br />
      <div>
        Count: {count}
      </div>
      <br /><br />
      <input type='number'
        placeholder='Enter a number'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br /><br />
      <div>
        Double: {doubleValue}
      </div>
    </>
  )
}

export default App
```

### Solution -

eg.
```
// this function will be called only when inputValue changes 
let doubleValue = useMemo(() => expensiveTask(inputValue), [inputValue]);
```

### Note
- A calculation function that takes no arguments, like () =>, and returns what you wanted to calculate.

eg.
```
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

- Even though the function body uses a and b, they are captured from scope, not passed in as arguments.
- Because React calls this function itself, it doesn’t give it parameters — so it must take no arguments.
- useMemo works on dependency change.

### Note to find if a calculation is expensive 
- Expensive = noticeable performance hit, usually from large loops or complex logic.
- Use console.time() and console.timeEnd() to measure execution time.
- If a calculation takes ~1ms or more, consider wrapping it in useMemo.
- useMemo only helps on updates, not the first render.

### Note when to use useMemo
- The calculation you’re putting in useMemo is noticeably slow, and its dependencies rarely change.
- Pass it as a prop to a component wrapped in memo so to skip re-rendering if the value hasn’t changed.

eg.
```
import { useMemo } from 'react';
import List from './List.js';
import { filterTodos } from './utils.js'

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  return (
    <div className={theme}>
      <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
      <List items={visibleTodos} />
    </div>
  );
}
```

- The value you’re passing is later used as a dependency of some Hook.

eg.
```
const visibleTodos = useMemo(() => {
  return filterTodos(todos, tab);
}, [todos, tab]);

useEffect(() => {
  console.log("Visible todos changed!");
}, [visibleTodos]);
```

- W/o useMemo, visibleTodos is recalculated on every render causing re-running of useEffect even if todos and tab didn't change.
- With useMemo, visibleTodos is recalculated when todos or tab change.

eg.
```
function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    const options = {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
    };

    useEffect(() => {
        const connection = createConnection(options);
        connection.connect();
        return () => connection.disconnect();
    }, [options]); // 🔴 options changes every render!
}
```

- Creates a new object in memory even if roomId hasn't changed, making it re-run useEffect.

### Usecase

1. Memoizing individual JSX nodes 

eg.
```
export default function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  const children = useMemo(() => <List items={visibleTodos} />, [visibleTodos]);
  return (
    <div className={theme}>
      {children}
    </div>
  );
}
```

2. Memoizing the dependency of another hook

eg.
```
function Dropdown({ allItems, text }) {
  const searchOptions = useMemo(() => {
    return { matchMode: 'whole-word', text };
  }, [text]); // Only changes when text changes

  const visibleItems = useMemo(() => {
    return searchItems(allItems, searchOptions);
  }, [allItems, searchOptions]); // Only changes when allItems or searchOptions changes
}
```

3. Memoizing the function

eg.
```
const handleSubmit = useMemo(() => {
    return (orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails
      });
    };
}, [productId, referrer]);
```

### Difference between memo and useMemo

1. memo
- Used to memoize the component.
- Component-level.

2. useMemo
- Used to memoize a expensive functions.
- Inside functional components.