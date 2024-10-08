import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement"

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [])

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    return (
        <>
            <h1>
                useCallback Hook: {counter}
            </h1>

            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}

export default CallbackHook