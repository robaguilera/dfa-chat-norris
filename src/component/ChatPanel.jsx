import React from "react";

const ChatPanel = () => {
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
        <div className="chat">
          <div className="msg-content">
            <div className="name" />
            <div className="msg" />
            <div className="date" />
          </div>
        </div>
        <div className="current-population">
          <div className="user-name" />
        </div>
      </div>
    </aside>
  );
};

export default ChatPanel;
