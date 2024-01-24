import React from "react";
import classNames from "classnames/bind";
import MainHeader from "~/layouts/MainHeader";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("home-wrapper")}>
      <MainHeader />
      <div className={cx("home-container")}></div>
    </div>
  );
}

export default Home;
