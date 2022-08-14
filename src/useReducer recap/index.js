
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import reducer, { initState } from './reducer'

// Cách 1: Tạo file logger.js
import logger from './logger'

// Cách 2: cài npm use reducer logger vào: npm install logger-for-use-reducer
// import logger from 'logger-for-use-reducer';

function UseReducerRecap() {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        if (job !== '') {
            dispatch(addJob(job))
            dispatch(setJob(''))
            inputRef.current.focus()
        }
    }

    const handleDelete = index => {
        dispatch(deleteJob(index))
    }
    
    return (
        <div>
            <h3>Todo</h3>
            <input 
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => handleDelete(index)} style={{ marginLeft: 10 }}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseReducerRecap