import React from "react";
import UnicornIcon from "../Icons/UnicornIcon";
import FavoritesIcon from "../Icons/FavoritesIcon";
import SavedIcon from "../Icons/SavedIcon";
import styles from "./AsideLeftDetailPost.module.scss";
import MoreIcon from "../Icons/MoreIcon";

function AsideLeftDetailPost(props) {
  const { heart, setHeart, unicorn, setUnicorn, saved, setSaved } = props;

  function addHeart() {
    setHeart(heart + 1);
  }
  function addUnicorn() {
    setUnicorn(unicorn + 1);
  }
  function addSaved() {
    setSaved(saved + 1);
  }

  return (
    <section className={`d-none d-md-block mt-5 px-0 ${styles.fixedAsideLeft}`}>
      <div>
        <div className="btn d-flex flex-column align-items-center mb-1 ">
          <FavoritesIcon className={styles.btnFavorites} onClick={addHeart} />
          <p>{heart}</p>
        </div>
        <div className="btn d-flex flex-column align-items-center mb-1">
          <UnicornIcon className={styles.btnUnicorn} onClick={addUnicorn} />
          <p>{unicorn}</p>
        </div>
        <div className="btn d-flex flex-column align-items-center">
          <SavedIcon className={styles.btnSaved} onClick={addSaved} />
          <p>{saved}</p>
        </div>
        <div className="btn px-0 d-flex flex-column align-items-center">
          <MoreIcon className={styles.btnMore} />
        </div>
      </div>
    </section>
  );
}
export default AsideLeftDetailPost;
