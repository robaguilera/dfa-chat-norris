import React from "react";

const SideBar = () => {
  return (
    <aside>
      <div className="sidebar-header">
        <ul>
          <li>Requests</li>
          <li>Messages</li>
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
