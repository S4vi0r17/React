import PropTypes from 'prop-types'
import { useState } from 'react'

function CounterApp({ value }) {

  const [count, setCount] = useState(value)

  const handleAdd = () => {
    setCount(c => c + 1)
  }

  const handleReset = () => {
    setCount(value)
  }

  const handleSubtract = () => {
    setCount(c => c - 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{count}</h2>

      <div className='btn-container'>
        <button onClick={handleSubtract}>-1</button>
        <button aria-label='btn-reset' onClick={handleReset}>reset</button>
        <button onClick={handleAdd}>+1</button>
      </div>
    </>
  )
}

export default CounterApp

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
