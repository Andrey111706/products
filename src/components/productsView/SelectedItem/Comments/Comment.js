import React from 'react';
import style from './Comment.module.css'


const Comment = (props) => {
    return (
        <div className={style.messageHolder}>
            <div className={style.titleItems}>ID:{props.id}</div>
            <div className={style.titleItems}>{props.date}</div>
            <div>{props.description}</div>
            <div className={style.deleteButton} onClick={()=>props.deleteMessage(props.id)}>X</div>
        </div>
    );
};

export default Comment;