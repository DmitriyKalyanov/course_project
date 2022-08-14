import React from "react";
import Qualitie from "./qualitie"
import Bookmark from "./bookmark"

const User = ({user, onDelete, onBookmark}) => {
    return <tr key={user._id}>
                <td>{user.name}</td>
                <Qualitie user={user}/>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate + '/5'}</td>
                <Bookmark bookmark={user.bookmark} onBookmark={onBookmark} id={user._id}/>
                <td>
                    <button     
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(user._id)}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
}

export default User