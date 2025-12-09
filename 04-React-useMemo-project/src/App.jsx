import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  function expensiveTask(num) {
    console.log('Expensive task going ');
    for (let i = 0; i <= 1000000000; i++) {
    }
    return num * 2;
  }

  // this function will be called only when inputValue changes 
  let doubleValue = useMemo(() => expensiveTask(inputValue), [inputValue]);

  return (
    <>
      <div disabled title='UseMemo'>
        <h2>UseMemo</h2>
      </div>
      <br />
      <button title='Increment' disabled={true} onClick={() => setCount(count + 1)}>
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
