import Button from '../Button'

function Board () {
    return(
      <div className='board'>
        <Button value="1" onClick={() => console.log(0)} />
        <Button value="2" onClick={() => console.log(1)} />
        <Button value="3" onClick={() => console.log(2)} />
        <Button value="4" onClick={() => console.log(3)} />
        <Button value="5" onClick={() => console.log(4)} />
        <Button value="6" onClick={() => console.log(5)} />
        <Button value="7" onClick={() => console.log(6)} />
        <Button value="8" onClick={() => console.log(7)} />
        <Button value="9" onClick={() => console.log(8)} />
      </div>
    )
}

export default Board