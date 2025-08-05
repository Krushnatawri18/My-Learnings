import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

const ChildC = React.memo(() => {
    console.log('ChildC rendered');
    const { theme, setTheme } = useContext(ThemeContext);
    const user = useContext(UserContext);

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    return (
        <div>
            <p>Hello from {user.name} as {theme} theme !</p>
            <div>
                <button onClick={toggleTheme}>Change theme</button>
            </div>
        </div>
    )
});

export default ChildC