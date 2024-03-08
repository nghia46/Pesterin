import classNames from "classnames/bind";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { fetchPinInformationById } from "~/services/artService";
import { AuthContext } from "~/contexts/AuthContext";
import { fetchFeatureByUserId } from "~/services/packageService";

import MainHeader from "~/layouts/MainHeader";
import PinDetail from "~/components/Pin/PinDetail";
// import PinRelated from "~/components/Pin/PinRelated";
import ReportPin from "~/components/Pin/PinDetail/Top/MoreOptionsPin/ReportPin";

import styles from "./Pin.module.scss";
import NoPackagePopup from "~/components/Popup/NoPackagePopup";
import ExtendPackagePopup from "~/components/Popup/ExtendPackagePopup";
import UpgradePackagePopup from "~/components/Popup/UpgradePackagePopup";

const cx = classNames.bind(styles);
function Pin({ onLogout }) {
  const location = useLocation();
  const { id } = useParams();
  const { userData } = useContext(AuthContext);

  const [pinInformation, setPinInformation] = useState();
  const [feature, setFeature] = useState();

  const [showReportPin, setShowReportPin] = useState(false);
  const [showNotifyNoPackage, setShowNotifyNoPackage] = useState(false);
  const [showNotifyUpgradePackage, setShowNotifyUpgradePackage] =
    useState(false);
  const [showUpgradePackage, setShowUpgradePackage] = useState(false);
  const [loadingShowPinInformation, setLoadingShowPinInformation] =
    useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setLoadingShowPinInformation(true);
    if (userData._id) {
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

      // Fetch feature data only when userData._id changes
      const fetchFeatureData = async () => {
        try {
          const featureData = await fetchFeatureByUserId(userData._id);
          setFeature(featureData);
        } catch (error) {
          console.error("Error fetching feature information:", error);
        }
      };

      fetchFeatureData();
    }
  }, [id, userData._id]);

  return (
    <>
      {showReportPin && (
        <ReportPin
          userData={userData}
          pinInformation={pinInformation}
          setShowReportPin={setShowReportPin}
        />
      )}
      {showNotifyNoPackage && (
        <NoPackagePopup setShowNotifyNoPackage={setShowNotifyNoPackage} />
      )}
      {showNotifyUpgradePackage && (
        <ExtendPackagePopup
          setShowNotifyUpgradePackage={setShowNotifyUpgradePackage}
          setShowUpgradePackage={setShowUpgradePackage}
        />
      )}
      {showUpgradePackage && (
        <UpgradePackagePopup setShowUpgradePackage={setShowUpgradePackage} />
      )}
      <div className={cx("pin-wrapper")}>
        <MainHeader onLogout={onLogout} />
        <div className={cx("pin-container")}>
          <div className={cx("pin-content-main")}>
            <PinDetail
              userData={userData}
              setShowReportPin={setShowReportPin}
              setShowNotifyNoPackage={setShowNotifyNoPackage}
              setShowNotifyUpgradePackage={setShowNotifyUpgradePackage}
              pinInformation={pinInformation}
              feature={feature && feature}
              setFeature={setFeature}
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
