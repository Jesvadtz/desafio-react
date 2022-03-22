import React from "react";
import NavLinkIconText from "../NavLinkIconText/NavLinkIconText";
import SectionIcons from "../SectionIcons/SectionIcons";

function MenuMobile(props) {
  return (
    <div>
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <NavLinkIconText
          src="/assets/svg/icon-home.svg"
          text="Home"
          href="#"
          alt="Home Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-sign.svg"
          text="Sign In/Up"
          href="#"
          alt="Sing In/Up Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-scroll.svg"
          text="Listings"
          href="#"
          alt="Listings Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-podcasts.svg"
          text="Podcast"
          href="#"
          alt="Podcast Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-videos.svg"
          text="Videos"
          href="#"
          alt="Videos Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-tags.svg"
          text="Tags"
          href="#"
          alt="Tags Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-faq.svg"
          text="FAQ"
          href="#"
          alt="FAQ Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-devshop.svg"
          text="Dev Shop"
          href="#"
          alt="Dev Shop Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-sponsors.svg"
          text="Sponsors"
          href="#"
          alt="Sponsors Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-about.svg"
          text="About"
          href="#"
          alt="About Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-contact.svg"
          text="Contact"
          href="#"
          alt="Contact Icon"
        />
      </ul>
      <p className="fw-bolder mt-4 mb-2">Other</p>
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <NavLinkIconText
          src="/assets/svg/icon-codeofconduct.svg"
          text="Code of Conduct"
          href="#"
          alt="Code of Conduct Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-privacypolicy.svg"
          text="Provacy Pilicy"
          href="#"
          alt="Provacy Pilicy Icon"
        />
        <NavLinkIconText
          src="/assets/svg/icon-terms.svg"
          text="Terms of use"
          href="#"
          alt="Terms of use Icon"
        />
      </ul>
      <SectionIcons />
    </div>
  );
}

export default MenuMobile;
