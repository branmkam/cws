import './App.css';
import CWGrid from './components/CWGrid'
import Solver from './components/Solver'
import { useState, useEffect } from 'react'

function App() {
  //init blank grid
  let len = 15
  const [squares, setSquares] = useState(Array(len).fill(Array(len).fill('r ')))
  let squaresMutable = Array(len).fill(Array(len).fill(' '))

  function changeSquare(i, j, val) {
    squaresMutable[i][j] = val
    setSquares(squaresMutable)
  }

  return (
    <div className="App">
      <Solver />
      <CWGrid len={len} squares={squares} />
    </div>
  );
}

export default App;
