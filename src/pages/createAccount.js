import React from "react";
import { Form, Button, Navbar } from 'react-bootstrap';
import NavbarSignup from "../components/NavbarSignup/NavSignup";
import FooterSignUp from "../components/FooterSignup/FooterSignup";

function SignUp() {

  const [newUser, setNewUser] = React.useState({});
  const { name, lastName, nationality, biography, email, password } = newUser

  const createUser = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
    console.log(newUser)
  };

  const SubmitNewUser = async (event) => {
    event.preventDefault();
    console.log(newUser)
    /* fetch('http://localhost:8080/writers/signUp', {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type":"application/json"
      }
    })
        .then((res) => {
          console.log("RES", res);
        })
        .catch((err)=>{
          console.log("ERR",err);
        });*/
        const options = {
          method: "POST",
          body:JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json"
          }
        }
        fetch('http://localhost:8080/writers/signUp',options)
        .then((response)=>response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error)=>{console.log(error)})
 };   
    




return (
  <>
    <NavbarSignup />
    <Form onSubmit={SubmitNewUser} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px", marginBottom: "150px" }}>
      <Form.Group className="mb-3" style={{ minWidth: "400px" }} controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" onChange={createUser} />
        <Form.Text className="text-muted">
          We'll never share your information with anyone.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" style={{ minWidth: "400px" }} controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={createUser} />
        <Form.Text className="text-muted">
          We'll never share your information with anyone.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" style={{ minWidth: "400px" }} controlId="formBasicEmail">
        <Form.Label>Nationality</Form.Label>
        <Form.Control type="text" placeholder="Nationality" name="nationality" onChange={createUser} />
        <Form.Text className="text-muted">
          We'll never share your information with anyone.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" style={{ minWidth: "400px" }} controlId="formBasicEmail">
        <Form.Label>Biography</Form.Label>
        <Form.Control type="text" placeholder="Biography" name="biography" onChange={createUser} />
        <Form.Text className="text-muted">
          We'll never share your information with anyone.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" style={{ minWidth: "400px" }} controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" name="email" onChange={createUser} />
        <Form.Text className="text-muted">
          We'll never share your information with anyone.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" style={{ minWidth: "400px" }} controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name="password" onChange={createUser} />
        <Form.Text className="text-muted">
          We'll never share your information with anyone.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <FooterSignUp />
  </>
)}

export default SignUp;