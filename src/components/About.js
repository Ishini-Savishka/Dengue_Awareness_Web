import React from "react";
import AboutBackground from "../Assets/about1.jpg";
import AboutBackgroundImage1 from "../Assets/about4.png";
import AboutBackgroundImage2 from "../Assets/about2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-section-wrapper">
      <div className="work-section-top">
        <h2 className="about-heading">
          What is the impact of dengue?
        </h2>
        <p className="about-text">
          <p> Dengue, a mosquito-borne viral infection, has far-reaching consequences on health, economics, and communities. This overview</p> 
          <p> explores the impact of dengue, spanning from immediate health challenges to broader societal implications. Understanding </p>
          <p> these effects is vital for developing effective strategies.</p>
        </p>
        </div>
<br></br>
<br></br>

        {/* Images are placed below the 'about-text' paragraph */}
        <div className="about-section-container">
  <div className="images-and-list-container">
    <div className="images-container">
      <img className="img-fluid rounded" src={AboutBackground} alt="" />
      <img className="img-fluid rounded" src={AboutBackgroundImage1} alt="" /><br></br>
      <img className="img-fluid rounded" src={AboutBackgroundImage2} alt="" />

    </div>
    <div className="list-container">
    <ul className="list-items">
        <div className="icon-and-title">
          <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" />
          <h3>Health Impact:</h3>
        </div>
        <div className="text-content">
        <p>Dengue ranges from mild to severe symptoms, with severe </p>
        <p> cases potentially requiring hospitalization, increasing </p>
        <p> healthcare costs.</p>        
   </div>
      <br></br>
        <div className="icon-and-title">
          <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" />
          <h3>Economic Consequences:</h3>
        </div>
        <div className="text-content">
        <p>Individuals may experience productivity loss during illness, </p>
        <p> coupled with financial burdens from healthcare costs and </p>
        <p> potential long-term effects.</p>        
        </div>
        <br></br>
        <div className="icon-and-title">
          <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" />
          <h3>Community Challenges:</h3>
        </div>
        <div className="text-content">
        <p>Dengue outbreaks strain public health resources, fostering </p>
        <p> increased fear and anxiety within communities. </p>
        </div>
        <br></br>
        <div className="icon-and-title">
          <FontAwesomeIcon icon={faLocationCrosshairs} size="2x" />
          <h3>Global Spread:</h3>
        </div>
        <div className="text-content">
        <p>Dengue has the capacity to spread globally through travel, </p>
        <p> emphasizing the necessity for ongoing global research to </p>
        <p> develop effective prevention measures.</p>        
        </div>
    </ul>
  </div>
</div>

      </div>
      <div className="about-buttons-container ">
        <button className="primary-button-1">See More</button>
      </div>

    </div>
  );
};

export default About;
