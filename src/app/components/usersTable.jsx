import React from 'react';
import PropTypes from 'prop-types';
import BookMark from './bookmark';
import QualitiesList from './qualitiesList';
import Table from './table';
import UserName from './userName';

const UserTable = ({
    users,
    onToggleBookMark,
    onDelete,
    onSort,
    selectedSort
}) => {
    const columns = {
        name: {
            path: 'name',
            name: 'Имя',
            component: (user) => <UserName user={user} />
        },
        qualities: {
            name: 'Качества',
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: {
            path: 'completedMeetings',
            name: 'Встретился, раз'
        },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};
UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default UserTable;
