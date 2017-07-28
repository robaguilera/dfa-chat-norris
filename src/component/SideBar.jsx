import React from "react";
import "../styles/sidebar.css";
import { removeDuplicatesBy } from "../helpers/helpers";

const SideBar = props => {
  let userNames = removeDuplicatesBy(x => x.user.name, props.chatPop);
  let counter = 1;
  userNames.forEach(x => {
    x.user.img = `./img/${x.user.name}.jpg`;
    x.user.id = counter;
    counter += 1;
  });
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="active">Chat Norris</span>
        <div className="chat-pop-total">
          Number of Chat Norris Users: <span>{userNames.length}</span>
        </div>
      </div>
      <div className="user-row">
        {userNames.map(user => {
          return (
            <div className="user-details" key={user.user.id}>
              <img src={user.user.img} alt="user image" />
              <div className="name">
                {user.user.name}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
