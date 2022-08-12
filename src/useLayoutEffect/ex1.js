import { useState, useEffect, useLayoutEffect } from "react";

function UseLayoutEffect() {
    const [count, setCount] = useState(0)

    // useEffect: nó sẽ đưa element vào DOM rồi mới gọi callback của useEffect 
    // useLayoutEffect: nó sẽ gọi callback của useLayoutEffect rồi mới đưa element vào DOM
    useLayoutEffect(() => {

        if (count > 3)
            setCount(0)        
        
    }, [count])

    const handleRun = () => {   
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>            
        </div>
    )
}

export default UseLayoutEffect



