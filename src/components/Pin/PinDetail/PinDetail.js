import classNames from "classnames/bind";
import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

import styles from "./PinDetail.module.scss";
const cx = classNames.bind(styles);

function PinDetail({ setShowReportPin }) {
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
        <Top setShowReportPin={setShowReportPin} />
        {/* Middle */}
        <Middle />
        {/* Bottom */}
        <Bottom />
      </div>
    </div>
  );
}

export default PinDetail;
