import React, { useState } from "react";
import "./login.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLogin] = useState({
    email: "",
    password: "",
  });
  console.log("DATA", loginData);

  const handleLogin = (e) => {
    setLogin({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/writers/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => {
        console.log("RES", result);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
    navigate("/", { replace: true });
  };

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="containerLogin">
        <h1>Welcome to DEV Community</h1>
        <h3>
          <a id="ancorh3">DEV Community </a>is a community of 820,883 amazing
          developers
        </h3>
        <div className="buttonL appleBtn">
          <i className="bi bi-apple"></i> Continue with Apple
        </div>
        <div className="buttonL foremBtn">
          <i className="bi bi-discord"></i> Continue with Forem
        </div>
        <div className="buttonL gitHubBtn">
          <i className="bi bi-github"></i> Continue with GitHub
        </div>
        <div className="buttonL twitterBtm">
          <i className="bi bi-twitter"></i> Continue with Twitter
        </div>
        <div className="containerLP">
          <hr></hr>
          <p>Have a password? Continue with your email address</p>
          <hr></hr>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={loginData.email}
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleLogin}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={loginData.password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleLogin}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button className="btnLR" type="submit" onClick={submit}>
            Continue
          </Button>
        </Form>
        <div className="containerFPL">
          <a className="forgetPL">I forgot my password</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
