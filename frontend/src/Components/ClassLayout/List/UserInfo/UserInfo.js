import React from 'react'
import "./UserInfo.css"

const UserInfo = ({ user }) => {
    // Handle undefined user gracefully
    if (!user) {
      return <div className="user-info">User information is not available.</div>;
    }
  
    return (
      <div className="user-info">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        {/* Add other user info here if needed */}
      </div>
    );
  };
  
  export default UserInfo;