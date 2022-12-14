import './App.css'
import React, { useState } from 'react';

export default function App() {
  const [result, setResult] = useState('');

  const handleBtn = (e) => {
    setResult(result.concat(e.target.name))
  }

  const deleteBtn = (e) => {
    setResult(result.slice(0, -1));
  }

  const evaluate = () => {
    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult("Error")
    }
  }

  return (
    <>
      <div className="flex">
        <input type="text" value={result} />
        <div className="btn">
          <button onClick={() => setResult("")} name="clear"> AC </button>
          <button onClick={deleteBtn} name="del">C</button>
          <button onClick={handleBtn} name="/">/</button>
          <button onClick={handleBtn} name="*">x</button>
          <button onClick={handleBtn} name="-">-</button>
          <button onClick={handleBtn} name="+">+</button>
          <button onClick={handleBtn} name="7">7</button>
          <button onClick={handleBtn} name="8">8</button>
          <button onClick={handleBtn} name="9">9</button>
          <button onClick={handleBtn} name="4">4</button>
          <button onClick={handleBtn} name="5">5</button>
          <button onClick={handleBtn} name="6">6</button>
          <button onClick={handleBtn} name="1">1</button>
          <button onClick={handleBtn} name="2">2</button>
          <button onClick={handleBtn} name="3">3</button>
          <button onClick={handleBtn} name="0">0</button>
          <button onClick={handleBtn} name=".">.</button>
          <button onClick={evaluate} name="=">=</button>
        </div>
      </div>
    </>
  )
}
