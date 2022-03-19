import React from "react";
import Card from "react-bootstrap/Card";
import SectionTags from "../SectionTags/SectionTags";
import TitleCard from "../TitleCard/TitleCard";
import DataUser from "../DataUser/DataUser";
import SectionButtonComments from "../SectionButtonComments/SectionButtonComments";
import SectionSavePost from "../SectionSavePost/SectionSavePost";

function CardPost(props) {
  return (
    <Card>
      <Card.Img variant="top" alt="cover-post" />
      <Card.Body>
        <DataUser />
        <div>
          <TitleCard />
          <SectionTags />
        </div>
        <div>
          <SectionButtonComments />
          <SectionSavePost />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPost;
