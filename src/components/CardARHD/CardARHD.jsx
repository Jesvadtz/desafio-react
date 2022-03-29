import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardARHD.css";

function CardARHD(props) {
  return (
    <Card className="row cardARS">
      <TitleCardAR title="#discuss" />
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Doubt: multiprocessing basic example"></TitleARAncor>
        <p class="text-muted ">5 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Doubt: multiprocessing basic example"></TitleARAncor>
        <p class="text-muted ">20 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Doubt: multiprocessing basic example"></TitleARAncor>
        <p class="text-muted ">38 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Doubt: multiprocessing basic example"></TitleARAncor>
        <p class="text-muted ">17 comments</p>
      </div>
    </Card>
  );
}

export default CardARHD;
