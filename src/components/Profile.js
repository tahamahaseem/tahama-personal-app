import React from "react";

import "./Profile.css";

export const Profile = (children) => {
    return (
        <div className="profile-bar">
            <div className="profile-image">
                <img src={children.image} />
            </div>
        </div>
    )

}