import { updateProfile } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../../../../contexts/AuthProvoder/AuthProvider";
import Header from "../../Header/Header";
import './Register.css'




const Register = () => {
  const { loadUserRegister , loadUpdateProfile } = useContext(AuthContext);
  const [error , setError ] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const namee = form.name.value;
    const photoURLL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = {
      displayName : namee,
      photoURL : photoURLL
    }
    console.log(namee, photoURLL, email, password);
    loadUserRegister(email, password)
      .then((res) => {
        const user = res.user;
        setError('')
        loadUpdateProfile(profile)
        navigate('/login')
      })
      .catch((error) => {
        const emessage = error.message;
        setError(emessage)
        //console.log(emessage)
      });
      
      
  };

  return (
    <div >
      {/* <Header></Header> */}
      <Form className='margining' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Enter photo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-danger" >
           {error}
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
