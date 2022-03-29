import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardARHW.css";

function CardARHW(props) {
  return (
    <Card className="row cardARS">
      <TitleCardAR title="#watercooler" />
      <div className="cardARSS numCPARH">
        <TitleARAncor title="How do you start your work day?"></TitleARAncor>
        <p className="text-muted ">3 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Why do I need to create a blog posts buffer? (stop blogging weekly) no"></TitleARAncor>
        <p className="text-muted ">37 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="How do you take notes while you code?"></TitleARAncor>
        <p className="text-muted ">18 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="Role Call! Tell us a bit about yourself."></TitleARAncor>
        <p className="text-muted ">29 comments</p>
      </div>
      <div className="cardARSS numCPARH">
        <TitleARAncor title="What are some behaviours that, in your opinion, define a senior developer?"></TitleARAncor>
        <p className="text-muted ">5 comments</p>
      </div>
    </Card>
  );
}

export default CardARHW;
