import React from "react";
import ButtonIconText from "../ButtonIconText/ButtonIconText";
import IconComments from "../../assets/svg/icon-comment.svg";
import IconReactions from "../../assets/svg/icon-heart.svg";

function SectionButtonComments(props) {
  return (
    <section>
      <ButtonIconText src={IconComments} text="Reactions" />
      <ButtonIconText src={IconReactions} text="Comments" />
    </section>
  );
}

export default SectionButtonComments;
