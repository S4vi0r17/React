import { useRef } from "react";

const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">
                Focus Screen
            </h1>
            <hr className="mb-4" />

            <div className="mb-3">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your name"
                />
            </div>

            <button
                className="btn btn-outline-primary btn-lg"
                onClick={onClick}
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen;
