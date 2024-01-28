import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo.png";
import styles from "./Comment.module.scss";
import ReplyComment from "./ReplyComment";
import ReplyCommentInput from "./ReplyCommentInput";
const cx = classNames.bind(styles);
function Comment() {
  const [showReplyComment, setShowReplyComment] = useState(false);
  return (
    <div className={cx("comment-container-main")}>
      <div className={cx("comment-content")}>
        <div className={cx("user-avatar")}>
          <img src={Logo} alt="user-avatar" className={cx("avatar")} />
        </div>
        <div className={cx("content-main")}>
          <Link to="" className={cx("username")}>
            soph
          </Link>
          <div className={cx("comment")}>
            may i ask what laptop is that you have? may i ask what laptop is
            that you have? may i ask what laptop is that you have?
          </div>
          <div className={cx("comment-options")}>
            <div className={cx("create-at")}>11w</div>
            <div
              className={cx("reply")}
              onClick={() => setShowReplyComment(!showReplyComment)}
            >
              Reply
            </div>
            <div className={cx("reaction")}>
              <i className={cx("fa-regular fa-heart", "icon")}></i>
            </div>
            <div className={cx("more")}>
              <i
                className={cx(
                  "fa-solid fa-ellipsis-vertical fa-rotate-90",
                  "icon"
                )}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("reply-content")}>
        {showReplyComment && (
          <ReplyCommentInput
            showReplyComment={showReplyComment}
            setShowReplyComment={setShowReplyComment}
          />
        )}
        <ReplyComment />
      </div>
    </div>
  );
}

export default Comment;
