import React from "react";
import "../styles/sidebar.css";
import { filterDupes } from "../helpers/helpers";

const SideBar = props => {
  let userNames = filterDupes(props.chatPop);
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <ul className="nav">
          <li className="active">Chat Room Celebrities</li>
        </ul>
      </div>
      <div className="user-info">
        <div className="chat-pop-total">
          Number of Chat Norris Users: <span>{userNames.length}</span>
        </div>
        {userNames.map(user => {
          return (
            <div className="name">
              {user}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
