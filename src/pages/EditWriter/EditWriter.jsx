import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FooterDetailPost from "../../components/FooterDetailPost/FooterDetalPost";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditWriter() {
  return (
    <>
      <Navbar />
      <FooterDetailPost />
    </>
  );
}

export default EditWriter;
