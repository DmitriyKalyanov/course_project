import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserName = ({ user }) => {
    return <Link to={`/users/${user._id}`}>{user.name}</Link>;
};
UserName.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserName;
