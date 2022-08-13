
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo } from "react";


function UseReducer() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Down</button>
            <button onClick={() => setCount(count + 1)}>Up</button>
        </div>
    )
}

export default UseReducer
