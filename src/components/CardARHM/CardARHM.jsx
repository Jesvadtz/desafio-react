import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardARHM.css";

function CardARHM(props) {
  return (
    <Card className="row cardARS">
      <TitleCardAR title="#meta" />
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Forem for Android is Here! 🤖"></TitleARAncor>
        <p class="text-muted ">21 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Interested in learning more about Commercial Open Source? There’s a Forem for that."></TitleARAncor>
        <p class="text-muted ">6 comments</p>
      </div>
    </Card>
  );
}

export default CardARHM;
