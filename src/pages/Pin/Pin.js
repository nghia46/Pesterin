import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MainHeader from "~/layouts/MainHeader";
import PinDetail from "~/components/Pin/PinDetail";
import PinRelated from "~/components/Pin/PinRelated";
import ReportPin from "~/components/Pin/PinDetail/Top/MoreOptionsPin/ReportPin";
import styles from "./Pin.module.scss";

const cx = classNames.bind(styles);
function Pin({ onLogout }) {
  const location = useLocation();
  const [showReportPin, setShowReportPin] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {showReportPin && <ReportPin setShowReportPin={setShowReportPin} />}
      <div className={cx("pin-wrapper")}>
        <MainHeader onLogout={onLogout} />
        <div className={cx("pin-container")}>
          <div className={cx("pin-content-main")}>
            <PinDetail setShowReportPin={setShowReportPin} />
          </div>
          <div className={cx("pin-related-main")}>
            <PinRelated />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pin;
