import PropTypes from 'prop-types';

function CounterApp({ value }) {
    return (
        <>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
        </>
    )
}

export default CounterApp

CounterApp.propTypes = {
    // value: PropTypes.number.isRequired
    value: PropTypes.number // No es obligatorio
}

CounterApp.defaultProps = {
    value: 0
}