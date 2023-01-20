import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
  const img1URL = 'https://t4.ftcdn.net/jpg/03/13/59/87/360_F_313598786_qfT2oTVItHD44pbBsMgjncPf8OuB0Osg.jpg'

  const img2URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zlHgjkcI54KuihtgA-ROF1nwnWypw9BGYXDEpNc3yBH64jBIH9ORxNCg5XF5kXBzp6Y&usqp=CAU'
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2URL}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1URL}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default BrandCarousel;