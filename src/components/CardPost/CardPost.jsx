import React from "react";
import Card from "react-bootstrap/Card";
import SectionTags from "../SectionTags/SectionTags";
import TitleCard from "../TitleCard/TitleCard";
import DataUser from "../DataUser/DataUser";
import SectionButtonComments from "../SectionButtonComments/SectionButtonComments";
import SectionSavePost from "../SectionSavePost/SectionSavePost";
import "./CardPost.scss";
import { Link } from "react-router-dom";

function CardPost(props) {
  const { title, src, userName, date, tag, post } = props;
  const [reactions, setReactions] = React.useState(0);
  const [comments, setComments] = React.useState(0);

  return (
    <Card className="mb-3">
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
        <div className="d-flex flex-column gap-2 title-card">
          <Link to={`/posts/${post._id}`}>
            <TitleCard title={title} />
          </Link>
        </div>
        <div className="tags-card mt-2">
          <SectionTags tag={tag} />
        </div>
        <div className="d-flex justify-content-between mt-2 comments-card">
          <SectionButtonComments
            reactions={reactions}
            setReactions={setReactions}
            comments={comments}
            setComments={setComments}
          />
          <SectionSavePost />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPost;
