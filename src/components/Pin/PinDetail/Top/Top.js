import classNames from "classnames/bind";
import { useState } from "react";
import MoreOptionsPin from "./MoreOptionsPin";
import SharingPin from "./SharingPin";
import styles from "./Top.module.scss";
const cx = classNames.bind(styles);

function Top({ setShowReportPin }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const handleSavePin = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={cx("interaction-action")}
      onClick={() => {
        setShowMoreOptions(false);
        setShowShare(false);
      }}
    >
      <div className={cx("interaction-action-btn")}>
        <div className={cx("action-left")}>
          <div
            className={
              showShare ? cx("sharing", "sharing-show") : cx("sharing")
            }
            onClick={(e) => {
              e.stopPropagation();
              setShowShare(!showShare);
              setShowMoreOptions(false);
            }}
          >
            <i
              className={cx(
                "fa-sharp fa-solid fa-arrow-up-from-bracket",
                "icon"
              )}
            ></i>
          </div>
          <div
            className={
              showMoreOptions
                ? cx("more-options", "more-options-show")
                : cx("more-options")
            }
            onClick={(e) => {
              e.stopPropagation();
              setShowMoreOptions(!showMoreOptions);
              setShowShare(false);
            }}
          >
            <i
              className={cx(
                "fa-solid fa-ellipsis-vertical fa-rotate-90",
                "icon"
              )}
            ></i>
          </div>
        </div>
        {showMoreOptions && (
          <MoreOptionsPin setShowReportPin={setShowReportPin} />
        )}
        {showShare && <SharingPin />}
        <div className={cx("action-right")}>
          <button className={cx("save-btn")} onClick={handleSavePin}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Top;
