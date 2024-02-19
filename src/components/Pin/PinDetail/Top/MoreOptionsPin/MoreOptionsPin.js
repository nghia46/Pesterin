import React from "react";
import classNames from "classnames/bind";
import styles from "./MoreOptionsPin.module.scss";
const cx = classNames.bind(styles);
function MoreOptionsPin({ setShowReportPin }) {
  return (
    <div className={cx("more-options-wrapper")}>
      <div className={cx("more-options-container")}>
        <div className={cx("download")}>
          <div className={cx("text")}>Download image</div>
        </div>
        <div className={cx("hide")}>
          <div className={cx("text")}>Hide Pin</div>
        </div>
        <div className={cx("report")} onClick={() => setShowReportPin(true)}>
          <div className={cx("text")}>Report Pin</div>
        </div>
        <div className={cx("get-pin")}>
          <div className={cx("text")}>Get Pin embed code</div>
        </div>
      </div>
    </div>
  );
}

export default MoreOptionsPin;
