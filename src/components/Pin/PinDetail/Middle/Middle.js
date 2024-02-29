import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "~/services/apiService";

import Comment from "../Comment";

import styles from "./Middle.module.scss";

const cx = classNames.bind(styles);
function Middle({ pinInformation }) {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showComment, setShowComment] = useState(true);
  const [creator, setCreator] = useState();

  useEffect(() => {
    const fetchPinInformation = async () => {
      try {
        const response = await api.get(
          `/user/getUserById/${pinInformation.userId}`
        );
        // console.log(response.data);
        setCreator(response.data);
      } catch (error) {
        console.error("Error fetching pin information:", error);
      }
    };

    fetchPinInformation();
  }, [pinInformation.userId]);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  return (
    <div className={cx("information-content")}>
      {pinInformation.link && (
        <Link to={pinInformation.link} className={cx("hyper-link")}>
          {pinInformation.link}
        </Link>
      )}

      {pinInformation.title && (
        <div className={cx("title")}>
          <Link className={cx("text")}>{pinInformation.title}</Link>
        </div>
      )}
      {pinInformation.description && (
        <div className={cx("description")}>
          <pre className={cx("text")}>
            {pinInformation.description.length > 200
              ? showFullContent
                ? pinInformation.description
                : pinInformation.description.slice(0, 200)
              : pinInformation.description}
            {pinInformation.description.length > 200 && (
              <>
                {!showFullContent && (
                  <>
                    ....
                    <button
                      onClick={toggleContent}
                      className={cx("see-more-btn")}
                    >
                      more
                    </button>
                  </>
                )}
                {showFullContent && (
                  <>
                    ...
                    <button
                      onClick={toggleContent}
                      className={cx("see-more-btn")}
                    >
                      less
                    </button>
                  </>
                )}
              </>
            )}
          </pre>
        </div>
      )}

      {creator && (
        <div className={cx("creator")}>
          <div className={cx("creator-information")}>
            <div className={cx("creator-avatar")}>
              <img
                src={creator.avatar && creator.avatar}
                alt="avatar"
                className={cx("avatar")}
              />
            </div>
            <div className={cx("creator-detail")}>
              <Link
                to={`/creator/${creator._id}`}
                className={cx("creator-name")}
              >
                {creator.userName}
              </Link>
              <div className={cx("followers")}>1.3M followers</div>
            </div>
          </div>
          <div className={cx("creator-follow")}>
            <button className={cx("follow-btn")}>Follow</button>
          </div>
        </div>
      )}

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
