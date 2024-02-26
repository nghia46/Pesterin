import React from "react";
import classNames from "classnames/bind";
import styles from "./Notifications.modules.scss";
const cx = classNames.bind(styles);
function Notifications() {
  return (
    <div className={cx("notification-wrapper")}>
      <div className={cx("notification-container")}>
        <div className={cx("notification-heading")}>
          <div className={cx("text")}>Notifications</div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
