import { useState } from 'react'
import Card from './components/Card'
import './App.css'

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
