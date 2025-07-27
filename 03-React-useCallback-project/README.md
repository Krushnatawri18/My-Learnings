DAY 02 - React useCallback Hook

This day is all about learning the useCallback hook in React. It helps you keep your functions from being recreated every time your component re-renders.

🔁 What useCallback Does

Every time a component re-renders, all the functions inside it are recreated.
useCallback lets you keep the same function, unless certain values (dependencies) change.

✅ Why Use It?

🔄 Keep the same function between renders

🚫 Avoid unnecessary re-renders in child components

📥 Pass stable functions as props

🧠 How It Works

```
const memoizedFunction = useCallback(() => {
  // some code
}, [dependencies]);
The function only changes if something in [dependencies] changes.
```

⚠️ When NOT to Use It

❌ Don’t use it everywhere — only when passing functions to memoized components or hooks

✅ Use it when you're trying to improve performance

