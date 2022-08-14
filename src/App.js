
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer, createContext, useContext } from "react"
import { addJob, deleteJob, setJob, useStore } from './context-useReducer'

function App() {
  const [state, dispatch] = useStore()

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
    <div className="App" style={{ padding: 50 }}>
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
  );
}

export default App;
