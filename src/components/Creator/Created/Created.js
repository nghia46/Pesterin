import React from "react";
import classNames from "classnames/bind";
import { artworks } from "~/datas/artworkDatas";
import ImageCard from "~/components/Home/ImageCard";
import styles from "./Created.module.scss";
const cx = classNames.bind(styles);
function Created() {
  return (
    <div className={cx("create-content-artwork-container")}>
      <div className={cx("create-content-artwork-list")}>
        {artworks.map((image, index) => (
          <ImageCard image={image} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Created;
