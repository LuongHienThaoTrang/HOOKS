import { useState, useEffect, useLayoutEffect, useRef } from "react";

function UseRef() {
    const [count, setCount] = useState(60)
    
    const timerId = useRef()
    const prevCount = useRef() //prevCount lần đầu undefined
    const h1Ref = useRef() //lấy ra h1Ref element

    useEffect(() => {
        // láy ra prevCount
        prevCount.current = count
    }, [count])

    useEffect(() => {
     console.log(h1Ref.current);   
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log('Start -> ', timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('Stop -> ', timerId.current);
    }

    // Lấy ra prevCount, count
    console.log(count, prevCount.current);

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>       
            <button onClick={handleStop}>Stop</button>        
        </div>
    )
}

export default UseRef