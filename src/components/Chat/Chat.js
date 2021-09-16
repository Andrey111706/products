import React from "react";
import s from "./Chat.module.css"
import ChatUsersItems from "./ChatUsersItem/ChatUsersItems";
import Message from "./Message/Message";

import ChatNewMessageReduxForm from "./messageInputForm";


const Chat = (props) => {
    let addMessageToDialog = (values) => {
        props.AddMessage(values.text)
    }


    return (
        <div className={s.chatContainer}>
            <div className={s.chatList}>
                <ChatUsersItems chatUsersData={props.chatUsersData}/>
            </div>
            <div className={s.chatContent}>
                <div className={s.messagesHolder}>
                    <Message chatMessageData={props.chatMessageData} />
                </div>
                <div>
                    <ChatNewMessageReduxForm onSubmit={addMessageToDialog}/>
                </div>
            </div>

        </div>
    )
}


export default Chat;