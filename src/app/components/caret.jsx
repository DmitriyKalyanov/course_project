import React from 'react';
import PropTypes from 'prop-types';
const Caret = ({ direction }) => {
    return (
        <>
            {direction === 'asc'
                ? <i className="bi bi-caret-up-fill"></i>
                : <i className="bi bi-caret-down-fill"></i>
            }
        </>
    );
};

Caret.propTypes = {
    direction: PropTypes.string.isRequired
};

export default Caret;
