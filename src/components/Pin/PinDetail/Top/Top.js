import classNames from "classnames/bind";

import styles from "./Top.module.scss";
const cx = classNames.bind(styles);

function Top() {
  return (
    <div className={cx("interaction-action")}>
      <div className={cx("interaction-action-btn")}>
        <div className={cx("action-left")}>
          <div className={cx("sharing")}>
            <i
              className={cx(
                "fa-sharp fa-solid fa-arrow-up-from-bracket",
                "icon"
              )}
            ></i>
          </div>
          <div className={cx("more-options")}>
            <i
              className={cx(
                "fa-solid fa-ellipsis-vertical fa-rotate-90",
                "icon"
              )}
            ></i>
          </div>
        </div>
        <div className={cx("action-right")}>
          <button className={cx("save-btn")}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Top;
