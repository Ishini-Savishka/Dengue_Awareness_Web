import React from "react";
import BannerImage from "../Assets/Dengue-3.jpg";
import BannerImage1 from "../Assets/dengue-1.jpg";
import BannerImage2 from "../Assets/Dengue-2.jpg";
import BannerImage3 from "../Assets/Dengue-4.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import About from "./About";
import Work from "./Work";

import Map from "./Map";

import News from "./News";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h4 className="primary-heading">
            Stop Dengue: Protect Yourself and Your Community!
          </h4>
          <p className="primary-text">
            Empowering You, Protecting Us All! Dive into a world of knowledge, 
            prevention, and community action. Together, let's champion a healthier 
            tomorrow by staying informed and taking simple yet impactful steps to 
            stop Dengue in its tracks. Your commitment makes a difference- welcome 
            to a safer, stronger community!
          </p>
        <button className="primary-button">
          Symptoms Checker <FiArrowRight />
        </button>

          <div className="secondary-buttons">
          <div className="secondary-buttons">
  <button className="secondary-button" style={{ marginRight: '10px' }}>
    <img src={require('../Assets/google-play-5.svg').default} alt="Download Android" style={{ width: '30px', height: '30px' }} /> Download Android
  </button>
  <button className="secondary-button">
    <img src={require('../Assets/app-store-1.svg').default} alt="Download IOS" style={{ width: '30px', height: '30px' }} /> Download IOS
  </button>
</div>
          </div>
        </div>
        <div className="home-image-section">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          className="slider"
          autoPlay={true}
          interval={3000}
          transitionTime={1000}
        >
            <div>
              <img src={BannerImage} alt="" className="carousel-image" />
            </div>
            <div>
              <img src={BannerImage1} alt="" className="carousel-image" />
            </div>
            <div>
              <img src={BannerImage2} alt="" className="carousel-image" />
            </div>            
            <div>
              <img src={BannerImage3} alt="" className="carousel-image" />
            </div>
          </Carousel>
        </div>
      </div>
      <About />
      <Work/>
      <Map/>
          <News />
          <Contact />
    </div>

  );
};

export default Home;
