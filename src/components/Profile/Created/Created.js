import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import ImageCard from "~/components/Home/ImageCard";
import { artworks } from "~/datas/artworkDatas";
import styles from "./Created.module.scss";
const cx = classNames.bind(styles);
function Created() {
  return (
    <div className={cx("created-content-wrapper")}>
      {/* No create */}
      <div className={cx("no-created-content")}>
        <div className={cx("text")}>
          Nothing to show...yet! Pins you create will live here.
        </div>
        <Link to="/pin-creation-tool" className={cx("create-pin-action")}>
          <div className={cx("text")}>Create Pin</div>
        </Link>
      </div>
      {/* Create list */}
      {/* <div className={cx("created-content-artwork-list-container")}>
        <div className={cx("created-content-artwork-list")}>
          {artworks.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Created;
