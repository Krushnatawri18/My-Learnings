### Redux Toolkit
- Centralized store for managing data.
- Avoid headache of prop drilling.

### Lifecycle

1. Onclick on button calls handleClick function
2. handleClick dispatches the action into store
3. Store calls the reducer related to that action as it has (type: name_of_slice/reducer_function)

eg.
```
type: 'counter/increment',
payload: 5  // payload if any
```

and executes the logic

4. Then store updates the state
5. Shown in UI

### Steps to perform

1. Create a store.
2. Wrap App component with Provider passing store.
3. Create slice for the features.
4. Register the exported reducer of slice in store.

### Terms

1. Action (Event)
- A plain JavaScript object that describes an event that happened in your app.
- Used to send the data to redux store.

eg.
```
dispatch({ type: 'counter/increment', payload: 5 });
```

2. Slice
- Written logic to maintain state.
- Has initial state and reducer functions.

eg.
```
import { createSlice } from '@reduxjs/toolkit';

// createSlice used to create slice of the redux state
// createSlice returns 
// 1. reducer - actual reducer function passed into store
// 2. actions - action creators for each reducer function
const counterSlice = createSlice({
  name: 'counter',              // name of slice
  initialState: { value: 0 },   // initial state of slice
  reducers: {                   // reducer functions that handle actions and modify state
    increment: (state) => {
      state.value += 1; 
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

3. Reducer
- A pure function that takes current state + action, and returns the new state.

eg.
```
    function counterReducer(state = { value: 0 }, action) {
        switch (action.type) {
            case 'increment':
            return { value: state.value + 1 };
            default:
            return state;
        }
    }
```

4. Store
- Single source of truth/global state which has all states data.

eg.
```
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// configureStore creates redux store with 
// 1. adds redux devtools - does the integration of code with redux extension
// 2. adds middleware like redux-thunk - 
// 3. combines reducers
export const store = configureStore({
  reducer: {
    // name of slice: sliceReducer
    counter: counterReducer
  }
});
```

- You interact with it by:
a. dispatch(action) → to send updates
b. getState() → to read current state
c. subscribe() → to listen for changes (usually React handles this)

5. State
- Data that you wanted to manage in store.

### Note
- Earlier, direcly changing state wasn't allowed, so classic redux was used.

eg.
```
// Classic Redux
function reducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value: state.value + 1
      };
    default:
      return state;
  }
}

```

- But now as Redux Toolkit uses a library called Immer under the hood, which allows to change the value of state.

eg.
```
increment: state => {
  state.value += 1;
}
```

