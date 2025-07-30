import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handlePayloadClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={handleIncrementClick}>
        Increment
      </button> &nbsp;
      <button onClick={handleDecrementClick}>
        Decrement
      </button> &nbsp;
      <button onClick={handleResetClick}>
        Reset
      </button>

      <br /><br />
      <input
        type='number'
        value={amount}
        placeholder='Enter an amount'
        onChange={(e) => setAmount(e.target.value)} />
      <br /><br />
      <button onClick={handlePayloadClick}>
        Increment by amount
      </button> &nbsp;
    </>
  )
}

export default App
