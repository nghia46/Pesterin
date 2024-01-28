import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Logo from "~/assets/images/logo.png";

import styles from "./Bottom.module.scss";
const cx = classNames.bind(styles);
function Bottom() {
  const textareaRef = useRef(null);

  const [inputComment, setInputComment] = useState("");
  const [textareaRows, setTextareaRows] = useState(1);

  useEffect(() => {
    // Automatically resize the textarea when the content is changed
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
    // Calculate the number of rows based on scrollHeight and clientHeight
    const extraLines =
      (textareaRef.current.scrollHeight - textareaRef.current.clientHeight) /
      20;
    const calculatedRows = Math.max(1, Math.ceil(extraLines));
    setTextareaRows(calculatedRows);
  }, [inputComment]);

  const handleContentChange = (e) => {
    setInputComment(e.target.value);
  };
  return (
    <div className={cx("interact")}>
      <div className={cx("comment-reaction")}>
        <div className={cx("number-of-comments")}>138 Comments</div>
        <div className={cx("reaction-container")}>
          <div className={cx("interact-react")}>
            <i className={cx("fa-regular fa-heart", "icon")}></i>
          </div>
        </div>
      </div>
      <div className={cx("input-comment")}>
        <div className={cx("user-avatar")}>
          <img src={Logo} alt="user-avt" className={cx("avatar")} />
        </div>
        <div className={cx("input-container")}>
          <textarea
            className={cx("input")}
            placeholder="Add a comment"
            onChange={handleContentChange}
            value={inputComment}
            rows={textareaRows}
            ref={textareaRef}
            autoFocus={true}
            spellCheck={false}
            autoComplete={false}
          ></textarea>
          {inputComment !== "" && (
            <div className={cx("send-comment-container")}>
              <div className={cx("send-comment-btn")}>
                <i className={cx("fa-solid fa-paper-plane-top", "icon")}></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bottom;
