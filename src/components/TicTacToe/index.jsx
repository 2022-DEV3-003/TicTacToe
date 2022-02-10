import { useState } from 'react';
import { calculateWinner, calculateDraw } from '../../config';
import Board from '../Board'

function TicTacToe() {
  const [array, setArray] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)
  const isWinner = calculateWinner(array)
  const isDraw = calculateDraw(array)

  function handleClick(index) {
    // copy the state
    const arrayCopy = [...array]
    // check if there is a winner
    if (isWinner) return
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

  function handleRestart() {
    // set the turn to be X, as he always starts the game
    setXTurn(true)
    // empty the Array
    setArray(Array(9).fill(null))
  }

  return (
    <div>
      <Board onClick={handleClick} array={array}/>

      {!isWinner && !isDraw && <h2> It's {xTurn ? "X" : "O"}'s turn </h2>}

       <div className={(isWinner || isDraw) && "app__end"}>
         {isWinner && <p>The winner of this game is {!xTurn ? "X" : "O"}</p>}
         {isDraw && <p>The game ended in a draw!</p>}
         {(isWinner || isDraw) && (
           <button onClick={handleRestart}>Play again</button>
         )}
       </div>
    </div>
  )
}

export default TicTacToe