import { useRef, useState } from 'react'
import './App.css';



function App() {
  const inputRef = useRef(null); // useRef === used to only refer a value that we dont need to render
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);

  const plus = (e)=> {
    e.preventDefault()
    setResult((result)=> result + Number(inputRef.current.value));
  }
  const substract = (e)=> {
    e.preventDefault();
    setResult((result)=> result - Number(inputRef.current.value));
  }

  const multiply = (e)=> {
    e.preventDefault()
    setResult((result)=> result * Number(inputRef.current.value));
  }

  const divide = (e)=> {
    e.preventDefault()
    setResult((result)=> result / Number(inputRef.current.value));
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
        <button onClick={plus}>+</button>
        <button onClick={substract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={resetResult}>🔄Result</button>
        <button onClick={resetInput}>🔄Input</button>
      </form>
    </div>
  )
}

export default App
