
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";
import UseReducer from "./useReducer/ex4";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

function App() {

  const initState = {
    count: 0
  }

  const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case 'DOWN_ACTION':
        return {
          ...state,
          count: state.count - action.payload
        }
      case 'UP_ACTION':
        return {
          ...state,
          count: state.count + action.payload
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
