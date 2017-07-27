import React from "react";
import ChatTextArea from "./ChatTextArea";
import "../styles/chatpanel.css";

const ChatPanel = props => {
  return (
    <div className="chat-wrapper">
      <aside className="chat-panel" id="chat">
        <div className="chat-room">
          {props.archivedMsgs.map(msg => {
            return (
              <div className="chat-container" key={msg.id}>
                <div className="msg-content">
                  <div className="name">
                    {msg.personName}:
                  </div>
                  <div className="msg">
                    <p>
                      {msg.chatMessage}
                    </p>
                  </div>
                  <div className="date">
                    {msg.dateCreated}
                  </div>
                </div>
              </div>
            );
          })}
          {props.newMsgs.map(msg => {
            return (
              <div className="chat-container" key={msg.id}>
                <div className="msg-content">
                  <div className="name">
                    {msg.personName}:
                  </div>
                  <div className="msg">
                    <p>
                      {msg.chatMessage}
                    </p>
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
      <ChatTextArea captureUserInput={props.captureUserInput} />
    </div>
  );
};

export default ChatPanel;
