import { useState } from 'react';
import Board from '../Board'

function TicTacToe() {
  const [array, setArray] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)
  console.log(array)

  function handleClick() {
    console.log(xTurn ? "het is aan X" : "het is aan O")
    setXTurn(!xTurn)
  }

  return (
    <div>
      <Board />
      <button onClick={() => handleClick()}>Click me!</button>
    </div>
  )
}

export default TicTacToe