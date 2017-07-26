import React from "react";
import "../styles/chatTextArea.css";

const ChatTextArea = props => {
  return (
    <div className="user-textarea">
      <textarea
        id="user"
        placeholder="Message"
        onKeyDown={props.captureUserInput}
      />
    </div>
  );
};

export default ChatTextArea;
