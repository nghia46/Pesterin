import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import api from "~/services/apiService";

import Reaction from "./Reaction";
import ReactionUI from "./ReactionUI";

import Haha from "~/assets/images/haha.png";
import Love from "~/assets/images/love.png";
import Wow from "~/assets/images/wow.png";

import styles from "./Bottom.module.scss";
import { fetchGetCommentByArtId } from "~/services/commentService";
const cx = classNames.bind(styles);
const validReactions = ["Love", "Haha", "Thank", "GoodIdea", "Wow"];
function Bottom({
  userData,
  pinInformation,
  setListComments,
  setLoadingShowListComment,
}) {
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

  const handleCommentChange = (e) => {
    setInputComment(e.target.value);
  };

  const handleDefaultClickReaction = () => {
    if (validReactions.includes(selectedReaction)) {
      setSelectedReaction(null);
    } else {
      setSelectedReaction("Love");
    }
  };

  const handleSendComment = () => {
    const commentData = {
      artId: pinInformation._id,
      author: {
        userId: userData._id,
        userName: userData.userName,
        avatar: userData.avatar,
      },
      commentContent: inputComment,
    };
    api
      .post(`/comment/post`, commentData)
      .then((response) => {
        setInputComment("");
        callApiGetAllComments();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleKeyDownComment = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendComment();
    }
  };

  const callApiGetAllComments = async () => {
    setLoadingShowListComment(true);
    try {
      const commentList = await fetchGetCommentByArtId(pinInformation._id);
      setListComments(commentList);
      setLoadingShowListComment(false);
    } catch (error) {
      console.error("Error fetching creator information:", error);
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
            onChange={handleCommentChange}
            onKeyDown={handleKeyDownComment}
            value={inputComment}
            rows={textareaRows}
            ref={textareaRef}
            autoFocus={true}
            spellCheck={false}
          ></textarea>
          {inputComment !== "" && (
            <div className={cx("send-comment-container")}>
              <div
                className={cx("send-comment-btn")}
                onClick={handleSendComment}
              >
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
