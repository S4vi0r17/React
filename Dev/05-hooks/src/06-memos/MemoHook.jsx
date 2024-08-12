import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Here we go...')
    }

    return `${iterations} iterations done!`
}

const MemoHook = () => {
    const { counter, increase } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">
                Counter: <small className="text-muted">{counter}</small>
            </h1>

            <hr className="mb-4" />

            {show && <p className="text-info">{memoHeavyProcess}</p>}

            <div className="d-flex justify-content-center gap-3">
                <button
                    className="btn btn-outline-primary"
                    onClick={increase}
                >
                    +1
                </button>

                <button
                    className="btn btn-outline-secondary"
                    onClick={() => setShow(!show)}
                >
                    Show/Hide {JSON.stringify(show)}
                </button>
            </div>
        </div>
    )
}

export default MemoHook;
