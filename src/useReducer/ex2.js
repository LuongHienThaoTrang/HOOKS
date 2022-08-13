
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";


const iniState = {
    count: 0
}

// const DOWN_ACTION = 'down'

const reducer = (state = iniState, action) => {
    switch (action) {
        case 'DOWN_ACTION':
            return {
                ...state,
                count: state.count - 1
            }
        case 'UP_ACTION':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            throw new Error('Invalid action')
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, iniState)

    const { count } = state


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch('DOWN_ACTION')}>Down</button>
            <button onClick={() => dispatch('UP_ACTION')}>Up</button>
        </div>
    )
}

export default UseReducer
