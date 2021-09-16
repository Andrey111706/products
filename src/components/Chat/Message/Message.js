import s from "./../Chat.module.css"
import React from "react";


let Message = (props) => {

    return (
        props.chatMessageData.map(function (item) {
            let {id, message, my} = item;
            return (
                <div className={s.message}>
                    <div className={`${s.userInfo} ${my === true ? s.myMessage : s.notMyMessage}`}
                         id={id} key={id}>
                        <div className={s.userName}>Толя Постебайло</div>
                    </div>

                    <div className={s.userText}>{message}</div>

                </div>
            )
        }))

}
export default Message;
