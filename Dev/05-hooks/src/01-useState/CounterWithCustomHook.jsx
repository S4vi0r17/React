import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {

  const { counter, increase, reset, decrease } = useCounter(10)

  return (
    <>
      <h1>CounterApp with custom Hook</h1>
      <br />

      <h2> Counter: {counter} </h2>

      <hr />

      <button
        onClick={decrease}
      >
        -1
      </button >

      <button
        onClick={reset}
      >
        reset
      </button >

      <button
        onClick={increase}
      >
        +1
      </button >
    </>
  )
}

export default CounterWithCustomHook
