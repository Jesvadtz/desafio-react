import React from "react";
import {Form, Button, Navbar} from 'react-bootstrap';
import NavbarSignup from "../components/NavbarSignup/NavSignup";
import FooterSignUp from "../components/FooterSignup/FooterSignup";

function SignUp (){

   const [newUser, setNewUser] = React.useState({});
   const {name, lastName, nationality, biography, email, password} = newUser

   function createUser(event) {
     console.log(
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  }
 
  function enviarProducto(event){
      event.preventDefault()
      alert(JSON.stringify(newUser))

 /*     fetch('http://localhost:8080/writers/signUp',{
        method:"POST",
        body:JSON.stringify(
            {
                name: name,
                lastName: lastName,
                nationality: nationality,
                biography: biography,
                email: email,
                password:password
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))*/
  }



    return(
        <>
        <NavbarSignup/>
        <Form onSubmit={enviarProducto} style={{ display:"flex", flexDirection:"column", alignItems:"center", marginTop:"100px", marginBottom:"150px"}}>
        <Form.Group className="mb-3" style={{minWidth:"400px"}} controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" onChange={createUser} />
          <Form.Text className="text-muted">
            We'll never share your information with anyone.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" style={{minWidth:"400px"}} controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" onChange={createUser} />
          <Form.Text className="text-muted">
          We'll never share your information with anyone.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" style={{minWidth:"400px"}} controlId="formBasicEmail">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" placeholder="Nationality" onChange={createUser} />
          <Form.Text className="text-muted">
          We'll never share your information with anyone.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" style={{minWidth:"400px"}} controlId="formBasicEmail">
          <Form.Label>Biography</Form.Label>
          <Form.Control type="text" placeholder="Biography" onChange={createUser} />
          <Form.Text className="text-muted">
          We'll never share your information with anyone.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" style={{minWidth:"400px"}} controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={createUser} />
          <Form.Text className="text-muted">
          We'll never share your information with anyone.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" style={{minWidth:"400px"}} controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" onChange={createUser} />
          <Form.Text className="text-muted">
          We'll never share your information with anyone.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        <FooterSignUp/>
        </>
)}

export default SignUp;