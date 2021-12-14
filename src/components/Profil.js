import React from "react";
import "../Profil.css";
import AvatarList from "./AvatarList"

import ItemList from "./ItemList";


function Profil() {
    return (
        <div className="container-profil">
            <h2>PROFIL</h2>
            <div className="container-avatar-choice">

                <AvatarList />

                <ItemList />

                <button>VALIDER</button>
            </div>
        </div>
    )
}

export default Profil;