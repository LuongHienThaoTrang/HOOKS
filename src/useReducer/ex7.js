

import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";
import { connect } from 'react-redux';

function UseReducer({ job, jobs, setJob, addJob, deleteJob }) {

    const inputRef = useRef()

    const handleSubmit = () => {
        if (job !== '') {
            addJob(job)
            setJob('')
            inputRef.current.focus()
        }
    }
    
    return (
        <div>
            <h3>Todo</h3>
            <input
                value={job} 
                ref={inputRef}
                placeholder="Enter todo..."
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => deleteJob(index)} style={{ marginLeft: 10 }}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    job: state.job,
    jobs: state.jobs
})

const mapDispatchToProps = dispatch => {
    return {
        setJob: e => {
            dispatch({
                type: 'SET_JOB',
                payload: e
            })
        },
        addJob: job => {
            dispatch({
                type: 'ADD_JOB',
                payload: job
            })
        },
        deleteJob: index => {
            dispatch({
                type: 'DELETE_JOB',
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseReducer)
