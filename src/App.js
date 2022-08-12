
import { useState, useEffect, useLayoutEffect, useRef, memo } from "react";
import ReactMemoHOC from "./memoHOC/ex1";


function App() {

  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)


  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleIncrease1 = () => {
    setCount1(count1 + 1)
  }

  console.log('render');


  return (
    <div className="App" style={{ padding: 50 }}>
      <ReactMemoHOC count={count} />
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <button onClick={handleIncrease}>Click me!</button>
      <button onClick={handleIncrease1}>Click me 1!</button>
    </div>
  );
}

export default App;
