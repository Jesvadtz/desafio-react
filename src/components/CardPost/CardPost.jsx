import React from "react";
import Card from "react-bootstrap/Card";
import SectionTags from "../SectionTags/SectionTags";
import TitleCard from "../TitleCard/TitleCard";
import DataUser from "../DataUser/DataUser";
import SectionButtonComments from "../SectionButtonComments/SectionButtonComments";
import SectionSavePost from "../SectionSavePost/SectionSavePost";
import "./CardPost.scss";

function CardPost(props) {
  const [reactions, setReactions] = React.useState(0);
  const [comments, setComments] = React.useState(0);

  return (
    <Card>
      <Card.Img
        variant="top"
        alt="cover-post"
        src="https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        className="coverPost"
      />
      <Card.Body className="p-3 p-md-4">
        <DataUser />
        <div className="d-flex flex-column gap-2 title-card">
          <TitleCard title="BeReadable - Online Multilingual Audio Transcription and Recorder" />
        </div>
        <div className="tags-card">
          <SectionTags />
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
