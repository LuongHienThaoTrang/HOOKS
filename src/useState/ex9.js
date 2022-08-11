
import { useState, useRef } from "react";

function UseState() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const jobStorage = JSON.parse(localStorage.getItem('TODOLIST'))
        return jobStorage ?? []
    })
    const inputRef = useRef()


    const handleSubmit = () => {
        if (job !== '') {
            setJobs(prev => {
                const newJobs = [...prev, job]
                localStorage.setItem('TODOLIST', JSON.stringify(newJobs))
                return newJobs
            })
            setJob('')
            inputRef.current.focus()
        }
    }

    const handleDelete = index => {
        jobs.splice(index, 1)
        const newJobs = [...jobs]
        setJobs(newJobs)
        localStorage.setItem('TODOLIST', JSON.stringify(newJobs))
    }

    return (
        <div>
            <h3>Todo List</h3>
            <input
                ref={inputRef} 
                placeholder="Enter todo..."
                value={job}
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

export default UseState