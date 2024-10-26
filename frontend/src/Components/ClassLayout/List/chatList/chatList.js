import React from 'react';
import "./chatList.css"

const ChatList = ({ chats = [], onSelectChat = () => {} }) => {
    return (
      <div className="chat-list">
        <h4>Chats</h4>
        {chats.length === 0 ? (
          <p>No chats available</p>
        ) : (
          chats.map((chat, index) => (
            <div
              key={index}
              className="chat-item"
              onClick={() => onSelectChat(chat)}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectChat(chat);
              }}
            >
              {chat.title}
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default ChatList;