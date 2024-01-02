import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial-section-wrapper">
      <div className="work-section-top">
        <h1 className="map-heading">Nearby Hospitals</h1>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63215406695!2d79.77380331342476!3d6.921831560922283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1703756779247!5m2!1sen!2slk"
          width="2000"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
      <div className="testimonial-section-bottom">
        <p>
        Use the map to find the nearest hospitals equipped to handle Dengue cases. Your health is a</p>
        <p> priority - tap on the markers for details and directions. Swift access to medical care is crucial during -</p>
        <p>a Dengue scare. Stay informed and take action for a speedy recovery.

        </p>
      </div>
    </div>
  );
};

export default Testimonial;
