import React from 'react';
import './AIAssistant.css';

const AIAssistant = (onSelectChat = () => {}) => {
  return (
    <div className="ai-assistant" onClick={onSelectChat}>
      <h5>AI Learning Assistant</h5>
    </div>
  );
};

export default AIAssistant;