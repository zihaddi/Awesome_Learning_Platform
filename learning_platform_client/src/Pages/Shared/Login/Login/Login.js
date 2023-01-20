import { GoogleAuthProvider , GithubAuthProvider} from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvoder/AuthProvider";
//import Header from "../../Header/Header";

const Login = () => {
  const { loadUserLogin } = useContext(AuthContext);
  const [error , setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/news'
  
  const {loadLogin} = useContext(AuthContext)
  const {loadGithubLogin} = useContext(AuthContext)
  const providersGoogle = new GoogleAuthProvider();
  const providersGithub = new GithubAuthProvider();
  //const navigate = useNavigate();
  const onLoadLogin = ()=>{
    loadLogin(providersGoogle)
    .then((result) => {
      const user = result.user;
      console.log(user)
      navigate(from , {replace : true});
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  const onLoadGithubLogin = ()=>{
    loadGithubLogin(providersGithub)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
      navigate(from , {replace : true});
    }).catch((error) => {
      const errorMessage = error.message;
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(errorMessage)
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loadUserLogin(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError('')
        form.reset();
        navigate(from , {replace : true});
      })
      .catch((error) => {
        const emessage = error.message;
        setError(emessage)
        console.log(emessage);
      });
  };

  return (
    <div >
      {/* <Header></Header> */}
      <Form className="margining " onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
          <Form.Group className="mb-3 text-danger" >
           {error}
        </Form.Group>
        <div >
        <Button variant="primary" type="submit">
          Login
        </Button><br />
        Dont Have Account ? <Link to='/register'>register</Link>
        </div>
        <div className="d-flex justify-content-center mt-4">
        <ButtonGroup vertical className=''>
       <Button  onClick={onLoadLogin} className='mb-2' variant="outline-danger"><FaGoogle></FaGoogle> Login with Google</Button>
       <Button  onClick={onLoadGithubLogin} variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
      </ButtonGroup>
        </div>
      </Form>
     
    </div>
  );
};

export default Login;
