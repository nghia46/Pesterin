import classNames from "classnames/bind";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "~/configs/firebase";
import styles from "./MoreOptionsPin.module.scss";
const cx = classNames.bind(styles);
function MoreOptionsPin({ pinInformation, setShowReportPin }) {
  const handleDownloadImage = () => {
    const storageRef = ref(storage, pinInformation.url);
    getDownloadURL(storageRef)
      .then((url) => {
        // Download the image as a blob
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = () => {
          const blob = xhr.response;

          // Create a temporary link to trigger the download
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "downloaded_image.jpg";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
        xhr.open("GET", url);
        xhr.send();
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error downloading image:", error);
      });
  };
  return (
    <div className={cx("more-options-wrapper")}>
      <div className={cx("more-options-container")}>
        <div className={cx("download")} onClick={handleDownloadImage}>
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
