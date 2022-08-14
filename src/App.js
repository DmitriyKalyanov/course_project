import React, {useState} from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {
       const usersArray = users.filter((user) => {
          return user._id !== userId
        })

        setUsers(usersArray)
    }

    const handleToggleBookMark = (id) => {
        const newArray = users.map((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark
            }
            return user
        })
        setUsers(newArray)
    }

    return <div>
        <SearchStatus users={users} />
        <Users users={users} onDelete={handleDelete} onBookmark={handleToggleBookMark}/>
    </div>
}

export default App