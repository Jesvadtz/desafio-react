import React from "react";
import UnicornIcon from "../Icons/UnicornIcon";
import FavoritesIcon from "../Icons/FavoritesIcon";
import SavedIcon from "../Icons/SavedIcon";
import styles from "./AsideLeftDetailPost.module.scss";
import MoreIcon from "../Icons/MoreIcon";

function AsideLeftDetailPost() {
  console.log("styles", styles.btnUnicorn);
  return (
    <section className={`d-none d-md-block mt-5 px-0 ${styles.fixedAsideLeft}`}>
      <div>
        <div className="btn d-flex flex-column align-items-center mb-1 ">
          <FavoritesIcon className={styles.btnFavorites} />
          <p>0</p>
        </div>
        <div className="btn d-flex flex-column align-items-center mb-1">
          <UnicornIcon className={styles.btnUnicorn} />
          <p>0</p>
        </div>
        <div className="btn d-flex flex-column align-items-center">
          <SavedIcon className={styles.btnSaved} />
          <p>0</p>
        </div>
        <div className="btn px-0 d-flex flex-column align-items-center">
          <MoreIcon className={styles.btnMore} />
        </div>
      </div>
    </section>
  );
}
export default AsideLeftDetailPost;
