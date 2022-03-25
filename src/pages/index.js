import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardPost from "../components/CardPost/CardPost";
import CardAsideR from "../components/CardAsideR/CardAsideR";
import CardAsideRT from "../components/CardAsideRT/CardAsideRT";
import CardAsideARS from "../components/CardAsideARS/CardAsideARS"
import { Container, Row, Col } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "64px", paddingTop: "1rem" }}>
        <Row>
          <Col md={3}>Robert</Col>
          <Col xs={12} md={9} lg={6} className="pe-0 ps-0 rounded-0">
            <CardPost />
          </Col>
          <Col>
            <CardAsideRT></CardAsideRT>
            <CardAsideR></CardAsideR>
            <CardAsideARS></CardAsideARS>
          </Col>
        </Row>
      </Container>
      {/* <Header>
      </Header>
      <Main>
        <AsideLeft />
        <SectionPost />
        <AdsideRight />
      </Main>
      <Footer /> */}
    </>
  );
}

export default Layout;
