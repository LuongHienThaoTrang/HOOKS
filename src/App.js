import { useState } from 'react';
import Content from './useState/ex10';


function App() {
  const [show, setShow] = useState(false)
  
  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <div className="App" style={{ padding: 50 }}>
      <button onClick={handleToggle}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
