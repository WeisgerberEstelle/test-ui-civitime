import React from "react";
import "../AvatarList.css";
import woman from '../assets/woman.svg';
import man from '../assets/man.svg';
import Avatar from "./Avatar"

const avatars = [{ path: man }, { path: woman }];

function AvatarList() {
    return (
        <div className="container-avatar-list">
            <h3>Lequel de ces  deux avatars préférez-vous?</h3>
            <div className="container-avatar">
            {avatars.map((avatar, index) => (
                <Avatar
                path={avatar.path}
                />
            ))}
            </div>

        </div>
    )
}

export default AvatarList;
