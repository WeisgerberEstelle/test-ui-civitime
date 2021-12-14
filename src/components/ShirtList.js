import React from "react";
import "../ItemList.css";
import shirt from "../assets/t-shirt.svg";
import color2 from "../assets/color-88C10F.svg";
import color1 from "../assets/color-B2C7C7.svg";
import color3 from "../assets/color-FF1414.svg";
import color4 from "../assets/color-striped.svg";


import Shirt from "./Shirt"

const shirts = [
    { path: shirt },
    { path: color1 },
    { path: color2 },
    { path: color3 },
    { path: color4 },
];

function ShirtList() {
    return (
        <div className="container-shirt-list">
            {shirts.map((shirt, index) => (
                <Shirt
                    path={shirt.path}
                />
            ))}
        </div>
    )
}

export default ShirtList;