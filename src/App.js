
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback } from "react";
import UseCallback from "./useCallback/ex1";

function App() {

  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  console.log('re-render');

  return (
    <div className="App" style={{ padding: 50 }}>
      <UseCallback onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
