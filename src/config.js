// This code I copied from the official react documentation https://reactjs.org/tutorial/tutorial.html#declaring-a-winner
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

// Test if this code actually works

// const squares = ["X", null, null, null, null, null, null, "X", "X"]
// console.log(calculateWinner(squares))

export function calculateDraw(squares) {
  if (squares.includes(null)) {
    return false
  } else {
    return true
  }
}

// Test if code works

// const squares = ["X", "O", "O", "O", "O", "O", "O", null, "X"]
// console.log(calculateDraw(squares))
