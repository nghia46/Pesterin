import classNames from "classnames/bind";
import { images } from "~/datas/imageDatas";
import styles from "./SlideShowIdea.module.scss";
const cx = classNames.bind(styles);

function SlideShowIdea() {
  return (
    <div className={cx("gallery-wrapper")}>
      <div className={cx("content")}>
        <div className={cx("main-text")}>Get your own ideas</div>
        <div className={cx("explore")}>
          <button className={cx("explore-btn")}>Explore</button>
        </div>
      </div>
      <div className={cx("images-layout")}>
        {images.map((item, index) => (
          <div className={cx("image-card")} key={index}>
            <img src={item} alt="img" className={cx("image-item")} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideShowIdea;
