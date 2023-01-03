import { useRef, useState } from 'react'
import './App.css';



function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e)=> {
    e.preventDefault()
    setResult((result)=> result + Number(inputRef.current.value))
  }


  const resetInput = (e)=>{
    e.preventDefault()
    inputRef.current.value = 0;
  }

  const resetResult = (e)=> {
    e.preventDefault()
    setResult((prevVal)=> prevVal * 0)
  }


  return (
    <div className="App">
      <h1>Calculator 3.0</h1>
      <form action="">
        <p>{result}</p>
        <input
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type number'
        />
        <br />
        <button>add</button>
        <button onClick={resetResult}>reset Result</button>
        <button>{resetInput}</button>

      </form>
    </div>
  )
}

export default App
