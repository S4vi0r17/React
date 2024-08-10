import PropTypes from 'prop-types';

const App = ({ title, subtitle, name }) => (
    <div>
        <h1 data-testid="test-title">{title}</h1>
        <h2>{subtitle}</h2>
        <p>Hello, {name}!</p>
    </div>
);

export default App;

App.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    name: PropTypes.string,
};

App.defaultProps = {
    title: 'Hello World',
    subtitle: 'Welcome to the world of React',
    name: 'Stranger',
};
