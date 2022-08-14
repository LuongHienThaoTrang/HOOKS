
import { useState, useEffect, useLayoutEffect, useRef, memo, useCallback, useMemo, useReducer, createContext, useContext } from "react"
import Content from './useContext/Content';
import { ThemeContext } from "./useContext";
import './App.css'

function App() {
  const contextToggleTheme = useContext(ThemeContext)
  
  return (
    <div className="App" style={{ padding: 50 }}>
      <button onClick={contextToggleTheme.toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default App;
