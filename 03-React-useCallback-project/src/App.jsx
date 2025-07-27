import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // stores the reference of previous version of expensiveCalculation
  const previousFunction = useRef(null);

  // useCallback memoizes the function so it's not re-created on every render
  // unless its dependencies i.e. count change.
  const expensiveCalculation = useCallback(() => {
    console.log('Expensive calculation running');
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  // to check whether useCallback is preventing unnecessary re-renders
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
      // linking previousFuntion ref with expensiveCalculatin function
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
