import './App.css';
import React from 'react'

function App() {
  const [count, setCount] = React.useState(714)

  function add() {
    setCount(prevCount => prevCount + 225)
  }

  function subtract() {
    setCount(prevCount => prevCount - 225 )
  }
  
  return (
    <div className="counter">
      <button className='counter--minus' onClick={subtract}>-</button>
      <div className='counter--count'>
        <h1>{count}</h1>
      </div>
      <button className='counter--plus' onClick={add}>+</button>
    </div>
  );
}

export default App;