import React from "react";
import "./style.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-list">
        <h2>Manage</h2>
        <ul>
          <li>
            <h5>Bookmarks</h5>
          </li>
        </ul>
      </div>

      <div className="sidebar-list">
        <h2>Discover</h2>
        <ul>
          <li>
            <h5>Business</h5>
          </li>
          <li>
            <h5>Sports</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SideBar };
