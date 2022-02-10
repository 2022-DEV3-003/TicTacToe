import { useState } from 'react';
import { calculateWinner } from '../../config';
import Board from '../Board'

function TicTacToe() {
  const [array, setArray] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)
  const isWinner = calculateWinner(array)

  function handleClick(index) {
    // copy the state
    const arrayCopy = [...array]
    // check if there is a winner
    console.log(isWinner)
    // check if space is not already clicked
    if (arrayCopy[index] !== null) return
    // put an X or an O in the Array
    arrayCopy[index] = xTurn ? "X" : "O"
    // return value to the state
    setArray(arrayCopy)
    console.log(arrayCopy)
    // set the turn to X or O
    setXTurn(!xTurn)
  }

  return (
    <div>
      <Board onClick={handleClick} array={array}/>
    </div>
  )
}

export default TicTacToe