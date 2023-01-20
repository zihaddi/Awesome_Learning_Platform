import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../contexts/AuthProvoder/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
//import { createContext } from "react";
//import { Children } from "react";
import "./Header.css";
import { Switch } from "antd";
import { FaMoon,  FaRegSun } from "react-icons/fa";
import image from '../../../images/text-1667134401814.png'


const Header = () => {
  const { user, loadLogout } = useContext(AuthContext);

  const styleOn = {
    backgroundColor: "lightblue",
  };
  const styleOff = {
    backgroundColor: "black",
    color: "white",
  };
  const [toggle, setToggle] = useState(false);
  const toggleTheme = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const LoadLogoutFunction = () => {
    loadLogout().then("Logged Out Successfully");
  };

  let activeStyle = {
    color: "white",
    backgroundColor: "rgb(242, 164, 234)",
    padding: "5px",
    borderRadius: "5px",
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-4"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <NavLink className="imageSetupp" to="/">
              
              <img  src={image} alt='sagol'></img>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink className="text-decoration-none text-dark" to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activeStyle : { padding: "5px" }
                  }
                  className="text-decoration-none text-dark"
                  to="/news"
                >
                  Courses
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activeStyle : { padding: "5px" }
                  }
                  className="text-decoration-none text-dark"
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activeStyle : { padding: "5px" }
                  }
                  className="text-decoration-none text-dark"
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </Nav.Link>
            </Nav>
            <button
                className="btn"
                onClick={toggleTheme}
                style={toggle ? styleOn : styleOff}
              >
                {toggle ? <><FaRegSun ></FaRegSun> light</> : <><FaMoon ></FaMoon> Dark</>}
              </button>
            <Nav>
              

              <Nav.Link href="#">
                {user?.uid ? (
                  <>
                    <small className="me-2">{user?.displayName}</small>
                    {user?.photoURL ? (
                      <Image
                        roundedCircle
                        style={{ height: "30px" }}
                        src={user?.photoURL}
                        data-toggle="tooltip" data-placement="bottom" title={user?.displayName}
                      ></Image>
                    ) : (
                      <FaUser></FaUser>
                    )}
                    <Button
                      size="sm"
                      className="ms-3 "
                      onClick={LoadLogoutFunction}
                    >
                      LogOut
                    </Button>
                  </>
                ) : (
                  <>
                    <NavLink to="/login" className="me-2">
                      <Button variant="primary" size="sm">
                        Login
                      </Button>
                    </NavLink>
                    <NavLink to="/register">
                      <Button variant="primary" size="sm">
                        Register
                      </Button>
                    </NavLink>
                  </>
                )}
              </Nav.Link>
              <div className="App"></div>
            </Nav>

            <div className="d-block d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div></div>
    </div>
  );
};

export default Header;
