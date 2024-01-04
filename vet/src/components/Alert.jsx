import PropTypes from 'prop-types';

function Alert({ message, isError }) {
  return (
    <div className={`text-white text-center py-3 mb-3 px-4 rounded-md font-bold uppercase ${isError ? 'bg-red-500' : 'bg-green-500'}`}>
      {message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default Alert;