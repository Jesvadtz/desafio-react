import React from "react";
import Card from "react-bootstrap/Card";
import SectionTags from "../SectionTags/SectionTags";
import DataUser from "../DataUser/DataUser";
import ContentPost from "../ContentPost/ContentPost";
import TitleDetailPost from "../TitleDetailPost/TitleDetailPost";

function CardDetailPost(props) {
  const { title, src, userName, date, tag, content } = props;

  return (
    <Card className="mb-3 p-4">
      {src && (
        <Card.Img
          variant="top"
          alt="cover-post"
          src={src}
          className="coverPost"
        />
      )}
      <Card.Body className="p-3 p-md-4">
        <DataUser userName={userName} date={date} />
        <div className="d-flex flex-column gap-2">
          <TitleDetailPost title={title} />
        </div>
        <div className="mb-4">
          <SectionTags tag={tag} />
        </div>
        <div>
          <ContentPost content={content} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardDetailPost;
