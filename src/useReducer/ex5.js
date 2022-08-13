
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";

function UseReducer() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const jobsStorage = JSON.parse(localStorage.getItem('jobs'))
        return jobsStorage ?? []
    })
    const inputRef = useRef()

    const handleSubmit = () => {
        if (job !== '') {
            setJobs(prev => {
                const newJobs = [...prev, job]

                // Lưu localStorage
                localStorage.setItem('jobs', JSON.stringify(newJobs))

                return newJobs
            })
            setJob('')
            inputRef.current.focus()
        }
    }

    const handleDelete = index => { 
        jobs.splice(index, 1)
        const newJobs = [...jobs]

        // Lưu localStorage
        localStorage.setItem('jobs', JSON.stringify(newJobs))

        setJobs(newJobs)
    }

    return (
        <div>
            <h3>Todo</h3>
            <input 
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => handleDelete(index)}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseReducer
