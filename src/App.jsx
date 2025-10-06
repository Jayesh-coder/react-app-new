import Home from "./Home.jsx"
import { ThemeContext } from "./ThemeContext.js"
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState('light');
  function handleToggleDarkMode() {
    if (darkMode === 'light') setDarkMode('dark');
    else setDarkMode('light');
  }
  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={darkMode}>
          <Home toggleDarkMode={handleToggleDarkMode} />
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
