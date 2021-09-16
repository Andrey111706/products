import s from "./../Chat.module.css"
import {NavLink} from "react-router-dom"
import React from "react";

const ChatUsersItems = (props) => {
    return (
        <div  className={s.chatItems}>
            {props.chatUsersData.map(function (item) {
            return <NavLink to={"/chat/" + item.id} id={item.id} name={item.name} key={item.id}>{item.name}</NavLink>
        })}
        </div>)
}
export default ChatUsersItems;