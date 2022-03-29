import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardARHE.css";

function CardARHE(props) {
  return (
    <Card className="row cardARS">
      <TitleCardAR title="#explainlikeimfive" />
      <div className="cardARSS numCPARH">
        <TitleARAncor title="What is meant by a shape in programming"></TitleARAncor>
        <p className="text-muted ">5 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="The Shell Introduction I Wish I Had"></TitleARAncor>
        <p className="text-muted ">13 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="What is a promise in javascript ? how does it solve callback hell issue?"></TitleARAncor>
        <p className="text-muted ">28 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Explain Artifacts (Deployment) Like I'm Five"></TitleARAncor>
        <p className="text-muted ">19 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Like im 5:What is JQUERY???????"></TitleARAncor>
        <p className="text-muted ">34 comments</p>
      </div>
    </Card>
  );
}

export default CardARHE;
