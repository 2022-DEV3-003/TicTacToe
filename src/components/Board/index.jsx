import Button from '../Button'

function Board ({onClick}) {
    return(
      <div className='board'>
        <Button value="1" onClick={() => onClick(0)} />
        <Button value="2" onClick={() => onClick(1)} />
        <Button value="3" onClick={() => onClick(2)} />
        <Button value="4" onClick={() => onClick(3)} />
        <Button value="5" onClick={() => onClick(4)} />
        <Button value="6" onClick={() => onClick(5)} />
        <Button value="7" onClick={() => onClick(6)} />
        <Button value="8" onClick={() => onClick(7)} />
        <Button value="9" onClick={() => onClick(8)} />
      </div>
    )
}

export default Board