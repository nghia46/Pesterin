import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "~/layouts/MainHeader";
import styles from "./Creator.module.scss";
import Saved from "~/components/Creator/Saved";
import Created from "~/components/Creator/Created";
import SharingPin from "~/components/Pin/PinDetail/Top/SharingPin";
import ProfileOptions from "~/components/Creator/ProfileOptions";
import ReportAccount from "~/components/Creator/ProfileOptions/ReportAccount";
const cx = classNames.bind(styles);
function Creator() {
  const [showContent, setShowContent] = useState("Created");
  const [showSharing, setShowSharing] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showReportProfile, setShowReportProfile] = useState(false);
  return (
    <>
      {showReportProfile && (
        <ReportAccount setShowReportProfile={setShowReportProfile} />
      )}
      <div className={cx("creator-wrapper")}>
        <MainHeader />
        <div className={cx("creator-container")}>
          <div className={cx("creator-information-wrapper")}>
            <div className={cx("creator-information-container")}>
              {/* <div className={cx("cover-picture")}>
                <img
                  src="https://i.pinimg.com/1200x/22/7b/db/227bdbffb4be82c4dfe0ab6e6f080844.jpg"
                  alt="cover-pic"
                  className={cx("cover-img")}
                />
              </div> */}
              <div className={cx("creator-avatar")}>
                <img
                  src="https://i.pinimg.com/280x280_RS/e9/f7/e1/e9f7e101e3b7484d53b2b4d5a6004740.jpg"
                  alt="creator-avt"
                  className={cx("creator-avt")}
                />
              </div>
              <div className={cx("creator-name")}>
                <div className={cx("name")}>Behance</div>
              </div>
              <div className={cx("creator-user-name")}>
                <i className={cx("fa-brands fa-pinterest", "icon")}></i>
                <div className={cx("text")}>behance</div>
              </div>
              <div className={cx("about")}>
                <div className={cx("text")}>
                  The best creative work from around the world.
                </div>
              </div>
              <Link
                to="https://www.facebook.com/leevuxx"
                className={cx("profile-link")}
              >
                facebook.com/leevuxx
              </Link>
              <div className={cx("number-of-follow")}>
                <div className={cx("followers")}>8.4M followers</div>
                <span>.</span>
                <div className={cx("followings")}>46 following</div>
              </div>
              <div className={cx("creator-actions")}>
                <div
                  className={
                    showSharing ? cx("sharing", "sharing-show") : cx("sharing")
                  }
                  onClick={() => {
                    setShowSharing(!showSharing);
                    setShowProfileOptions(false);
                  }}
                >
                  <i
                    className={cx(
                      "fa-sharp fa-solid fa-arrow-up-from-bracket",
                      "icon"
                    )}
                  ></i>
                </div>
                {showSharing && <SharingPin />}
                <div className={cx("follow")}>
                  <button className={cx("follow-btn")}>Follow</button>
                </div>
                <div
                  className={
                    showProfileOptions
                      ? cx("more-options", "more-options-show")
                      : cx("more-options")
                  }
                  onClick={() => {
                    setShowProfileOptions(!showProfileOptions);
                    setShowSharing(false);
                  }}
                >
                  <i
                    className={cx(
                      "fa-solid fa-ellipsis-vertical fa-rotate-90",
                      "icon"
                    )}
                  ></i>
                </div>
                {showProfileOptions && (
                  <ProfileOptions
                    setShowReportProfile={setShowReportProfile}
                    setShowProfileOptions={setShowProfileOptions}
                  />
                )}
              </div>
            </div>
          </div>
          {/* Nav */}
          <div className={cx("nav-options-wrapper")}>
            <div className={cx("nav-options-container")}>
              <div className={cx("nav-options-main")}>
                <div className={cx("created-wrapper")}>
                  <div
                    className={
                      showContent === "Created"
                        ? cx("created-active")
                        : cx("created")
                    }
                    onClick={() => setShowContent("Created")}
                  >
                    <div className={cx("text")}>Created</div>
                  </div>
                  <div
                    className={
                      showContent === "Created" ? cx("line-active") : cx("line")
                    }
                  ></div>
                </div>
                <div className={cx("saved-wrapper")}>
                  <div
                    className={
                      showContent === "Saved" ? cx("saved-active") : cx("saved")
                    }
                    onClick={() => setShowContent("Saved")}
                  >
                    <div className={cx("text")}>Saved</div>
                  </div>
                  <div
                    className={
                      showContent === "Saved" ? cx("line-active") : cx("line")
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {showContent === "Saved" ? <Saved /> : <Created />}
        </div>
      </div>
    </>
  );
}

export default Creator;
