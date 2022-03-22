import React from "react";
import LinkIcon from "../LinkIcon/LinkIcon";

function SectionIcons() {
  return (
    <div className="d-flex gap-4 mt-4">
      <LinkIcon
        href="https://twitter.com/thepracticaldev"
        src="/assets/svg/icon-twitter.svg"
        alt="Twitter Logo"
      />
      <LinkIcon
        href="https://www.facebook.com/thepracticaldev"
        src="/assets/svg/icon-facebook.svg"
        alt="Facebook Logo"
      />
      <LinkIcon
        href="https://github.com/thepracticaldev"
        src="/assets/svg/icon-github.svg"
        alt="Github Logo"
      />
      <LinkIcon
        href="https://www.instagram.com/thepracticaldev/"
        src="/assets/svg/icon-instagram.svg"
        alt="Instagram Logo"
      />
      <LinkIcon
        href="https://www.twitch.tv/thepracticaldev"
        src="/assets/svg/icon-twitch.svg"
        alt="Twitch Logo"
      />
    </div>
  );
}

export default SectionIcons;
