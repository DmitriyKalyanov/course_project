import React from 'react';
import PropTypes from 'prop-types';

const BookMark = ({ status, onClick }) => {
    // console.log(status);
    // console.log(rest);
    return (
        <button onClick={onClick}>
            <i className={'bi bi-bookmark' + (status ? '-heart-fill' : '')}></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default BookMark;
