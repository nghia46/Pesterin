import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from "./ReplyCommentInput.module.scss";
const cx = classNames.bind(styles);
function ReplyCommentInput({ showReplyComment, setShowReplyComment }) {
  const textareaRef = useRef(null);
  const [replyContent, setReplyContent] = useState("");
  const [textareaRows, setTextareaRows] = useState(1);

  const handleContentChange = (e) => {
    setReplyContent(e.target.value);
  };

  useEffect(() => {
    if (showReplyComment) {
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
    }
  }, [replyContent, showReplyComment]);
  return (
    <div className={cx("reply-input")}>
      <div className={cx("comment-input")}>
        <textarea
          className={cx("input")}
          placeholder="Reply"
          onChange={handleContentChange}
          value={replyContent}
          rows={textareaRows}
          ref={textareaRef}
          autoFocus={true}
        ></textarea>
      </div>
      <div className={cx("reply-input-action")}>
        <div
          className={cx("cancel-btn")}
          onClick={() => setShowReplyComment(false)}
        >
          Cancel
        </div>
        <button
          className={
            replyContent === ""
              ? cx("save-btn")
              : cx("save-btn", "save-btn-active")
          }
          disabled={replyContent === ""}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ReplyCommentInput;
