import React from "react";
import "../styles/sidebar.css";
import { removeDuplicatesBy } from "../helpers/helpers";

const SideBar = props => {
  let userNames = removeDuplicatesBy(x => x.user.name, props.chatPop)
  let counter = 1;
  userNames.forEach(x => {
    x.user.id = counter;
    counter += 1
  });
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <ul className="nav">
          <li className="active">Chat Norris</li>
        </ul>
      </div>
      <div className="user-info">
        <div className="chat-pop-total">
          Number of Chat Norris Users: <span>{userNames.length}</span>
        </div>
        {userNames.map(user => {
          return (
            <div className="name" key={user.user.id}>
              {user.user.name}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
