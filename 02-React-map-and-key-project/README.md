DAY 01 - React key in .map() (List Rendering)

This day is about understanding why we use a key when rendering lists with .map() in React.

🔑 What is key?

In React, a key is a special prop you give to each item in a list to help React identify which items changed, were added, or removed.

🧠 Why It Matters

React uses the key to:  

🚀 Make list updates faster and smarter

🔄 Avoid unnecessary re-renders

✅ Keep track of items when the list changes

🧩 Example

```
const users = ['Alice', 'Bob', 'Charlie'];

return (
  <ul>
    {users.map((user, index) => (
      <li key={user}>{user}</li>
    ))}
  </ul>
);
```

✅ Good key: something unique and stable, like an ID or name

❌ Avoid using just the array index as a key unless the list never changes

⚠️ Common Mistakes

❌ Using index as a key in dynamic lists

❌ Not adding a key at all (React will warn you)

❌ Using a value that isn't unique

