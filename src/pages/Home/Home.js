import classNames from "classnames/bind";

import ImageCard from "~/components/Home/ImageCard";
import MainHeader from "~/layouts/MainHeader";

import { artworks } from "~/datas/artworkDatas";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home({ onLogout }) {
  return (
    <div className={cx("home-wrapper")}>
      <MainHeader onLogout={onLogout} />
      <div className={cx("home-container")}>
        <div className={cx("show-artworks-list")}>
          {artworks.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
