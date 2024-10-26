import React from 'react';
import './CommentBox.css';

const CommentBox = ({ user, text }) => (
  <div className="comment-box">
    <p><strong>{user}:</strong> {text}</p>
  </div>
);

export default CommentBox;