import React from "react";

const BookMark = ({bookmark, onBookmark, id}) => {
    return <td onClick={() => onBookmark(id)}>
        {bookmark 
            ? <i className="bi bi-bookmark-star-fill" style={{fontSize: '1.5rem'}}></i> 
            : <i className="bi bi-bookmark-star" style={{fontSize: '1.5rem'}}></i>
        }
    </td>
}

export default BookMark