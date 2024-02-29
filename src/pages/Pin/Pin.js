import classNames from "classnames/bind";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import api from "~/services/apiService";
import { AuthContext } from "~/contexts/AuthContext";

import MainHeader from "~/layouts/MainHeader";
import PinDetail from "~/components/Pin/PinDetail";
import PinRelated from "~/components/Pin/PinRelated";
import ReportPin from "~/components/Pin/PinDetail/Top/MoreOptionsPin/ReportPin";

import styles from "./Pin.module.scss";

const cx = classNames.bind(styles);
function Pin({ onLogout }) {
  const location = useLocation();
  const { id } = useParams();
  const { userData } = useContext(AuthContext);

  const [pinInformation, setPinInformation] = useState();
  const [showReportPin, setShowReportPin] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchPinInformation = async () => {
      try {
        const response = await api.get(`/art/getArtworkById/${id}`);
        setPinInformation(response.data);
      } catch (error) {
        console.error("Error fetching pin information:", error);
      }
    };

    fetchPinInformation();
  }, [id]);
  return (
    <>
      {showReportPin && <ReportPin setShowReportPin={setShowReportPin} />}
      <div className={cx("pin-wrapper")}>
        <MainHeader onLogout={onLogout} />
        <div className={cx("pin-container")}>
          <div className={cx("pin-content-main")}>
            <PinDetail
              userData={userData}
              setShowReportPin={setShowReportPin}
              pinInformation={pinInformation}
            />
          </div>
          <div className={cx("pin-related-main")}>{/* <PinRelated /> */}</div>
        </div>
      </div>
    </>
  );
}

export default Pin;
