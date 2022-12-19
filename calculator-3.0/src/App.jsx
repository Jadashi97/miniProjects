import { useState } from 'react'
import './App.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Calculator 3.0</h1>
      <form action="">
        <label>
          Input Number:
        </label>
        <input/>
        <br/>
        <label htmlFor="operator">Operator</label>

      </form>

    
    </div>
  )
}

export default App
