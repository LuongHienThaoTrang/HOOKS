
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";
// Cách 1: Tạo file logger.js
import logger from './logger'

// Cách 2: cài npm use reducer logger vào: npm install logger-for-use-reducer
// import logger from 'logger-for-use-reducer';

const initState = {
    job: '',
    jobs: JSON.parse(localStorage.getItem('jobsReducer')) ?? []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'


const setJob = payload => ({
    type: SET_JOB,
    payload
})

const addJob = payload => ({
    type: ADD_JOB,
    payload
})

const deleteJob = payload => ({
    type: DELETE_JOB,
    payload
})

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            const newAddJobs = [...state.jobs, action.payload]
            // Lưu localStorage
            localStorage.setItem('jobsReducer', JSON.stringify(newAddJobs))
            return {
                ...state,
                jobs: newAddJobs
            }
        case DELETE_JOB:
            const newDeleteJobs = [...state.jobs]
            newDeleteJobs.splice(action.payload, 1)
            // Lưu localStorage
            localStorage.setItem('jobsReducer', JSON.stringify(newDeleteJobs))
            return {
                ...state,
                jobs: newDeleteJobs
            }
            
        default:
            throw new Error('Invalid action')
    }
}


function UseReducer() {
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

export default UseReducer
