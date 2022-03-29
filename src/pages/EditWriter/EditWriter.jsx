import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./EditWriter.css";
import Card from "react-bootstrap/Card";
import FooterDetailPost from "../../components/FooterDetailPost/FooterDetalPost";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditWriter() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.idWriter);
  const miStorage = window.localStorage;
  const token = miStorage.getItem("token");

  const initialStateWriter = {
    name: "",
    lastName: "",
    nationality: "",
    biography: "",
    email: "",
    password: "",
  };

  const [editUser, setEditUser] = React.useState(initialStateWriter);
  //const { name, lastName, nationality, biography, email, password } = editUser;

  useEffect(() => {
    async function getWriter() {
      const writer = await fetch(
        `http://localhost:8080/writers/${params.idWriter}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      console.log(writer.data.writer);
      setEditUser(writer.data.writer);
    }
    getWriter();
  }, [params.idWriter]);

  const upDateUserToState = (event) => {
    setEditUser({
      ...editUser,
      [event.target.name]: event.target.value,
    });
  };

  const upDateUserToServ = async (event) => {
    event.preventDefault();
    console.log(editUser);
    await fetch(`http://localhost:8080/writers/${params.idWriter}`, {
      method: "PATCH",
      body: JSON.stringify(editUser),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((result) => {
        console.log("RES", result);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  const deletWriter = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/writers/${params.idWriter}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((result) => {
        console.log("RES", result);
        miStorage.removeItem("idWriter");
        miStorage.removeItem("token");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

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
                onChange={upDateUserToState}
                value={editUser.name}
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
                onChange={upDateUserToState}
                value={editUser.lastName}
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
                onChange={upDateUserToState}
                value={editUser.nationality}
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
                onChange={upDateUserToState}
                value={editUser.biography}
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
                onChange={upDateUserToState}
                value={editUser.email}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 contanerPHF" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="containerImput"
                type="password"
                placeholder="Password"
                name="password"
                onChange={upDateUserToState}
                value={editUser.password}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <div>
              <Button
                className="btnEW containerImput"
                variant="primary"
                type="submit"
                onClick={upDateUserToServ}
              >
                To Update
              </Button>
            </div>
            <div>
              <Button
                className="btnEW containerImput"
                variant="outline-primary"
                type="submit"
                onClick={deletWriter}
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
