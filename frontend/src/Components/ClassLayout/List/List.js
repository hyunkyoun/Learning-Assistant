import React from "react";
import ChatList from "./chatList/chatList";
import "./List.css";
import UserInfo from "./UserInfo/UserInfo";

const List = () => {
    return(
        <div className ="list">
            <UserInfo/>
            <ChatList/>
        </div>
    )
}

export default List