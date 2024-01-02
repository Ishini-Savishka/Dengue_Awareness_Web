import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import "../Footer.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "../Assets/logo.svg";

const Footer = () => {
  return (
    <footer className="mainfooter">
      <div className="footer-middle">
        <div className="container">
          <div className="row">

          <div className="col-md-2 col-sm-6">
              <div className="footer-pad">
              <img src={Logo}/>
              <p>Shield yourself, don't letDengue in a 
                community united, where prevention begins.</p>
        </div>
      </div>

          <div className="col-md-2 col-sm-6">
              <div className="footer-pad">
              <h4>Home Page</h4>
          <ul class="list-unstyled">
            <li><a href=" "></a></li>
            <li href="">Impact of dengue</li>
            <li href="">Community</li>
            <li href="">Near by Hospitals</li>
            <li href="">News & Updates</li>
          </ul>
        </div>
      </div>

            <div className="col-md-2 col-sm-6">
              <div className="footer-pad">
              <h4>About Dengue</h4>
          <ul class="list-unstyled">
            <li><a href=" "></a></li>
            <li href="">Impact of dengue</li>
            <li href="">Community</li>
            <li href="">Near by Hospitals</li>
            <li href="">News & Updates</li>
          </ul>
        </div>
      </div>
      <div class="col-md-2 col-sm-6">
        <div class="footer-pad">
          <h4>About Dengue</h4>
          <ul class="list-unstyled">
          <li href="">Introduction</li>
            <li href="">Transmissions</li>
            <li href="">Statistics</li>
            <li href="">Resources</li>
          </ul>
        </div>
      </div>
      <div class="col-md-2 col-sm-6">
        <div class="footer-pad">
          <h4>prevention Tips</h4>
          <ul class="list-unstyled">
          <li href="">Articles</li>
            <li href="">Videos</li>
            <li href="">Blogs</li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div class="col-md-2">
    		<h4>Connect with us</h4>
        <ul class="social-network social-circle">
        <li><a href="" className="icoFacebook" title="Facebook"><FaFacebookF /></a></li>
        <li><a href="" className="icoTwitter" title="Twitter"><FaXTwitter /></a></li>
                <li><a href="" className="icoLinkedin" title="Linkedin"><SiLinkedin /></a></li>
                <li><a href="" className="icoYoutube" title="Youtube"><BsYoutube /></a></li>

            </ul>				
		</div>
    </div>



  </div>
  </div>
</footer>
  );
};

export default Footer;
