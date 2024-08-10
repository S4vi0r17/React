import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
    const { counter, increase, reset, decrease } = useCounter(10);

    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4">CounterApp with Custom Hook</h1>
            <h2 className="mb-3">Counter: {counter}</h2>
            <hr />

            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-danger mx-2"
                    onClick={decrease}
                >
                    -1
                </button>

                <button
                    className="btn btn-secondary mx-2"
                    onClick={reset}
                >
                    Reset
                </button>

                <button
                    className="btn btn-success mx-2"
                    onClick={increase}
                >
                    +1
                </button>
            </div>
        </div>
    );
};

export default CounterWithCustomHook;
