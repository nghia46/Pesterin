import classNames from "classnames/bind";

import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

import styles from "./PinDetail.module.scss";
const cx = classNames.bind(styles);

function PinDetail() {
  return (
    <div className={cx("pin-detail")}>
      {/* Image */}
      <div className={cx("pin-image")}>
        <img
          src="https://i.pinimg.com/564x/65/78/00/657800609a7e92bb5eff2bc93d8406a1.jpg"
          alt="pin-img"
          className={cx("image")}
        />
      </div>
      {/* Content */}
      <div className={cx("pin-detail-information")}>
        {/* Top */}
        <Top />
        {/* Middle */}
        <Middle />
        {/* Bottom */}
        <Bottom />
      </div>
    </div>
  );
}

export default PinDetail;
