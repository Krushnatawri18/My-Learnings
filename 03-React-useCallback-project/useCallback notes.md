### useCallback Hook
- A React Hook that lets you cache a function definition between re-renders.

eg.
const cachedFn = useCallback(fn, dependencies)
fn - A function definition that you want to cache between re-renders.
dependencies - A list of dependencies including every value within your component that’s used inside your function.

- React will compare the dependencies with the dependencies you passed during the previous render. If none of the dependencies have changed, useCallback will return the same function as before. Otherwise, useCallback will return the function you passed on this render.

### Usecases

1. Avoiding unnecessary re-rendering of child components.

### Problem -

App.jsx
```
import { useState } from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>Callback Hook</h2>
      <div>
        Count: {count}
      </div>
      
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>

      <div>
        <ChildComponent buttonName="Click me" />
      </div>
    </>
  )
}

export default App
```

ChildComponent.jsx
```
import React from 'react'

const ChildComponent = (props) => {
    // unnecessary called again and again
    console.log("Child component is re-rendered again");
  return (
    <div>
        <button>
            {props.buttonName}
        </button>
    </div>
  )
}

export default ChildComponent
```

### Solution -
ChildComponent.jsx
```
import React from 'react'

// component will not re-render until props change
const ChildComponent = React.memo((props) => {
    console.log("Child component is re-rendered again");
    return (
        <div>
            <button>
                {props.buttonName}
            </button>
        </div>
    )
})

export default ChildComponent
```

- But React.memo has some limitations it won't be able to save this component from re-rendering if we pass a function to it in props.

- Because App.jsx will re-render whenever state count changes so it create a new function HandleClick with same logic but different reference/memory so now if reference has changed then React.memo will think that its different function or our prop has changed so it will re-render child component.

### Problem -
ChildComponent.jsx
```
import React from 'react'

const ChildComponent = React.memo((props) => {
    console.log("Child component is re-rendered again");
    return (
        <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
    )
})

export default ChildComponent
```

### Solution -
App.jsx
```
import { useState } from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // freezing the function to recreate again
  const handleClick = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  return (
    <>
      <h2>Callback Hook</h2>
      <div>
        Count: {count}
      </div>
      <br />

      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
      <br />

      <div>
        <ChildComponent
          buttonName="Click me"
          handleClick={handleClick}
        />
      </div>
    </>
  )
}

export default App
```

### Difference between useMemo and useCallback

1. useMemo 
- Returns a memoized value.
- It caches the result of a computation and only re-computes it when its dependencies change.
- Useful for expensive calculations.

2. useCallback 
- Returns a memoized function.
- It caches the function reference and prevents it from being re-created unless dependencies change.
- Useful when passing functions as props to child components to avoid unnecessary re-renders (especially with React.memo()).
- It didn't save the function from re-running again just save from re-creation unless dependencies change.

eg.
App.jsx
```
import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log('Expensive calculation running');
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveCalculation) {
        console.log("Function not re-created");
      }
      else {
        console.log("Function re-created again")
      }
    }
    else {
      previousFunction.current = expensiveCalculation;
    }
  }, [expensiveCalculation]);

  return (
    <>
      <h2>Callback Hook</h2>
      <div>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Type something here'
        />
        <p>Calculation result:
          {expensiveCalculation()}
        </p>
      </div>
      <br />

      <div>
        <button onClick={() =>
          setCount(count + 1)}>
          Increment
        </button>
      </div>
      <br />
    </>
  )
}

export default App
```

### Note 
- Its a bad practice as you can’t call hooks like useMemo inside a function — they can only be called at the top level of your component or another custom hook.

### Problem -
```
const handleClick = useCallback(() => {
  const expensiveValue = useMemo(() => computeSomething(), [someDep]); // Bad practice
  console.log(expensiveValue);
}, [someDep])
```

### Solution -
```
const expensiveValue = useMemo(() => computeSomething(), [someDep]);

const handleClick = useCallback(() => {
  console.log(expensiveValue);
}, [expensiveValue]);
```
