import React from "react";
import classNames from "classnames/bind";
import styles from "./MessageBox.module.scss";
import ContentMessage from "./ContentMessage";
const cx = classNames.bind(styles);
function MessageBox({ messages, currentUser }) {
  return (
    <div className={cx("message-box-container")}>
      {messages
        .slice()
        .reverse()
        .map((message, index) => (
          <ContentMessage
            key={index}
            message={message}
            own={message.senderId === currentUser._id}
          />
        ))}
    </div>
  );
}

export default MessageBox;
