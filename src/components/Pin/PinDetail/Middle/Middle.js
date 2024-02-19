import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "../Comment";
import Logo from "~/assets/images/logo.png";

import styles from "./Middle.module.scss";
const desc = "#miffy #airpods #headphones";

const cx = classNames.bind(styles);
function Middle() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showComment, setShowComment] = useState(true);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  return (
    <div className={cx("information-content")}>
      <Link to="https://www.youtube.com/" className={cx("hyper-link")}>
        youtube.com
      </Link>
      <div className={cx("title")}>
        <Link className={cx("text")}>"miffy 33"</Link>
      </div>
      <div className={cx("description")}>
        <pre className={cx("text")}>
          {desc.length > 165
            ? showFullContent
              ? desc
              : desc.slice(0, 165)
            : desc}
          {desc.length > 165 && !showFullContent && (
            <>
              ....
              <button onClick={toggleContent} className={cx("see-more-btn")}>
                more
              </button>
            </>
          )}
        </pre>
      </div>
      <div className={cx("creator")}>
        <div className={cx("creator-information")}>
          <div className={cx("creator-avatar")}>
            <img src={Logo} alt="avatar" className={cx("avatar")} />
          </div>
          <div className={cx("creator-detail")}>
            <Link to="" className={cx("creator-name")}>
              Displate - prints on metal{" "}
            </Link>
            <div className={cx("followers")}>1.3M followers</div>
          </div>
        </div>
        <div className={cx("creator-follow")}>
          <button className={cx("follow-btn")}>Follow</button>
        </div>
      </div>
      <div className={cx("comment-wrapper")}>
        <div className={cx("comment-heading")} onClick={handleShowComment}>
          <div className={cx("text")}>Comments</div>
          <div
            className={
              showComment
                ? cx("show-comment", "show-comment-show")
                : cx("show-comment")
            }
          >
            <i className={cx("fa-solid fa-chevron-down", "icon")}></i>
          </div>
        </div>
        {/* <div className={cx("no-comment")}>
        No comments yet! Add one to start the conversation.
      </div> */}
        {showComment && (
          <div className={cx("comment-container")}>
            <Comment />
          </div>
        )}
      </div>
    </div>
  );
}

export default Middle;
