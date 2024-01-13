import PropTypes from 'prop-types'
import { useState } from 'react'

function App({value}) {

  const [count, setCount] = useState(value)

  const handleAdd = () => {
    setCount( c => c + 1)
  }

  const handleReset = () => {
    setCount(value)
  }

  const handleSubtract = () => {
    setCount( c => c - 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{count}</h2>

      <div className='btn-container'>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleAdd}>+1</button>
      </div>
    </>
  )
}

export default App

App.propTypes = {
  value: PropTypes.number.isRequired
}