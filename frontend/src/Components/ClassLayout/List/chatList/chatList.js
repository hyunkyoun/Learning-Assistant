import React from 'react';
import "./chatList.css";
import AIAssistant from './AIAssistant';

const ChatList = ({ chats = [], onSelectChat = () => {} }) => {
    return (
        <div className="chat-list">
            <h4>Chats</h4>
            {chats.map((chat, index) => (
                <div key={index} className="chat-item" onClick={() => onSelectChat(chat)}>
                    {chat.title}
                </div>
            ))}
            <AIAssistant onClick = {onSelectChat}/>
        </div>
    );
  };
  
  export default ChatList;