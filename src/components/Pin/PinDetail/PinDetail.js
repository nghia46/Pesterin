import classNames from "classnames/bind";
import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

import styles from "./PinDetail.module.scss";
const cx = classNames.bind(styles);

function PinDetail({ userData, setShowReportPin, pinInformation }) {
  return (
    <>
      {pinInformation && (
        <div className={cx("pin-detail")}>
          {/* Image */}
          <div className={cx("pin-image")}>
            <img
              src={pinInformation.url}
              alt="pin-img"
              className={cx("image")}
            />
          </div>
          {/* Content */}
          <div className={cx("pin-detail-information")}>
            {/* Top */}
            <Top setShowReportPin={setShowReportPin} />
            {/* Middle */}
            <Middle pinInformation={pinInformation} />
            {/* Bottom */}
            <Bottom userData={userData} />
          </div>
        </div>
      )}
    </>
  );
}

export default PinDetail;
