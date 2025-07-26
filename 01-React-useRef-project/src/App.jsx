import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  let timerRef = useRef();

  function startTimer() {
    // first remove if there is any interval
    clearInterval(timerRef.current);
    // setInterval returns a id which should be stored as used by clearInterval() to clear interval
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000)
    console.log(timerRef.current);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    // didn't render the component as it persists its value
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /><br />

      <button onClick={stopTimer}>
        Stop
      </button>
      <br /><br />

      <button onClick={resetTimer}>
        Reset
      </button>
    </>
  )
}

export default App
