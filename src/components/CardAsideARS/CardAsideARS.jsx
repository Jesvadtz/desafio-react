import React from "react";
import Card from "react-bootstrap/Card";
import TitleCardAR from "../TileCardAR/TitleCardAR";
import TitleARAncor from "../TitleARAncor/TitleARAncor";
import "./CardAsideARS.css";

function CardAsideARS(props) {
  return (
    <Card className="row cardARS">
      <TitleCardAR title="Listings" />

      <TitleARAncor
        class="text-muted"
        title="Astra DB's Build-A-Thon"
      ></TitleARAncor>
      <TitleARAncor title="Ready-to-use UI Test Automation Architecture using Java and Selenium WebDriver"></TitleARAncor>
      <TitleARAncor title="✂️ Add the best Image Cropper to your Upload Fields"></TitleARAncor>
      <TitleARAncor title="Looking for teaching position!"></TitleARAncor>
      <TitleARAncor title="📨 This Week In React: newsletter for professionals ⚛️"></TitleARAncor>
      <TitleARAncor title="Create a Listing"></TitleARAncor>
    </Card>
  );
}

export default CardAsideARS;
