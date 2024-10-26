import React from 'react';


const CommentBox = ({user, text}) => {
    return (
        <div styles = {{
            padding: '8px',
            margin: '5px 0',
            borderBottom: '1px solid #eee',
            backgroundColor: '#fff',
            borderRadius: '4px',
        }}>
            <p><strong>{user}</strong> {text}</p>
        </div>
    );
};