import React from 'react';
import s from "./SelectedItemInfo.module.css";

const ItemInformationHolder = ({name,count,setEditMode,weight}) => {
    return (
        <div className={s.ItemInfo} onClick={() => setEditMode(true)}>
            <div>Name: {name}</div>
            <div>Count: {count}</div>
            <div>Weight: {weight}g</div>
            <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
    );
};

export default ItemInformationHolder;