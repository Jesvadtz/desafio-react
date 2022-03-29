import React from "react";
import Avatar from "../Avatar/Avatar";
import TitleSecondary from "../TitleSecondary/TitleSecondary";

function SectionExtraDetailPost() {
  return (
    <section className="bg-readnext p-4 d-flex flex-column gap-4 border rounded mt-3 mb-5">
      <h3>Read next</h3>
      <div className="d-flex gap-3 align-items-start">
        <Avatar src="/assets/img/user-01.webp" />
        <div>
          <TitleSecondary title="Project Benatar: Publishing DEV-powered websites with Stackbit" />
          <span className="fw-light text-secondary">
            Ohad Eder-Pressman - Jun 19 '19
          </span>
        </div>
      </div>
      <div className="d-flex gap-3 align-items-start">
        <Avatar src="/assets/img/user-02.webp" />
        <div>
          <TitleSecondary title="Project Benatar: Publishing DEV-powered websites with Stackbit" />
          <span className="fw-light text-secondary">
            Ohad Eder-Pressman - Jun 19 '19
          </span>
        </div>
      </div>
      <div className="d-flex gap-3 align-items-start">
        <Avatar src="/assets/img/user-03.webp" />
        <div>
          <TitleSecondary title="Project Benatar: Publishing DEV-powered websites with Stackbit" />
          <span className="fw-light text-secondary">
            Ohad Eder-Pressman - Jun 19 '19
          </span>
        </div>
      </div>
      <div className="d-flex gap-3 align-items-start">
        <Avatar src="/assets/img/user-04.webp" />
        <div>
          <TitleSecondary title="Project Benatar: Publishing DEV-powered websites with Stackbit" />
          <span className="fw-light text-secondary">
            Ohad Eder-Pressman - Jun 19 '19
          </span>
        </div>
      </div>
    </section>
  );
}

export default SectionExtraDetailPost;
