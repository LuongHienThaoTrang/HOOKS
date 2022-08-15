
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer, createContext, useContext, useImperativeHandle } from "react"
import UseImperativeHandle from "./useImperativeHandle/ex1";

function App() {

  const videoRef = useRef()

    useEffect(() => {
        console.log(videoRef.current);
    })

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }
  
  return (
    <div className="App" style={{ padding: 50 }}>
      <UseImperativeHandle ref={videoRef}/><br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
