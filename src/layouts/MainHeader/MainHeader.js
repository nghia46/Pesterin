import React from "react";
import classNames from "classnames/bind";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "~/assets/images/logo.png";
import styles from "./MainHeader.module.scss";
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
function MainHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavItemClick = (path) => {
    navigate(path);
  };
  return (
    <div className={cx("main-header-wrapper")}>
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
        <div className={cx("header-middle")}>
          <div className={cx("header-search")}>
            <i
              className={cx("fa-solid fa-magnifying-glass", "search-icon")}
            ></i>
            <span className={cx("search-focus")}>Search</span>
          </div>
        </div>
        <div className={cx("header-right")}>
          <div className={cx("notification")}>
            <i className={cx("fa-sharp fa-solid fa-bell", "icon")}></i>
          </div>
          <div className={cx("message")}>
            <i className={cx("fa-solid fa-comment-dots", "icon")}></i>
          </div>
          <div className={cx("user-image")}>
            <img src={Logo} alt="user-img" className={cx("image")} />
          </div>
          <div className={cx("dropdown")}>
            <i className={cx("fa-solid fa-chevron-down", "icon")}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
