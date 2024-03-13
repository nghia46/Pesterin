import classNames from "classnames/bind";
import { useCallback, useContext, useState } from "react";
import { MessageContext } from "~/contexts/MessageContext";
import api from "~/services/apiService";
import styles from "./MessageInput.module.scss";
const cx = classNames.bind(styles);
function MessageInput({ socket, currentUser, currentChat, setMessages }) {
  const { setConversations } = useContext(MessageContext);
  const [newMessage, setNewMessage] = useState("");

  const handleChangeMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = useCallback(async () => {
    const { _id: conversationId, members } = currentChat;
    const { _id: senderId } = currentUser;

    const message = {
      conversationId,
      senderId,
      message: newMessage,
      seen: false,
      createdAt: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage("");
    const receiver = members.find((m) => m.user_id !== senderId);
    const receiverId = receiver.user_id;

    await socket.current.emit("sendMessage", {
      senderId,
      receiverId,
      message: newMessage,
    });
    try {
      const messageResponse = await api.post("/message/newMessage", message);
      const { conversations: newConversationResponse } = messageResponse.data;

      setConversations(newConversationResponse);
    } catch (error) {
      console.error(error);
    }
  }, [
    currentChat,
    currentUser,
    newMessage,
    socket,
    setConversations,
    setMessages,
  ]);

  const handleEnterSendMessage = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={cx("message-box-footer")}>
      <div className={cx("option-input")}>
        <div className={cx("plus")}>
          <i className={cx("fa-solid fa-circle-plus", "icon")}></i>
        </div>
        <div className={cx("image")}>
          <i className={cx("fa-regular fa-image", "icon")}></i>
        </div>
        <div className={cx("video")}>
          <i className={cx("fa-sharp fa-regular fa-circle-play", "icon")}></i>
        </div>
        <div className={cx("gif")}>
          <i className={cx("fa-solid fa-gif", "icon")}></i>
        </div>
      </div>
      <div className={cx("text-input")}>
        <input
          value={newMessage}
          type="text"
          placeholder="Aa"
          spellCheck={false}
          autoFocus={true}
          className={cx("input-chat")}
          onChange={handleChangeMessage}
          onKeyDown={handleEnterSendMessage}
        />

        <div className={cx("emoji")}>
          <i className={cx("fa-regular fa-face-smile", "icon-emoji")}></i>
        </div>
      </div>
      <div className={cx("send-chat")} onClick={handleSendMessage}>
        <i
          className={
            newMessage
              ? cx("fa-regular fa-paper-plane-top", "icon-send-active")
              : cx("fa-regular fa-paper-plane-top", "icon-send")
          }
        ></i>
      </div>
    </div>
  );
}

export default MessageInput;
