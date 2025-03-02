import { memo } from 'react';
import PropTypes from 'prop-types';

const Small = memo(({ value }) => {
    console.log('dibujo Small');

    return (
        <small className="text-muted fs-5">{value}</small>
    )
});

Small.displayName = 'Small';

Small.propTypes = {
    value: PropTypes.string.isRequired
};

export default Small;
