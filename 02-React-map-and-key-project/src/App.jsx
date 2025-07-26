import { useState } from 'react';
import './App.css'

function App() {

  const defaultUsers = [
    {
      id: 1,
      name: 'Krushna'
    },
    {
      id: 2,
      name: 'Ayush'
    },
    {
      id: 3,
      name: 'Nikhil'
    },
    {
      id: 4,
      name: 'Abhishek'
    },
  ];

  const [users, setUsers] = useState(defaultUsers);

  const handleClick = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Key in Map</h2>
      
      {/* without key in map, if a user is removed, React might recreate the whole list unnecessarily, because it can’t track which item changed.  */}
      {/* if you add unique key, then it doesn't mount that component again as every element has unique key so if i 
      delete any of the element then still it work as every element has unique id so no need to mount  */}
      {
        users.map((user, index) => {
          return <button key={index} style={{ margin: '1rem 0rem' }} onClick={() => handleClick(user.id)}>
            {user.name}
          </button>
        })
      }
    </div>
  )
}

export default App
