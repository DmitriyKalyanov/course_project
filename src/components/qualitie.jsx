import React from "react";

const Qualitie = ({user}) => {
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

    return <td>{renderQualities(user.qualities)}</td>
}

export default Qualitie