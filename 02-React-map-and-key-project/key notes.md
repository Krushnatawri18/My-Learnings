### Keys in map
- Keys help React identify which items have changed, are added, or are removed. 
- It uses this to optimize rendering and avoid unnecessary DOM operations.

1. Without Keys
eg.
```
users.map((user) => (
  <li>{user.name}</li>
));
```

### Problem - 
- React gives each element a default key (index internally).
- Leads to inefficient re-renders.
- On updates (like deleting or reordering), React may remount all elements, losing performance benefits.
- UI state may behave unexpectedly if list items are interactive (inputs, animations, etc.).


2. With Index as Key (Not recommended by React)
eg.
```
users.map((user, index) => (
  <li key={index}>{user.name}</li>
));
```

### Problem - 
- Works fine only if:
    - List order never changes
    - List items are never added/removed
- If list changes:
    - React reuses elements incorrectly
    - May cause UI mismatches or preserve wrong internal state

eg.
```
function App() {
  const [users, setUsers] = useState([
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
  ]);

  function removeFirst() {
    setUsers(users.slice(1));
  }

  return (
    <>
      <button onClick={removeFirst}>Remove First</button>
      {users.map((user, index) => (
        <UserInput key={index} name={user.name} />
      ))}
    </>
  );
}

function UserInput({ name }) {
  const [text, setText] = useState('');

  return (
    <div>
      <p>{name}</p>
      <input
        placeholder={`Write for ${name}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
```

If a user “Bob” had input state with some value, and you remove the first item (“Alice”), 
then “Charlie” moves up to index 1
React thinks “Charlie” is the same component as “Bob” (key=1)
So Charlie might display Bob’s input due to reused state 
Because React reused the same component (key=1) and just changed the name prop from Bob → Charlie.

3. With Key
- Every element has a stable identity.
- React tracks elements correctly even if list changes.
- Avoids bugs related to incorrect state reuse, animations, or form controls.

eg.
```
users.map((user) => (
  <li key={user.id}>{user.name}</li>
));
```





