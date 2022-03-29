import React from "react";
import FavoritesIcon from "../Icons/FavoritesIcon";
import MoreIcon from "../Icons/MoreIcon";
import SavedIcon from "../Icons/SavedIcon";
import UnicornIcon from "../Icons/UnicornIcon";

function FooterFixDetailPost(props) {
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
    <section className="col-md-1 d-flex flex-row justify-content-around d-md-none py-2 fixed-bottom bg-white shadow-lg">
      <div className="btn d-flex align-items-center gap-2">
        <FavoritesIcon onClick={addHeart} />
        <p className="mb-0">{heart}</p>
      </div>
      <div className="btn d-flex align-items-center gap-2">
        <UnicornIcon onClick={addUnicorn} />
        <p className="mb-0">{unicorn}</p>
      </div>
      <div className="btn d-flex align-items-center gap-2">
        <SavedIcon onClick={addSaved} />
        <p className="mb-0">{saved}</p>
      </div>
      <div className="btn px-0 d-flex align-items-center">
        <MoreIcon />
      </div>
    </section>
  );
}
export default FooterFixDetailPost;
