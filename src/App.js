
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react"
import UseReducer from "./useReducer/ex7"
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

function App() {

  const initState = {
    job: '',
    jobs: JSON.parse(localStorage.getItem('jobsRedux1')) ?? []
  }

  const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case 'SET_JOB':
        return {
          ...state,
          job: action.payload
        }
      case 'ADD_JOB':
        const newAddJobs = [...state.jobs, action.payload]
        // Lưu localStorage
        localStorage.setItem('jobsRedux1', JSON.stringify(newAddJobs))
        return {
          ...state,
          jobs: newAddJobs
        }
      case 'DELETE_JOB':
        const newDeleteJobs = [...state.jobs]
        newDeleteJobs.splice(action.payload, 1)
        // Lưu localStorage
        localStorage.setItem('jobsRedux1', JSON.stringify(newDeleteJobs))
        return {
          ...state,
          jobs: newDeleteJobs
        }

      default:
        return state
    }
  }

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  )

  return (
    <Provider store={store}>
      <div className="App" style={{ padding: 50 }}>
        <UseReducer />
      </div>
    </Provider>
  );
}

export default App;
