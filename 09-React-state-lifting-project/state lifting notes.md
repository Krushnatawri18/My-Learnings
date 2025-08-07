### State Lifting
- Moving the state up to the closest common ancestor of the components that need to share or update it.
- Helps child to synchronize between each others and with parent.

### Problem -

eg.
```
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h2>State Lifting</h2>
      </div>
      <Card />
      <Card />
    </>
  )
}

export default App
```

```
import { useState } from "react"

// card manages its own state independently 
// no sync between cards or with parent
const Card = () => {
    const [name, setName] = useState('Alexendar');

    return (
        <>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <p>Card value : {name}</p>
        </>
    )
}

export default Card
```

### Solution -

eg.
```
import { useState } from 'react'
import Card from './components/Card'
import './App.css'

// App is single source of truth(read and update state for name)
function App() {
  const [name, setName] = useState('Alexandar')

  return (
    <>
      <div>
        <h2>State Lifting</h2>
      </div>
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
      <div>
        <p>Parent component value : {name}</p>
      </div>
    </>
  )
}

export default App
```

```
// cards get synchronized with each other and parent
// parent will know if any changes made in child 
const Card = (props) => {
    return (
        <>
            <input type='text' value={props.name} onChange={(e) => props.setName(e.target.value)} />
            <p>{props.title} value : {props.name}</p>
        </>
    )
}

export default Card
```

### Note
- When to use - when multiple components need to read and write same piece of code or if any duplicated state is there.

### Problem -

eg.
```
// here we want that when we show one panel then another panel should not show anything
// but here child are not in sync leading to issues
import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
```

### Solution -

eg.
```
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
```

### Difference between State lifting and Prop drilling

### State lifting
- Sharing states between siblings.
- Only state and setState are passed.
- Not passed in tree structure.

### Prop drilling
- Passing data deep down in tree.
- Any prop can be passed.

### Note
- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.
- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).