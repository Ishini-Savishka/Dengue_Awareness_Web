import React from "react";
import Navbar from "./Navbar";
import AboutBackground from "../Assets/dengue6.jpg";
import AboutBackgroundImage1 from "../Assets/dengue7.jpg";
import AboutBackgroundImage2 from "../Assets/dengue8.jpg";

import Symptoms from "./symptoms";
import Contact from "./Contact";


const Home = () => {
  return (
    <div className="home-container-dengue">
      <Navbar />
      <div className="home-content">
        <div className="left-img-container">
          <h2>Report Dengue Case</h2>
          <br></br>
          <div className="dengue-images-container">
      <img className="img-fluid" src={AboutBackground} alt="" />
      <img className="img-fluid" src={AboutBackgroundImage1} alt="" /><br></br>
      <br></br>
      <img className="img-fluid" src={AboutBackgroundImage2} alt="" />

    </div>        </div>
        <div className="right-form-container">
          <form className="custom-form">

            <div className="input-group">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>

            <div className="input-group">
              <label htmlFor="name">Last Name</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>


            <div className="input-group">
            <label htmlFor="date">Date of Birth:</label>
            <div className="date-input">
              <input type="date" id="date" name="date" />
            </div>
          </div>


                      <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <div className="custom-dropdown">
              <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <span className="arrow"></span>
            </div>
          </div>



            <div className="input-group">
              <label htmlFor="name">Address</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>
            <div className="input-group">
              <label htmlFor="name">Symptoms</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>

            <div className="input-group">
              <label htmlFor="name">Fever Temperature</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>

            <div className="input-group">
              <label htmlFor="name">Date of Onset</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>

            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Symptoms />
<Contact/>

    </div>
  );
};

export default Home;
