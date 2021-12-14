import React from "react";
import SkinList from "./SkinList"
import ShirtList from "./ShirtList"
import "../css/ItemList.css";

function ItemList() {
    return (
        <div className="container-items">
            <SkinList />
            <ShirtList />            
        </div>
    )
}

export default ItemList;