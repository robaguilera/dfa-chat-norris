import React from "react";
import "../styles/chatTextArea.css";

const ChatTextArea = props => {
  return (
    <div className="user-textarea">
      <input
        id="user"
        type="text"
        placeholder="Message"
        onKeyDown={props.captureUserInput}
      />
    </div>
  );
};

export default ChatTextArea;
