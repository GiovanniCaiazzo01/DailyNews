import React from "react";
import "./style.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Il tuo Profilo</h1>
        <h3>Giovanni Caiazzo</h3>
      </div>
      <div className="profile-content">
        <div className="profile-content-item"></div>
      </div>
      <div className="profile-footer"></div>
    </div>
  );
};

export { Profile };
