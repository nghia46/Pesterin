import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import styles from "./ImageCard.module.scss";
const cx = classNames.bind(styles);
function ImageCard({ artWork }) {
  const navigate = useNavigate();

  const handleClickImageCard = () => {
    navigate(`/pin/${artWork._id}`);
  };

  return (
    <div className={cx("image-card")}>
      <img
        loading="lazy"
        src={artWork.url}
        alt={`Artwork img`}
        className={cx("image-item")}
      />
      <div className={cx("image-card-label")} onClick={handleClickImageCard}>
        <div className={cx("save-action")} onClick={(e) => e.stopPropagation()}>
          <button className={cx("save-btn")}>Save</button>
        </div>
        <div className={cx("interact-action")}>
          <div className={cx("sharing")} onClick={(e) => e.stopPropagation()}>
            <i
              className={cx(
                "fa-sharp fa-solid fa-arrow-up-from-bracket",
                "icon"
              )}
            ></i>
          </div>
          <div
            className={cx("more-options")}
            onClick={(e) => e.stopPropagation()}
          >
            <i
              className={cx(
                "fa-solid fa-ellipsis-vertical fa-rotate-90",
                "icon"
              )}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
