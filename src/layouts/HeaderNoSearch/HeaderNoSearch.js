import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "~/contexts/AuthContext";
import {
  fetchGetNotificationsForUser,
  getUnreadNotifications,
} from "~/services/notificationService";

import Logo from "~/assets/images/logo.png";
import UserDefaultImg from "~/assets/images/user-default.png";
import AccountOptions from "~/components/AccountOptions";
import Notifications from "~/components/Notifications";

import styles from "./HeaderNoSearch.module.scss";
const cx = classNames.bind(styles);
const headerNav = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Create",
    path: "/pin-creation-tool",
  },
];
function MainHeader({ onLogout }) {
  const { userData } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [countNotifications, setCountNotifications] = useState();

  const [showAccountSetting, setShowAccountSetting] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData._id) {
          const notificationResponse = await fetchGetNotificationsForUser(
            userData._id
          );
          setNotifications(notificationResponse);
        }
      } catch (error) {
        console.error("Error fetching creator information:", error);
      }
    };

    fetchData();
  }, [userData._id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData._id) {
          const notificationUnreadResponse = await getUnreadNotifications(
            userData._id
          );
          if (notificationUnreadResponse.length > 0) {
            setCountNotifications(notificationUnreadResponse.length);
          }
        }
      } catch (error) {
        console.error("Error fetching notification:", error);
      }
    };

    fetchData();
  }, [userData._id]);

  const handleNavItemClick = (path) => {
    navigate(path);
  };

  const handleOpenNotification = () => {
    if (countNotifications > 0) {
      setCountNotifications(0);
    }
    setShowAccountSetting(!showAccountSetting);
  };
  return (
    <div className={cx("main-header-wrapper")}>
      {showAccountSetting && <AccountOptions onLogout={onLogout} />}
      {showNotifications && (
        <Notifications
          userData={userData}
          notifications={notifications}
          setNotifications={setNotifications}
          setCountNotifications={setCountNotifications}
          setShowNotifications={setShowNotifications}
        />
      )}
      <div className={cx("main-header-container")}>
        <div className={cx("header-left")}>
          <Link to="/" className={cx("header-logo")}>
            <div className={cx("logo")}>
              <img src={Logo} alt="logo" className={cx("logo-img")} />
            </div>
          </Link>

          <div className={cx("header-nav")}>
            {headerNav.map((nav) => {
              const isActive = location.pathname === nav.path;
              return (
                <div
                  key={nav.id}
                  className={cx(isActive ? "nav-item-active" : "nav-item")}
                  onClick={() => handleNavItemClick(nav.path)}
                >
                  {nav.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className={cx("header-right")}>
          <div
            className={cx("notification")}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <i className={cx("fa-sharp fa-solid fa-bell", "icon")}></i>
            {countNotifications > 0 && (
              <div className={cx("count-notification")}>
                <div className={cx("number")}>
                  {countNotifications > 9 ? 9 : countNotifications}
                </div>
                {countNotifications > 9 && (
                  <i className={cx("fa-solid fa-plus", "plus-icon")}></i>
                )}
              </div>
            )}
          </div>
          <div className={cx("message")}>
            <i className={cx("fa-solid fa-comment-dots", "icon")}></i>
            <div className={cx("count-message")}>
              <div className={cx("number")}>9</div>
              <i className={cx("fa-solid fa-plus", "plus-icon")}></i>
            </div>
          </div>
          <Link to="/profile" className={cx("user-image")}>
            <img
              src={userData.avatar ? userData.avatar : UserDefaultImg}
              alt="user-img"
              className={cx("image")}
            />
          </Link>
          <div className={cx("dropdown")} onClick={handleOpenNotification}>
            <i className={cx("fa-solid fa-chevron-down", "icon")}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
