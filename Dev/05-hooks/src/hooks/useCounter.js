import { useState } from 'react'

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increase = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return {
        counter,
        increase,
        reset,
        decrease
    }
}