### useTransition
- A React Hook that lets you render a part of the UI in the background.
- Help to manage UI responsiveness when updating state - especially during slow or expensive operations (filtering, sorting or rendering large lists).

eg.
```
const [isPending, startTransition] = useTransition()
```

useTransition does not take any parameters.

isPending - flag tells you whether there is pending transition.
startTransition - lets you mark updates as a transition as non-urgent.

startTransition(action) - action is something that updates some state, mostly setState(...) or functions/expensive operations that include setState(...).

startTransition - Delays those updates if the UI is busy(like typing) and they will run in background w/o blocking more imp updates. 

### Problem -
In React, when you update state, the UI re-renders synchronously. If the update is heavy (large list filtering), the input or user interaction can lag or become unresponsive.

### Note
- startTransition helps to call that function immediately but tells to React that any setState() calls inside that function are non-urgent(transition).
- Means function is called immediately, but the effect of the updates inside that function are delayed or deprioritized.
- Means
1. React schedules the updates right away, but

2. It doesn't rush to render them if the UI is busy.

- Means "Put this update on the slow lane. Handle it when you're free, but keep the app responsive for the user."

### Problem -

eg.
```
import React, { useState, useMemo } from 'react';

const generateNames = () => {
  return Array.from({ length: 1000 }, (_, i) => `Person ${i + 1}`);
};

const SlowSearch = () => {
  const allNames = useMemo(() => generateNames(), []);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(allNames);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Simulate slow filtering
    const now = performance.now();
    while (performance.now() - now < 200) {} // block for 300ms

    const lower = value.toLowerCase();
    const result = allNames.filter((name) => name.toLowerCase().includes(lower));
    setFiltered(result);
  };

  return (
    <div>
      <h2>Search List</h2>
      // issue in typing
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type a name..."
      />
      <ul>
        {filtered.slice(0, 50).map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlowSearch;
```

### Solution -

eg.
```
import React, { useState, useMemo, useTransition } from 'react';

const generateNames = () => {
    return Array.from({ length: 500 }, (_, i) => `Person ${i + 1}`);
};

const SlowSearch = () => {
    const allNames = useMemo(() => generateNames(), []);
    const [query, setQuery] = useState('');
    const [filtered, setFiltered] = useState(allNames);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        // Simulate slow filtering
        startTransition(() => {
          const lower = value.toLowerCase();

          // makes it non-urgent but start updating asap
          setTimeout(() => {
            const result = allNames.filter((name) =>
                name.toLowerCase().includes(lower)
            );
            setFiltered(result);
          }, 800);
        })
    };

    return (
        <div>
            <h2>Search List</h2>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Type a name..."
            />
            {isPending && <p style={{ color: 'orange' }}>Updating list...</p>}
            <br /><br />
            <ul>
                {filtered.slice(0, 50).map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SlowSearch;
```

### Working with setTimout

### Problem -

eg.
```
startTransition(() => {
  // React marks this as a non-urgent update
  setState('value 1');

  // This one is delayed — React will NOT treat it as a transition
  setTimeout(() => {
    setState('value 2'); // React sees this as an urgent update
  }, 100);
});
```

### Solution -

eg.
```
startTransition(() => {
  setState('value 1');

  setTimeout(() => {
    // wrap again — now React knows this is a transition too
    startTransition(() => {
      setState('value 2');
    });
  }, 100);
});
```

### Working with async/await

### Problem -

eg.
```
startTransition(async () => {
  const result = await fetchData(); // <-- Pause here
  setState(result); // <-- Happens later, after the pause
});
```

is basically doing this

```
startTransition(() => {
  fetchData().then((result) => {
    setState(result); // <- This runs outside the original startTransition context
  });
});
```

### Solution -

eg.
```
startTransition(async () => {
  // Start a non-urgent (low-priority) update
  const result = await fetchData();

  // After 'await', React loses the original transition context.
  // So this setState won't be treated as part of the transition.

  // To fix that, re-wrap the update in another startTransition
  // This tells React: "Hey, this update is still non-urgent."
  startTransition(() => {
    setState(result);
  });
});

```

