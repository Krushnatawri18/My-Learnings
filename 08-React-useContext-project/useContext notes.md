### useContext hook
- A React Hook that lets you read and subscribe to context from your component.
- Helps to avoid prop drilling.

eg.
```
const value = useContext(SomeContext)
```

someContext - context that you have created with some value so that component can read and use

### Steps

1. Create a context
2. Provide that context with value
3. Consume that context with useContext

eg.
```
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// 1. creating a context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "Krushna"
  });

  return (
    <>
      {/* 2. wrapping all the child components inside a provider who wants to consume context */}
      {/* all child A,B,C are wrapped  */}
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  )
}

export default App
export { UserContext }
```

```
import React, { useContext } from 'react'
import { UserContext } from '../App'

const ChildA = () => {
    // 3. consuming the context
    const user = useContext(UserContext);

    return (
        <div>Hello from {user.name} in ChildA !</div>
    )
}

export default ChildA
```

### Note
- Whenever any value from context changes then React will re-render all the components that consume that context.
- This re-render happens only if the new value is different from the old value.

### Difference between useContext and Redux

### useContext

- Built in react
- Prop drilling alternative, not a state manager (needs useState)
- Distributes values via Provider
- Used when have low complexity

### Redux

- Need to install
- State management library
- Centralized store
- Used when have high complexity