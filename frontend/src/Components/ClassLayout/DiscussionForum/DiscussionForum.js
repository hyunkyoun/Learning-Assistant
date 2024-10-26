import React, { useState , useEffect} from 'react';
import "./DiscussionForum.css";
import CommentBox from './CommentBox';

const Discussion = () => {
    const[messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
    };

    useEffect(() => {
        const interval = setInterval(() => {
          fetchMessages();
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);
    
      const handlePostMessage = async (e) => {
        e.preventDefault();
        if (!newMessage) return;
    
        try {
          await fetch('/api/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: "Student", text: newMessage }),
          });
    
          setNewMessage('');
          fetchMessages();
        } catch (error) {
          console.error("Error posting message:", error);
        }
      };

    return (
    <div className="discussion-forum">
      <h3>Discussion Forum</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <CommentBox key={index} user={msg.user} text={msg.text} />
        ))}
      </div>
      <form onSubmit={handlePostMessage} className="message-input">
        <textarea
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Discussion