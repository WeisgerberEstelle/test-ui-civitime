import React from "react";
import "../css/ItemList.css";
import skin from "../assets/skin.svg";
import color1 from "../assets/color-FCD7B8.svg";
import color2 from "../assets/color-E0A39A.svg"
import color3 from "../assets/color-FCCC84.svg"
import color4 from "../assets/color-533724.svg"
import Skin from "./Skin"

const skins = [
    { path: skin },
    { path: color1 },
    { path: color2 },
    { path: color3 },
    { path: color4 },
];

function SkinList() {
    return (
        <div className="container-skin-list">
            {skins.map((skin, index) => (
                <Skin
                    path={skin.path}
                />
            ))}
        </div>
    )
}

export default SkinList;