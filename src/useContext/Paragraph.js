import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {
    const contextTheme = useContext(ThemeContext)

    return (
        <p className={contextTheme.theme}>
            Context provides a way to pass data through the component tree without having to pass props down manually at every level.
        </p>
    )
}

export default Paragraph