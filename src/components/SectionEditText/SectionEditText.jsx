import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./SectionEditText.scss";

function SectionEditText(props) {
  return (
    <div className="edition-text d-flex justify-content-md-between ps-3 ps-md-5 pe-md-4">
      <div className="d-flex ">
        <ButtonIcon src="/assets/svg/text-bold.svg" />
        <ButtonIcon src="/assets/svg/text-italic.svg" />
        <ButtonIcon src="/assets/svg/text-attached.svg" />
        <ButtonIcon src="/assets/svg/text-list.svg" />
        <ButtonIcon src="/assets/svg/text-bullets.svg" />
        <ButtonIcon src="/assets/svg/text-heading.svg" />
        <ButtonIcon src="/assets/svg/text-quote.svg" />
        <ButtonIcon src="/assets/svg/text-code.svg" />
        <ButtonIcon src="/assets/svg/text-codeblock.svg" />
        <ButtonIcon src="/assets/svg/text-image.svg" />
      </div>
      <div className="d-none d-md-block">
        <ButtonIcon src="/assets/svg/text-more.svg" />
      </div>
    </div>
  );
}
export default SectionEditText;
