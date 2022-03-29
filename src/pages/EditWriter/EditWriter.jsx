import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import "./EditWriter.css";
import Card from "react-bootstrap/Card";
import FooterDetailPost from "../../components/FooterDetailPost/FooterDetalPost";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditWriter() {


    
  return (
    <>
      <Navbar />
      <div className="containerForm">
        <Card className="cardForm">
          <Form className="continerForm">
            <Form.Group className="mb-3 contanerPHF" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="containerImput"
                type="text"
                placeholder="Name"
                name="name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 contanerPHF" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="containerImput"
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 contanerPHF" controlId="formBasicEmail">
              <Form.Label>Nationality</Form.Label>
              <Form.Control
                className="containerImput"
                type="text"
                placeholder="Nationality"
                name="nationality"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 contanerPHF" controlId="formBasicEmail">
              <Form.Label>Biography</Form.Label>
              <Form.Control
                className="containerImput"
                type="text"
                placeholder="Biography"
                name="biography"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 contanerPHF" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="containerImput"
                type="text"
                placeholder="Email"
                name="email"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 contanerPHF" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="containerImput"
                type="text"
                placeholder="Password"
                name="password"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <div>
              <Button
                className="btnEW containerImput"
                variant="primary"
                type="To update"
              >
                To Update
              </Button>
            </div>
            <div>
              <Button
                className="btnEW containerImput"
                variant="outline-primary"
                type="delete"
              >
                Delete
              </Button>
            </div>
          </Form>
        </Card>
      </div>
      <FooterDetailPost />
    </>
  );
}

export default EditWriter;
