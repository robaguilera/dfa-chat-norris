import React from "react";
import "../styles/chatpanel.css";

const ChatPanel = props => {
  return (
    <aside className="chat-panel">
      <div className="room-header">
        <div className="chat-room-name">
          <div className="chat-details">
            <div className="population" />
          </div>
        </div>
      </div>
      <div className="chat-room">
        {props.archivedMsgs.map(msg => {
          return (
            <div className="chat-container">
              <div className="msg-content">
                <div className="name">
                  {msg.personName}:
                </div>
                <div className="msg">
                  <p>{msg.chatMessage}</p>
                </div>
                <div className="date">
                  {msg.dateCreated}
                </div>
              </div>
            </div>
          );
        })}
        <div className="current-population">
          <div className="user-name" />
        </div>
      </div>
    </aside>
  );
};

export default ChatPanel;
