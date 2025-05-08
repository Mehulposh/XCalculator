import { useState } from 'react'

import './App.css'


const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"];

function App() {
  const [expresion, setExpresion] = useState('');
  const[result,setResult] = useState(null);
  

  const handleClick = (value) => {
    if(value === 'C') {
      setExpresion('');
      setResult(null);
    }
    else if(value === '=') {
      try {
        if(expresion.trim() === ''){
          setResult('Error');
        }
        else{
          const evaluation = eval(expresion);
          setResult(evaluation);
        }
      }
      catch (error) {
        setResult('Error');
        console.error('Error evaluating expression:', error);
      }
        
  }
  else{
    setExpresion((prev) => prev + value);
  }
  };



  return (
    <div className='calculator'>
    <h1>React Calculator</h1>
    <input type="text" value={expresion} readOnly className="input-bar" />
    <div className="result">{result !== null ? result : ""}</div>
    <div className='buttons'>
      {buttons.map((button) => (
        <button key={button} onClick={() => handleClick(button)}>{button}</button>
      ))}
    </div>
       
    </div>
  )

}

export default App
