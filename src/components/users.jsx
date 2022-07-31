import React, { useState } from "react";
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (usersId) => {

    }

    const renderPhrase = () => {
        return users.map((user) => {
          return  <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.profession.name}</td>
                <td>{renderQualities(user.qualities)}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate + '/5'}</td>
                <td>
                    <button     
                        type="button"
                        className="btn btn-danger btn-sm"
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        })
    }

    const renderQualities = (qualities) => {
        return qualities.map((quality) => (
                <span
                    key={quality._id}
                    className={`badge bg-${quality.color} m-1`}
                >
                    {quality.name}
                </span>
            )
        )
    }

    return (
        <React.Fragment>
            <h1 className="badge bg-primary m-2 fs-5">12 человек тусанет с тобой сегодня</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="">Имя</th>
                        <th className="">Качества</th>
                        <th className="">Профессия</th>
                        <th className="">Встретился, раз</th>
                        <th className="">Оценка</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderPhrase()}
                </tbody>
            </table>
        </React.Fragment>
    )

}

export default Users