
import { useState } from 'react'
import UseEffect from "./useEffect/ex6";

function App() {
  const [show, setShow] = useState(false)
  
  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <div className="App" style={{ padding: 50 }}>
      <button onClick={handleToggle}>Toggle</button>
      {show && <UseEffect />}
    </div>
  );
}

export default App;
