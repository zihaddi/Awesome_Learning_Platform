import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle , FaGithub , FaFacebook ,FaTwitter , FaWhatsapp ,FaTwitch} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvoder/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const RightSideNav = () => {
  
  const {loadLogin} = useContext(AuthContext)
  const providers = new GoogleAuthProvider();
  const navigate = useNavigate();
  const onLoadLogin = ()=>{
    loadLogin(providers)
    .then((result) => {
      const user = result.user;
      console.log(user)
      navigate('/')
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  return (
    <div>
      <ButtonGroup vertical>
      <Button onClick={onLoadLogin} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
      <Button  variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
      </ButtonGroup>

      <p className='mt-4 mb-3'>Find us on</p>
      <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <div>
      <BrandCarousel></BrandCarousel>
    </div>
    </div>
  );
};

export default RightSideNav;