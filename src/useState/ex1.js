
import { useState } from "react";

function UseState() {
    const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    // Cách 1: setState
    setCounter(counter + 1)

    // Cách 2: setState với callback
    // setCounter(prevCounter => prevCounter + 1)

  }
  // Component được re-render sau khi setState
  console.log('re-render');
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default UseState

