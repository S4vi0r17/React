import { useState } from "react";

const CounterApp = () => {
    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4">CounterApp</h1>

            <div className="mb-3">
                <h2>Counter1: <span className="badge bg-primary">{counter1}</span></h2>
                <h2>Counter2: <span className="badge bg-success">{counter2}</span></h2>
                <h2>Counter3: <span className="badge bg-warning text-dark">{counter3}</span></h2>
            </div>

            <hr />

            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-outline-primary mx-2"
                    onClick={() => setCounter(prev => ({ ...prev, counter1: counter1 + 1 }))}
                >
                    +1 Counter1
                </button>

                <button
                    className="btn btn-outline-success mx-2"
                    onClick={() => setCounter(prev => ({ ...prev, counter2: counter2 + 1 }))}
                >
                    +1 Counter2
                </button>

                <button
                    className="btn btn-outline-warning mx-2"
                    onClick={() => setCounter(prev => ({ ...prev, counter3: counter3 + 1 }))}
                >
                    +1 Counter3
                </button>
            </div>
        </div>
    );
};

export default CounterApp;
