import React from "react";
import ButtonIconText from "../ButtonIconText/ButtonIconText";

function SectionButtonComments(props) {
  const { reactions, setReactions, comments, setComments } = props;

  function addComments() {
    setComments(comments + 1);
  }

  function addReactions() {
    setReactions(reactions + 1);
  }
  return (
    <section className="d-flex gap-2">
      <ButtonIconText
        src="/assets/svg/icon-heart.svg"
        text="Reactions"
        count={reactions}
        setReactions={setReactions}
        onClick={addReactions}
      />
      <ButtonIconText
        src="/assets/svg/icon-comment.svg"
        text="Comments"
        count={comments}
        setComments={setComments}
        onClick={addComments}
      />
    </section>
  );
}

export default SectionButtonComments;
