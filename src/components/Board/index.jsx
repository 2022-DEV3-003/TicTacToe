import Button from '../Button'

function Board ({onClick, array}) {
    return(
      <div className='board'>
      {array.map((value, index) => (
         <Button key={index} value={value} onClick={() => onClick(index)} />
       ))}
      </div>
    )
}

export default Board