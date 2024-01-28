import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ImageCard.module.scss";
const cx = classNames.bind(styles);
function ImageCard({ image }) {
  return (
    <div className={cx("image-card")}>
      <img
        loading="lazy"
        src={image}
        alt={`Artwork img`}
        className={cx("image-item")}
      />
      <Link to="/pin" className={cx("image-card-label")}>
        <div className={cx("save-action")}>
          <button className={cx("save-btn")}>Save</button>
        </div>
        <div className={cx("interact-action")}>
          <div className={cx("sharing")}>
            <i
              className={cx(
                "fa-sharp fa-solid fa-arrow-up-from-bracket",
                "icon"
              )}
            ></i>
          </div>
          <div className={cx("more-options")}>
            <i
              className={cx(
                "fa-solid fa-ellipsis-vertical fa-rotate-90",
                "icon"
              )}
            ></i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ImageCard;
