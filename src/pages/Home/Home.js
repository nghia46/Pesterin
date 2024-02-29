import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import ImageCard from "~/components/Home/ImageCard";
import MainHeader from "~/layouts/MainHeader";

import styles from "./Home.module.scss";
import api from "~/services/apiService";
const cx = classNames.bind(styles);

function Home({ onLogout }) {
  const [artworksList, setArtworksList] = useState([]);

  useEffect(() => {
    api.get("/art/getArtwork").then((response) => {
      setArtworksList(response.data);
    });
  }, []);
  return (
    <div className={cx("home-wrapper")}>
      <MainHeader onLogout={onLogout} />
      <div className={cx("home-container")}>
        <div className={cx("show-artworks-list")}>
          {artworksList.map((artWork) => (
            <ImageCard
              key={artWork._id}
              artWork={artWork}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
