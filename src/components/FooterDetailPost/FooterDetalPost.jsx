import React from "react";
import "./FooterDetailPost.scss";

function FooterDetailPost() {
  return (
    <footer className="footer-detail-post">
      <p className="fw-bold">
        DEV Community – A constructive and inclusive social network for software
        developers. With you every step of your journey.
      </p>
      <p className="fw-light">
        <span className="fw-bold"> Built on Forem</span> — the
        <span className="fw-bold"> open source </span>
        software that powers <span className="fw-bold">DEV </span>
        and other inclusive communities. Made with love and
        <span className="fw-bold"> Ruby on Rails</span>. DEV Community © 2016 -
        2021.
      </p>
      <img src="/assets/svg/icon-footerDetail.svg" alt="icon-footer" />
    </footer>
  );
}

export default FooterDetailPost;
