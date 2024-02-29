import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Reaction from "./Reaction";
import ReactionUI from "./ReactionUI";

import Haha from "~/assets/images/haha.png";
import Love from "~/assets/images/love.png";
import Wow from "~/assets/images/wow.png";

import styles from "./Bottom.module.scss";
const cx = classNames.bind(styles);
const validReactions = ["Love", "Haha", "Thank", "GoodIdea", "Wow"];
function Bottom({ userData }) {
  const textareaRef = useRef(null);

  const [inputComment, setInputComment] = useState("");
  const [textareaRows, setTextareaRows] = useState(1);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showReactions, setShowReactions] = useState(false);
  const [mouseIsOver, setMouseIsOver] = useState(false);

  useEffect(() => {
    let timeout;

    if (mouseIsOver) {
      timeout = setTimeout(() => {
        setShowReactions(true);
      }, 800);
    } else {
      clearTimeout(timeout);
      setShowReactions(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [mouseIsOver, setShowReactions]);

  const handleReactionClick = (reactionContent) => {
    setSelectedReaction(reactionContent);
  };
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

  const handleDefaultClickReaction = () => {
    if (validReactions.includes(selectedReaction)) {
      setSelectedReaction(null);
    } else {
      setSelectedReaction("Love");
    }
  };
  return (
    <div className={cx("interact")}>
      <div className={cx("comment-reaction")}>
        <div className={cx("number-of-comments")}>138 Comments</div>
        <div className={cx("reaction-container")}>
          <div className={cx("number-of-reactions")}>
            <div className={cx("list-icon")}>
              <img src={Love} alt="icon" className={cx("icon-love")} />
              <img src={Haha} alt="icon" className={cx("icon-haha")} />
              <img src={Wow} alt="icon" className={cx("icon-wow")} />
            </div>
            <div className={cx("number")}>1k</div>
          </div>
          <div
            className={cx("interact-react")}
            onMouseEnter={() => setMouseIsOver(true)}
            onMouseLeave={() => setMouseIsOver(false)}
            onClick={handleDefaultClickReaction}
          >
            <ReactionUI selectedReaction={selectedReaction} />
            {showReactions && (
              <Reaction
                setMouseIsOver={setMouseIsOver}
                handleReactionClick={handleReactionClick}
              />
            )}
          </div>
        </div>
      </div>
      <div className={cx("input-comment")}>
        <div className={cx("user-avatar")}>
          <img
            src={userData.avatar && userData.avatar}
            alt="user-avt"
            className={cx("avatar")}
          />
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
