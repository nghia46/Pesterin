import React, { useState } from "react";
import classNames from "classnames/bind";
import logo from "~/assets/images/logo.png";
import styles from "./EditProfile.module.scss";
const cx = classNames.bind(styles);
function EditProfile({ setShowEditProfile }) {
  const [aboutCountInput, setAboutCountInput] = useState(0);
  const [userName, setUserName] = useState("duyk16_hcm");

  const handleChangeAboutInput = (e) => {
    setAboutCountInput(e.target.value.length);
  };

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div
      className={cx("edit-profile-wrapper")}
      onClick={() => setShowEditProfile(false)}
    >
      <div
        className={cx("edit-profile-container")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cx("edit-profile-heading")}>
          <div className={cx("empty")}></div>
          <div className={cx("heading-text")}>Edit profile</div>
          <div
            className={cx("close")}
            onClick={() => setShowEditProfile(false)}
          >
            <i className={cx("fa-solid fa-xmark", "icon")}></i>
          </div>
        </div>
        <div className={cx("edit-profile-content-container")}>
          <div className={cx("edit-profile-content-main")}>
            <div className={cx("desc-information")}>
              Keep your personal details private. Information you add here is
              visible to anyone who can view your profile.
            </div>
            <div className={cx("edit-photo")}>
              <div className={cx("photo-text")}>Photo</div>
              <div className={cx("photo-container")}>
                <img
                  src={logo}
                  alt="profile-img"
                  className={cx("profile-image")}
                />
                <button className={cx("change-photo-btn")}>Change</button>
              </div>
            </div>
            <div className={cx("edit-full-name")}>
              <div className={cx("edit-first-name")}>
                <div className={cx("text")}>First name</div>
                <input
                  type="text"
                  spellCheck={false}
                  className={cx("first-name-input")}
                />
              </div>
              <div className={cx("edit-last-name")}>
                <div className={cx("text")}>Last name</div>
                <input
                  type="text"
                  spellCheck={false}
                  className={cx("last-name-input")}
                />
              </div>
            </div>
            <div className={cx("edit-about")}>
              <div className={cx("text")}>About</div>
              <input
                type="text"
                spellCheck={false}
                className={cx("about-input")}
                maxLength={50}
                onChange={handleChangeAboutInput}
              />
              <div className={cx("count-input")}>{aboutCountInput}/50</div>
            </div>
            <div className={cx("edit-website")}>
              <div className={cx("text")}>Website</div>
              <input
                type="text"
                spellCheck={false}
                className={cx("website-input")}
              />
            </div>
            <div className={cx("edit-username")}>
              <div className={cx("text")}>Username</div>
              <input
                type="text"
                spellCheck={false}
                value={userName}
                className={cx("username-input")}
                onChange={handleChangeUsername}
              />
              <div className={cx("example")}>www.pesterin.com/{userName}</div>
            </div>
          </div>
        </div>
        <div className={cx("edit-profile-footer")}>
          <div className={cx("edit-profile-action")}>
            <button
              className={cx("cancel-btn")}
              onClick={() => setShowEditProfile(false)}
            >
              Cancel
            </button>
            <button className={cx("save-btn")} disabled={true}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
