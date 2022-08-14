

import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react"
import { useSelector, useDispatch } from 'react-redux';

function UseReducer() {

    const inputRef = useRef()

    // Lấy ra state: useSelector
    const job = useSelector(state => state.job)
    const jobs = useSelector(state => state.jobs)

    // Lấy ra dispatch: useDispatch
    const dispatch = useDispatch()

    // dispatch action setJob 
    const setJob = payload => ({
        type: 'SET_JOB',
        payload
    })

    // dispatch action addJob 
    const addJob = payload => ({
        type: 'ADD_JOB',
        payload
    })

    // dispatch action deleteJob 
    const deleteJob = payload => ({
        type: 'DELETE_JOB',
        payload
    })

    const handleSubmit = () => {
        if (job !== '') {
            dispatch(addJob(job))
            dispatch(setJob(''))
            inputRef.current.focus()
        }
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
                        <span onClick={() => dispatch(deleteJob(index))} style={{ marginLeft: 10 }}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseReducer
