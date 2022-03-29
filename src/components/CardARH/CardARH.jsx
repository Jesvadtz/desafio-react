import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardARH.css";

function CardARH(props) {
  return (
    <Card className="row cardARS">
      <TitleCardAR title="#help" />
      <TitleARAncor title="Doubt: multiprocessing basic example"></TitleARAncor>
      <div className="continerNewHC">
        <p className="newTHC">New</p>
      </div>
    </Card>
  );
}

export default CardARH;
