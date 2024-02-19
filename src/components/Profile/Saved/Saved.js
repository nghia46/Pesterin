import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { artworks } from "~/datas/artworkDatas";
import FilterIcon from "~/assets/images/filter.png";
import Plus from "~/assets/images/plus.png";
import styles from "./Saved.module.scss";
import ImageCard from "~/components/Home/ImageCard";
const cx = classNames.bind(styles);
function Saved() {
  return (
    <div className={cx("saved-content-wrapper")}>
      <div className={cx("save-content-options-container")}>
        <div className={cx("save-content-options")}>
          <div className={cx("left")}>
            <img src={FilterIcon} alt="icon" className={"icon"} />
          </div>
          <Link to="/pin-creation-tool" className={cx("right")}>
            <img src={Plus} alt="icon" className={"icon"} />
          </Link>
        </div>
      </div>
      <div className={cx("save-content-artwork-container")}>
        {/* <div className={cx("save-content-artwork-list")}>
          {artworks.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </div> */}
        <div className={cx("no-artwork-list")}>
          <div className={cx("no-artwork-list-content")}>
            <div className={cx("text")}>You haven't saved any Pins yet</div>
            <Link to="/" className={cx("find-ideas-action")}>
              <div className={cx("text")}>Find ideas</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
