import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardAsideR.css";
import ButtonARG from "../ButtonARG/ButtonARG";
import ButtonARB from "../ButtonARB/ButtonARB"

function CardAsideR(props) {
  return (
    <Card className="cotainerCardAR">
      <Card.Img
        variant="top"
        alt="cover-post"
        src="https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        className="coverPost"
      />

      <div>
        <TitleCardAR title="Deepgram x DEV Hackathon (18)" />
      </div>
      <div>
        <TitleARAncor title="Fun With Deepgram and NextJS "></TitleARAncor>
      </div>
      <div>
        <TitleARAncor title="[Deepgram x DEV Hackathon Submission Post Placeholder Totle] "></TitleARAncor>
      </div>
      <div>
        <TitleARAncor title="[Deepgram x DEV Hackathon Submission Post Placeholder Totle] "></TitleARAncor>
      </div>
      <div>
        <TitleARAncor title="BeReadable - Online Multilingual Audio Transcription and Recoder "></TitleARAncor>
      </div>

      <TitleARAncor title="AudioSing: Converting audio to animated sing language (FIN) "></TitleARAncor>
      <ButtonARB></ButtonARB>
      <ButtonARG></ButtonARG>
    </Card>
  );
}

export default CardAsideR;
