import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PinDetail from "~/components/Pin/PinDetail";
import PinRelated from "~/components/Pin/PinRelated";
import MainHeader from "~/layouts/MainHeader";
import styles from "./Pin.module.scss";

const cx = classNames.bind(styles);
function Pin() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className={cx("pin-wrapper")}>
      <MainHeader />
      <div className={cx("pin-container")}>
        <div className={cx("pin-content-main")}>
          <PinDetail />
        </div>
        <div className={cx("pin-related-main")}>
          <PinRelated />
        </div>
      </div>
    </div>
  );
}

export default Pin;
