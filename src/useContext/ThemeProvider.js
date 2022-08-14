import { useState } from 'react'
import { ThemeContext } from './ThemeContext'

function Provider({ children }) {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const data = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default Provider