import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardAsideARS.css";

function CardAsideARS(props) {
  return (
    <Card className="row cardARS">
      <div className="containerARLT">
        <TitleCardAR title="Listings" />
        <a className="ancARL">See all</a>
      </div>
      <div className=" cardARSS">
        <TitleARAncor title="Astra DB's Build-A-Thon"></TitleARAncor>
        <p class="text-muted pARtm">cfp</p>
      </div>
      <div className=" cardARSS">
        <TitleARAncor title="Ready-to-use UI Test Automation Architecture using Java and Selenium WebDriver"></TitleARAncor>
        <p class="text-muted pARtm">music</p>
      </div>
      <div className=" cardARSS">
        <TitleARAncor title="✂️ Add the best Image Cropper to your Upload Fields"></TitleARAncor>
        <p class="text-muted pARtm">collabs</p>
      </div>
      <div className=" cardARSS">
        <TitleARAncor title="Looking for teaching position!"></TitleARAncor>
        <p class="text-muted pARtm">education</p>
      </div>
      <div className=" cardARSS">
        <TitleARAncor title="📨 This Week In React: newsletter for professionals ⚛️"></TitleARAncor>
        <p class="text-muted pARtm">education</p>
      </div>
      <div className=" cardARSS">
        <TitleARAncor title="Create a Listing"></TitleARAncor>
        <p class="text-muted pARtm">music</p>
      </div>
      <div className=" cardARSrCL">
        <a className="ancARCL">Create a Listing</a>
      </div>
    </Card>
  );
}

export default CardAsideARS;
