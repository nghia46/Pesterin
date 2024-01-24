import { Switch } from "antd";
import classNames from "classnames/bind";

import styles from "./MoreOptions.module.scss";
const cx = classNames.bind(styles);
function MoreOptions({
  isCheckedAds,
  isCheckedComment,
  isCheckedSimilar,
  setIsCheckedAds,
  setIsCheckedComment,
  setIsCheckedSimilar,
}) {
  const handleChangeAds = (checked) => {
    setIsCheckedAds(checked);
  };
  const handleChangeComment = (checked) => {
    setIsCheckedComment(checked);
  };
  const handleChangeSimilar = (checked) => {
    setIsCheckedSimilar(checked);
  };
  return (
    <div className={cx("more-options-content")}>
      <div className={cx("option-ads")}>
        <Switch
          checked={isCheckedAds}
          onChange={handleChangeAds}
          style={{
            background: isCheckedAds ? "#e60023" : "#efefef",
          }}
        />
        <div className={cx("text")}>Allow ads</div>
      </div>
      <div className={cx("option-comment")}>
        <Switch
          checked={isCheckedComment}
          onChange={handleChangeComment}
          style={{
            background: isCheckedComment ? "#e60023" : "#efefef",
          }}
        />
        <div className={cx("text")}>Allow people to comment</div>
      </div>
      <div className={cx("option-show-similar")}>
        <Switch
          checked={isCheckedSimilar}
          onChange={handleChangeSimilar}
          style={{
            background: isCheckedSimilar ? "#e60023" : "#efefef",
          }}
        />
        <div className={cx("content")}>
          <div className={cx("main-text")}>Show similar products</div>
          <div className={cx("sub-text")}>
            <div className={cx("text")}>
              People can shop products similar to what's shown in this Pin using
              visual search
            </div>
            <div className={cx("text")}>
              Shopping recommendations aren't available for Idea ads and Pins
              with tagged products or paid partnership label
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreOptions;
