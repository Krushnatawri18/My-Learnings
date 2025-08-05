import './App.css'
import DataFetch from './components/DataFetch'
import Demo from './components/Demo'

function App() {

  const url = "https://jsonplaceholder.typicode.com/posts";

  return (
    <>
      <Demo />
      <DataFetch url={url} />
    </>
  )
}

export default App
