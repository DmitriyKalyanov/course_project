import React from "react";

const SearchStatus = ({users}) => {
    const changePhrase = () => {
        if (users.length < 5 && users.length > 1) {
            return `${users.length} человек тусанут с тобой сегодня`
        } else if (users.length === 0) {
            return 'Никто не тусанет с тобой сегодня :('
        } else {
            return `${users.length} человек тусанет с тобой сегодня`
        }
    }
    return <h1 className={`badge bg-${users.length > 0 ? "primary" : "danger"} m-2 fs-5`}>{changePhrase()}</h1>
}

export default SearchStatus