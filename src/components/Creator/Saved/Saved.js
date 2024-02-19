import React from "react";
import classNames from "classnames/bind";
import { artworks } from "~/datas/artworkDatas";
import ImageCard from "~/components/Home/ImageCard";
import styles from "./Saved.module.scss";
const cx = classNames.bind(styles);
function Saved() {
  return (
    <div className={cx("save-content-artwork-container")}>
      <div className={cx("save-content-artwork-list")}>
        {artworks.map((image, index) => (
          <ImageCard image={image} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Saved;
