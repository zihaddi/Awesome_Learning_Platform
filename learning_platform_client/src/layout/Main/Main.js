import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import LeftSideNav from '../../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Pages/Shared/RightSideNav/RightSideNav';
import { StyledEngineProvider } from '@mui/material/styles';

const Main = () => {
  const location = useLocation();
  //console.log(location)
  return (
    <div>
      <StyledEngineProvider injectFirst><Header></Header></StyledEngineProvider>
      {location.pathname === '/' || location.pathname === '/blogs' || location.pathname === '/faq' || location.pathname === '/login' || location.pathname === '/register' ? 
      <Container>
         <Outlet></Outlet>
      </Container> :
      <Container>
           <Row>
          <Col lg='3' className='d-none d-lg-block '>
           <LeftSideNav></LeftSideNav>  
          </Col>
          <Col lg='9'>
            <Outlet></Outlet>
          </Col>
         
        </Row>
      </Container> }
      <Footer></Footer>
    </div>
  );
};

export default Main;