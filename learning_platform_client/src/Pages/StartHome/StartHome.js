import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Shared/Header/Header";
import Carousel from "react-bootstrap/Carousel";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import "./StartHome.css";
import image from "../../images/Cool Kids - Study.png"
const StartHome = () => {
  const tutorials = useLoaderData();
  console.log(tutorials);
  return (
    <div >
     
     
     <section class="section-1">
     <div class="slide-text half-portion">
           <h1>A Learning educational platform</h1>
           <p class="p_text">Contrary to popular belief, Lorem Ipsum is not simply 
            random text. It has roots in a piece of classical Latin literature  from 45 BC, making it over 2000 years old</p>
            <Link to='/news' className="button button-2 text-decoration-none">Our Courses <i class="fa-solid fa-angle-right"></i></Link>
           
      </div>
     <div class="slide-pic half-portion">
           <img src={image} alt=""/>
     </div>
  </section>
     
     
     
      <div className="fonting">
          <h3 className="text-center">Our Courses</h3>
      <div className="homePage-setup">
      <Carousel className="caurousol-setup">
        {tutorials.map((tutorial) => {
          return (
            <Carousel.Item>
             <div className="carousel-item active">
             <img
                className="imageSetup"
                src={tutorial.image_url}
                alt="Third slide"
              />
             </div>

              <Carousel.Caption>
                <h3 className="textColor mt-2">{tutorial.title}</h3>
                <p className="textColor">
                {tutorial.title} framework is an open-source JavaScript framework and library developed by Facebook.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      </div>
      </div>
    </div>
  );
};

export default StartHome;
