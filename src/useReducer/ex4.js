
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";
import { useSelector, useDispatch } from 'react-redux';

function UseReducer() {

    // Lấy ra state: useSelector
    const count = useSelector(state => state.count)

    // Lấy ra dispatch: useDispatch
    const dispatch = useDispatch()

    // dispatch action down
    const downDispatch = () => dispatch({
        type: 'DOWN_ACTION',
        payload: 1
    })

    // dispatch action up
    const upDispatch = () => dispatch({
        type: 'UP_ACTION',
        payload: 1
    })

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => downDispatch()}>Down</button>
            <button onClick={() => upDispatch()}>Up</button>
        </div>
    )
}

export default UseReducer
