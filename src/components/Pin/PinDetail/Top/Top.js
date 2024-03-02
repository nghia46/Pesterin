import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import api from "~/services/apiService";
import { fetchGetAllArtIDsForUser } from "~/services/saveArtService";

import MoreOptionsPin from "./MoreOptionsPin";
import SharingPin from "./SharingPin";

import styles from "./Top.module.scss";
const cx = classNames.bind(styles);

function Top({ userData, pinInformation, setShowReportPin }) {
  const [saved, setSaved] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const saveList = await fetchGetAllArtIDsForUser(userData._id);
        const filteredSaveData = saveList.filter(
          (user) => user === pinInformation._id
        );
        if (filteredSaveData.length > 0) {
          setSaved(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pinInformation._id, userData._id]);

  const handleSavePin = async (e) => {
    e.stopPropagation();
    const saveArtworkData = {
      userID: userData._id,
      artID: pinInformation._id,
    };
    try {
      await api.post(`/save/saveArtwork`, saveArtworkData);
      const saveList = await fetchGetAllArtIDsForUser(userData._id);
      const filteredSaveData = saveList.filter(
        (user) => user === pinInformation._id
      );
      if (filteredSaveData.length > 0) {
        setSaved(true);
      }
    } catch (error) {
      console.error(error);
    }
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
          {saved ? (
            <button className={cx("saved-btn")} onClick={handleSavePin}>
              Saved
            </button>
          ) : (
            <button className={cx("save-btn")} onClick={handleSavePin}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Top;
