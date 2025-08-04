### Custom hooks
- Simple javascript functions that can use other hooks within them.
- Written in camel case and doesn't return any jsx else it will not defer with components.
- Can't work alone, need to be part of component.

### Notes
- Hooks are only called at the top level of a component or another custom hook.

- Hook functions always start with use.

eg.
```
function getColor() {
  // it doesn't start with 'use' so you wouldn't expect any react state here 
  const [color, setColor] = useState('blue'); // not allowed as React can't track it properly
  return color;
}
```

eg.
```
function useColor() {
  const [color, setColor] = useState('blue'); // right practice
  return color;
}
```

### Notes
- Custom hooks should be called at top of your component like in react function components or custom hook not in loops, conditions or nested functions.

eg.
```
function MyComponent() {
  function setup() {
    // not allowed in normal js function
    const [value, setValue] = useState(0);
  }

  setup();

  return <div>...</div>;
}
```

eg.
```
function MyComponent() {
  const [count, setCount] = useState(0); // valid

  useEffect(() => {
    // can also used here
  }, []);

  return <div>{count}</div>;
}
```

### Note
- Only functions that call React Hooks should start with use.

- If your function does NOT call any hooks, then don’t give it a name that starts with use.

eg.
```
// not allowed as it doesn't call any hooks
function useSorted(items) {
  return items.slice().sort();
}
```

eg.
```
// it's good as it doesn't call any hooks so can be used as normal js function
function getSorted(items) {
  return items.slice().sort();
}
```

### Note
- Custom Hooks let you share stateful logic, not state itself.

eg.
```
// Form.jsx
import { useFormInput } from './useFormInput.js';

export default function Form() {
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');

  // Each hook call gets its own isolated state like here for first name and last name
  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  );
}
```

eg.
```
// useFormInput.jsx
import { useState } from 'react';

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}
```

### Note
- You can pass reactive values from one Hook to another, and they stay up-to-date

- You can call one custom hook inside another, passing those reactive values (useState, props or values returned by other hooks) as arguments.

eg.
```
function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

function useIsMobile() {
  const width = useWindowWidth();
  return width < 768;
}
```