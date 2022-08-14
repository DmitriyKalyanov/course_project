import React from "react";
import User from "./user";

const Users = ({users, onDelete, onBookmark}) => {

    const renderPhrase = () => {
        return users.map((user) => {
          return <User user={user} onDelete={onDelete} onBookmark={onBookmark}/>
        })
    }

    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Качества</th>
                        <th>Профессия</th>
                        <th>Встретился, раз</th>
                        <th>Оценка</th>
                        <th>Избранное</th>
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