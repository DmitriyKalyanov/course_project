import React from 'react';
import PropTypes from 'prop-types';
import Qualitie from './qualitie';

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Qualitie key={qual._id} name={qual.name} color={qual.color} />
            ))}
        </>
    );
};
QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesList;
