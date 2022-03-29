import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardARHC.css";

function CardARHC(props) {
  return (
    <Card className="row cardARS">
      <TitleCardAR title="#challenge" />
      <div className="cardARSS">
        <TitleARAncor title="Break the Code 2 x DEV Chat"></TitleARAncor>
        <div className="continerNewHC">
          <p className="newTHC">New</p>
        </div>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="How to solve a coding problem"></TitleARAncor>
        <p className="text-muted ">28 comments</p>
      </div>
      <div className="cardARSS">
        <TitleARAncor title="Concluindo o segundo projeto do desafio Jornada DEV"></TitleARAncor>
        <div className="continerNewHC">
          <p className="newTHC">New</p>
        </div>
      </div>
    </Card>
  );
}

export default CardARHC;
