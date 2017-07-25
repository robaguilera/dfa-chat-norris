import React from "react";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <ul className="nav">
          <li>Requests</li>
          <li className="active">Messages</li>
          <li>Friends</li>
        </ul>
      </div>
      <div className="user-msg">
        <img src="" alt="" className="user" />
        <div className="msg-content">
          <div className="name" />
          <div className="msg" />
          <div className="date" />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
