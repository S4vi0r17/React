import React from "react";

const ShowIncrement = React.memo(({ increment }) => {

    console.log('Show increment');

    return (
        <button
            className="btn btn-primary"
            onClick={() => { increment(5) }}
        >
            Increment
        </button>
    )
})

ShowIncrement.displayName = 'ShowIncrement';

export default ShowIncrement
