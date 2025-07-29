### Redux Toolkit
- Centralized store for managing data.

### Lifecycle

1. Onclick on button calls handleClick function
2. handleClick dispatches the action into store
3. Store calls the reducer related to that action and executes the logic
4. Then store updates the state
5. Shown in UI

### Terms

1. Action (Event)
-  An object that needed for a state change.

2. Slice
- Written logic to maintain state.
- Has initial state and reducer functions.

3. Reducer
- A pure function that takes current state + action, and returns the new state.

4. Store
- Single source of truth/global state which has all states data.

5. State
- Data that you wanted to manage in store.