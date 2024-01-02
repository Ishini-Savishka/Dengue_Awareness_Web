import React from 'react';

const Video = () => {
  return (
    <div className="video-section-wrapper">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="card bg-dark text-white " style={{ maxWidth: '28rem', marginLeft: '20px', marginTop:'40px' }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="YouTube Video"
                className="embed-responsive-item card-img-top"
                src="https://www.youtube.com/embed/2ypAz3w1Kkk" // Replace with the correct YouTube embedded URL or video ID
                allowFullScreen
                style={{ width: '100%', height: '250px'}} // Adjust the width and height as needed
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="content">
            <div className="video-section-top">
              <h1>Defend Against Dengue: 
                <br></br> Your Ultimate Prevention Guide</h1>
              <p className="video-text">
                Dengue is the most widely distributed and rapidly spreading
                mosquito-borne viral disease in the world, fueled by climate change,
                rapid urbanization, and population growth. Dengue is classified by
                the World Health Organization as one of the top ten threats to public health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
