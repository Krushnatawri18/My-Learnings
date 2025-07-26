### useRef ###
- A React Hook that lets you reference a value that’s not needed for rendering.
- It holds a mutable value that does not reset every time the component re-renders.

### Usecases -
1. Helps a variable to persist its value whether component renders or not.
eg.
let val = useRef(initialValue);

here useRef returns an object having field current which stores the value
{
  current: initialValue
}

so with this object, we can change or access the value using val.current
On the next renders, useRef will return the same object.

### Note
- On state change, component re-renders but on useRef variable change, no re-rendering happens.

### Problem -
function App() {
  const [count, setCount] = useState(0);
  let val = 1;

  function handleIncrement() {
    setCount(count + 1);
    // value will always be 2 as component re-render again
    // value didn't persist across re-renders
    val = val + 1; 
    console.log('Value', val);
  }

  useEffect(() => {
    console.log('UI rendered');
  });

  return (
    <>
      <p>Current count {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App

### Solution -
function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  function handleIncrement() {
    setCount(count + 1);
    // value persists across re-renders
    val.current = val.current + 1;
    console.log('Value', val.current);
  }

  useEffect(() => {
    console.log('UI rendered');
  });

  return (
    <>
      <p>Current count {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App

2. With useRef, you can access or change any element present in DOM directly.

eg.
function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  let buttonRef = useRef();

  function handleIncrement() {
    setCount(count + 1);
    val.current = val.current + 1;
    console.log('Value', val.current);
  }

  function changeColor() {
    buttonRef.current.style.backgroundColor = "red";
  }

  return (
    <>
      <p>Current count {count}</p>

      {/* to link ref with this button, ref={buttonRef} */}
      <button
        ref={buttonRef}
        onClick={handleIncrement}>
        Increment
      </button>
      <br /><br />

      <button onClick={changeColor}>
        Change Color Of First Button
      </button>
    </>
  )
}

export default App

eg.
function App() {
  const [time, setTime] = useState(0);
  let timerRef = useRef();

  function startTimer() {
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

### Note
-  If ref.current holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.

### Problem -
function App() {
  const user = useRef({name: 'Krushna', age:'22'});

  const handleUpdate = () => {
    useRef.current.name= "Krishna";
  }

  return (
    <>
      {/* UI doesn't renders cause we are updating value in useRef */}
      <p>Name: {user.current.name}</p> 
      <button onClick={handleUpdate}>Change Name</button>
    </>
  )
}

### Solution -
function App() {
  const [user, setUser] = useState({ name: 'Krushna', age: '22' });

  const handleUpdate = () => {
    setUser(prev => ({ ...prev, name: 'Krishna' }))
  }

  return (
    <>
      <p>Name: {user.name}</p>
      <button onClick={handleUpdate}>Change Name</button>
    </>
  )
}

### Note
- Do not write or read ref.current during rendering, except for initialization. 

eg.
function MyComponent() {
  const inputRef = useRef();

  // avoid this cause ref may not be attached yet, especially on first render
  if (inputRef.current) {
    inputRef.current.value = 'Hi'; // unsafe
  }

  return <input ref={inputRef} />;
}

- Use it inside useEffect, setTimout and event handlers.

### Note
- One ref should point to one element only.
- If you reuse the same ref on multiple elements, it gets overwritten each time.

### Working with custom component
- By default, your own components don’t expose refs to the DOM nodes inside them.
- Add ref as prop in your component which it will accept.
- Now pass it down to the actual DOM element i.e. your custom component you want to reference.