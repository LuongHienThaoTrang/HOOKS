import { useReducer } from 'react'
import Context from './Context'
import reducer, { initState } from './reducer'
// Cách 1: Viết logger
import logger from './logger'

// Cách 2: cài npm use reducer logger vào: npm install logger-for-use-reducer
// import logger from 'logger-for-use-reducer';

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider