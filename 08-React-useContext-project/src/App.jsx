import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({
    id: 1,
    name: 'Kanha'
  });

  const contextValue = {theme};

  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme, contextValue }}>
          <div id='container' style={{ backgroundColor: theme === 'light' ? "beige" : "black", color: theme === 'light' ? 'black' : 'white' }}>
            <ChildA />
            <button onClick={() => setTheme(theme  => theme)}>Trigger re-render</button>
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
export { ThemeContext, UserContext }
