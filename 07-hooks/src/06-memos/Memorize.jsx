import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import Small from "./Small"

const Memorize = () => {
    const { counter, increase } = useCounter();
    const [show, setShow] = useState(true);

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">
                Counter: <Small value={counter.toString()} />
            </h1>

            <hr className="mb-4" />

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

export default Memorize;
