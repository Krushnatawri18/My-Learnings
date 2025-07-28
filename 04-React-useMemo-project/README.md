DAY 04 - React useMemo Hook

This day is all about learning the useMemo hook in React. It helps you avoid unnecessary recalculations by memoizing the result of expensive computations.

🔁 What useMemo Does

Every time a component re-renders, all values inside it (objects, arrays, calculations) are recreated.

useMemo lets you keep the same computed value between renders — unless its dependencies change.

✅ Why Use It?

🧮 Avoid recalculating expensive values

🚫 Prevent unnecessary re-renders caused by reference changes

📦 Pass stable objects/arrays to memoized child components or hooks

⚡ Improve performance in computation-heavy components


🧠 How It Works

```
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```
The function runs only if a or b change

React reuses the previous value if dependencies are unchanged

⚠️ When NOT to Use It

❌ Don’t wrap every calculation in useMemo — it adds complexity

❌ Don’t use it for non-expensive logic — you'll get no benefit

❌ Don’t use it to “cache” values that don’t need caching

✅ Use it when:

A calculation is slow or resource-intensive

You're passing computed data into a React.memo-wrapped component

You're passing memoized values to other hooks (e.g., useEffect, useCallback)