
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer } from "react";
import { connect } from 'react-redux';

function UseReducer({ count, downAction, upAction }) {

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => downAction()}>Down</button>
            <button onClick={() => upAction()}>Up</button>
        </div>
    )
}

const mapStateToProps = state => ({
    count: state.count
})

const mapDispatchToProps = dispatch => ({
    downAction: () => {
        dispatch({
            type: 'DOWN_ACTION',
            payload: 1
        })
    },
    upAction: () => {
        dispatch({
            type: 'UP_ACTION',
            payload: 1
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UseReducer)
