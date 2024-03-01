import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { fetchCreatorInformation } from "~/services/creatorService";

import Comment from "../Comment";

import styles from "./Middle.module.scss";
import { fetchGetCommentByArtId } from "~/services/commentService";

const cx = classNames.bind(styles);
function Middle({
  userData,
  pinInformation,
  listComments,
  setListComments,
  loadingShowListComment,
  setLoadingShowListComment,
}) {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showComment, setShowComment] = useState(true);
  const [creator, setCreator] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorData = await fetchCreatorInformation(
          pinInformation.userId
        );
        setCreator(creatorData);
      } catch (error) {
        console.error("Error fetching creator information:", error);
      }
    };

    fetchData();
  }, [pinInformation.userId]);

  useEffect(() => {
    setLoadingShowListComment(true);
    const fetchData = async () => {
      try {
        const commentList = await fetchGetCommentByArtId(pinInformation._id);
        setListComments(commentList);
        setLoadingShowListComment(false);
      } catch (error) {
        console.error("Error fetching creator information:", error);
      }
    };

    fetchData();
  }, [pinInformation._id, setListComments, setLoadingShowListComment]);

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
          <div className={cx("text")}>{pinInformation.title}</div>
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
          {creator._id === userData._id ? (
            <>
              <div className={cx("creator-self-information")}>
                <div className={cx("note-text")}>Note to self</div>
                <div className={cx("sub-note-text")}>
                  What do you want to remember about this Pin?
                </div>
              </div>
              <div className={cx("creator-add-note")}>
                <button className={cx("add-note-btn")}>Add note</button>
              </div>
            </>
          ) : (
            <>
              <div className={cx("creator-information")}>
                <div className={cx("creator-avatar")}>
                  <img
                    src={creator?.avatar}
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
            </>
          )}
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

        {showComment &&
          (listComments.length > 0 ? (
            loadingShowListComment ? (
              <div className={cx("comment-loading")}>
                <ClipLoader
                  size={40}
                  color="#e60023"
                  className={cx("loading-spinner")}
                />
              </div>
            ) : (
              <div className={cx("comment-container")}>
                {listComments.map((comment) => (
                  <Comment
                    key={comment._id}
                    userData={userData}
                    comment={comment}
                  />
                ))}
              </div>
            )
          ) : (
            <div className={cx("no-comment")}>
              No comments yet! Add one to start the conversation.
            </div>
          ))}
      </div>
    </div>
  );
}

export default Middle;
