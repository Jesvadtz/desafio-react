import React from "react";
import Avatar from "../Avatar/Avatar";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import SectionTags from "../SectionTags/SectionTags";
import UserName from "../UserName/UserName";
import styles from "./AsideRightDetailPost.module.scss";

function AsideRightDetailPost(props) {
  const { userName } = props;
  return (
    <section
      className={`mt-5 mt-md-4 mt-lg-0 px-md-0 px-lg-2 mb-5 ${styles.fixedAsideRigth}`}
    >
      <div className="fixed-aside-right">
        <div className="card rounded-md-0 rounded-md">
          <div className="card-header text-white bg-dark"></div>
          <div className="card-body">
            <div className="d-flex gap-2 mb-3">
              <Avatar src="/assets/img/user-02.webp" />
              <UserName userName={userName} />
            </div>
            <ButtonPrimary text="Follow" />
            <p className="fw-light mt-3">
              The hardworking team behind dev.to ❤️
            </p>
            <p>
              Want to contribute to open source and help make the DEV community
              stronger? The code that powers DEV is called{" "}
              <span className="fw-bold"> Forem</span> and is freely available on
              GitHub. You're welcome to jump in!
            </p>
          </div>
        </div>
        <div className="card mt-4 mb-5">
          <div className="card-header fw-bold">
            More from <span className="link-purple">The DEV Team</span>
          </div>
          <div className="card-body bg-light btn hover-white text-start">
            <p className="card-text">How we made the markdown toolbar</p>
            <SectionTags tag="#javascript" />
          </div>
          <div className="card-body bg-light btn hover-white text-start">
            <p className="card-text">How we made the markdown toolbar</p>
            <SectionTags tag="#react" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AsideRightDetailPost;
