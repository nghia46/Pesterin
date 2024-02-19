import React, { useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import MainHeader from "~/layouts/MainHeader";
import Saved from "~/components/Profile/Saved";
import Created from "~/components/Profile/Created";
import EditProfile from "~/components/Profile/EditProfile";
import logo from "~/assets/images/logo.png";
import styles from "./Profile.module.scss";
const cx = classNames.bind(styles);
function Profile() {
  const [showContent, setShowContent] = useState("Saved");
  const [showEditProfile, setShowEditProfile] = useState(false);
  return (
    <>
      {showEditProfile && (
        <EditProfile setShowEditProfile={setShowEditProfile} />
      )}
      <div className={cx("profile-wrapper")}>
        <MainHeader />
        <div className={cx("profile-container")}>
          {/* Profile */}
          <div className={cx("user-information-wrapper")}>
            <div className={cx("user-information-container")}>
              <div className={cx("user-avatar")}>
                <img src={logo} alt="avatar" className={cx("avatar")} />
              </div>
              <div className={cx("full-name")}>
                <div className={cx("text")}>Le Vu Dinh</div>
              </div>
              <div className={cx("user-name")}>
                <i className={cx("fa-brands fa-pinterest", "icon")}></i>
                <div className={cx("text")}>duyk16_hcm</div>
              </div>
              <div className={cx("about")}>
                <div className={cx("text")}>Hi, I'm dev</div>
              </div>
              <Link
                to="https://www.facebook.com/leevuxx"
                className={cx("profile-link")}
              >
                facebook.com/leevuxx
              </Link>
              <div className={cx("following")}>
                <span className={cx("number")}>1000</span>
                <span className={cx("text")}>following</span>
              </div>
              <div className={cx("profile-action")}>
                <div className={cx("share-btn")}>
                  <div className={cx("text")}>Share</div>
                </div>
                <div
                  className={cx("edit-btn")}
                  onClick={() => setShowEditProfile(true)}
                >
                  <div className={cx("text")}>Edit profile</div>
                </div>
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
          {/* Content */}
          {showContent === "Saved" ? <Saved /> : <Created />}
        </div>
      </div>
    </>
  );
}

export default Profile;
