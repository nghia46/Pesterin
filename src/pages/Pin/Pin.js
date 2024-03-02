import classNames from "classnames/bind";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { fetchPinInformationById } from "~/services/artService";
import { AuthContext } from "~/contexts/AuthContext";

import MainHeader from "~/layouts/MainHeader";
import PinDetail from "~/components/Pin/PinDetail";
// import PinRelated from "~/components/Pin/PinRelated";
import ReportPin from "~/components/Pin/PinDetail/Top/MoreOptionsPin/ReportPin";

import styles from "./Pin.module.scss";

const cx = classNames.bind(styles);
function Pin({ onLogout }) {
  const location = useLocation();
  const { id } = useParams();
  const { userData } = useContext(AuthContext);

  const [pinInformation, setPinInformation] = useState();
  const [showReportPin, setShowReportPin] = useState(false);
  const [loadingShowPinInformation, setLoadingShowPinInformation] =
    useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setLoadingShowPinInformation(true);
    const fetchData = async () => {
      try {
        const pinData = await fetchPinInformationById(id);
        setPinInformation(pinData);
        setLoadingShowPinInformation(false);
      } catch (error) {
        console.error("Error fetching pin information:", error);
        setLoadingShowPinInformation(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {showReportPin && (
        <ReportPin
          userData={userData}
          pinInformation={pinInformation}
          setShowReportPin={setShowReportPin}
        />
      )}
      <div className={cx("pin-wrapper")}>
        <MainHeader onLogout={onLogout} />
        <div className={cx("pin-container")}>
          <div className={cx("pin-content-main")}>
            <PinDetail
              userData={userData}
              setShowReportPin={setShowReportPin}
              pinInformation={pinInformation}
              loadingShowPinInformation={loadingShowPinInformation}
            />
          </div>
          <div className={cx("pin-related-main")}>{/* <PinRelated /> */}</div>
        </div>
      </div>
    </>
  );
}

export default Pin;
