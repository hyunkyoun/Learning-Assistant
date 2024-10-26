import React from "react";
import "./UserDetail.css";

const UserDetail = ({ user }) => {
    // Handle undefined user gracefully
    if (!user) {
      return <div className="user-detail">Detailed information is not available.</div>;
    }
  
    return (
      <div className="user-detail">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
    );
  };
  
  export default UserDetail;