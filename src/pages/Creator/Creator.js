import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "~/services/apiService";
import { AuthContext } from "~/contexts/AuthContext";
import { fetchGetFollower, fetchGetFollowing } from "~/services/followService";
import { fetchCreatorInformation } from "~/services/creatorService";

import MainHeader from "~/layouts/MainHeader";
import Saved from "~/components/Creator/Saved";
import Created from "~/components/Creator/Created";
import SharingPin from "~/components/Pin/PinDetail/Top/SharingPin";
import ProfileOptions from "~/components/Creator/ProfileOptions";
import ReportAccount from "~/components/Creator/ProfileOptions/ReportAccount";

import styles from "./Creator.module.scss";
const cx = classNames.bind(styles);
function Creator({ onLogout }) {
  const { userData } = useContext(AuthContext);
  const { id } = useParams();
  const [creator, setCreator] = useState();
  const [following, setFollowing] = useState([]);
  const [countFollowing, setCountFollowing] = useState(0);
  const [countFollower, setCountFollower] = useState(0);
  const [showContent, setShowContent] = useState("Created");
  const [showSharing, setShowSharing] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showReportProfile, setShowReportProfile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorData = await fetchCreatorInformation(id);
        setCreator(creatorData);

        // Fetch following data only if creatorData is available
        const followingList = await fetchGetFollowing(userData._id);
        const filteredUserData = followingList.filter(
          (user) => user === creatorData._id
        );
        setFollowing(filteredUserData);
        // Fetch following length
        const followings = await fetchGetFollowing(creatorData._id);
        setCountFollowing(followings.length);
        // Fetch follower data only if creatorData is available
        const followerList = await fetchGetFollower(creatorData._id);
        setCountFollower(followerList.length);
      } catch (error) {
        console.error("Error fetching creator information:", error);
      }
    };

    fetchData();
  }, [id, userData._id]);

  const handleFollow = () => {
    api
      .post(`/follow/createFollow/${userData._id}/${creator._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {showReportProfile && (
        <ReportAccount setShowReportProfile={setShowReportProfile} />
      )}
      {creator && (
        <div className={cx("creator-wrapper")}>
          <MainHeader onLogout={onLogout} />
          <div className={cx("creator-container")}>
            <div className={cx("creator-information-wrapper")}>
              <div className={cx("creator-information-container")}>
                {creator.coverPicture && (
                  <div className={cx("cover-picture")}>
                    <img
                      src={creator?.coverPicture}
                      alt="cover-pic"
                      className={cx("cover-img")}
                    />
                  </div>
                )}
                <div
                  className={
                    creator.coverPicture
                      ? cx("creator-avatar", "creator-avatar-cover-pic")
                      : cx("creator-avatar")
                  }
                >
                  <img
                    src={creator?.avatar}
                    alt="creator-avt"
                    className={cx("creator-avt")}
                  />
                </div>
                <div className={cx("creator-name")}>
                  <div className={cx("name")}>
                    {creator.firstName + " " + creator.lastName}
                  </div>
                </div>
                <div className={cx("creator-user-name")}>
                  <i className={cx("fa-brands fa-pinterest", "icon")}></i>
                  <div className={cx("text")}>{creator.userName}</div>
                </div>
                {creator.about && (
                  <div className={cx("about")}>
                    <div className={cx("text")}>{creator.about}</div>
                  </div>
                )}

                {creator.website && (
                  <Link to={creator.website} className={cx("profile-link")}>
                    {creator.website.split("/").slice(0, 3).join("/")}
                  </Link>
                )}

                <div className={cx("number-of-follow")}>
                  <div className={cx("followers")}>
                    {countFollower}{" "}
                    {countFollower > 1 ? "followers" : "follower"}
                  </div>
                  <span>.</span>
                  <div className={cx("followings")}>
                    {countFollowing} following
                  </div>
                </div>
                <div className={cx("creator-actions")}>
                  <div
                    className={
                      showSharing
                        ? cx("sharing", "sharing-show")
                        : cx("sharing")
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
                  {following.length > 0 ? (
                    <div className={cx("following")}>
                      <button className={cx("following-btn")}>Following</button>
                    </div>
                  ) : (
                    <div className={cx("follow")}>
                      <button
                        className={cx("follow-btn")}
                        onClick={handleFollow}
                      >
                        Follow
                      </button>
                    </div>
                  )}

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
                        showContent === "Created"
                          ? cx("line-active")
                          : cx("line")
                      }
                    ></div>
                  </div>
                  <div className={cx("saved-wrapper")}>
                    <div
                      className={
                        showContent === "Saved"
                          ? cx("saved-active")
                          : cx("saved")
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

            {/* {showContent === "Saved" ? <Saved /> : <Created />} */}
          </div>
        </div>
      )}
    </>
  );
}

export default Creator;
