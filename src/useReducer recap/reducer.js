import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants"

const initState = {
    job: '',
    jobs: JSON.parse(localStorage.getItem('jobsReducerRecap')) ?? []
}

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
            localStorage.setItem('jobsReducerRecap', JSON.stringify(newAddJobs))
            return {
                ...state,
                jobs: newAddJobs
            }
        case DELETE_JOB:
            const newDeleteJobs = [...state.jobs]
            newDeleteJobs.splice(action.payload, 1)
            // Lưu localStorage
            localStorage.setItem('jobsReducerRecap', JSON.stringify(newDeleteJobs))
            return {
                ...state,
                jobs: newDeleteJobs
            }
            
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer