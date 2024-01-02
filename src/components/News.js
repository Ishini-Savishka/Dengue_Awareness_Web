import React, { useState } from "react";
import work1 from "../Assets/news2.jpg";
import work2 from "../Assets/news3.png";
import work3 from "../Assets/news1.jpg";
import work4 from "../Assets/news4jpg.jpg";
import work5 from "../Assets/news5.jpg";


const Work = () => {
  const newsInfoData = [
    {
      image: work1,
      title: "Dengue Surging Globally as Climate Change Kicks in",
      text: " The world Health Organization says dengue, a mosquito-borne illness, is surging worldwide because of climate change, along with social.",
      link: "https://example.com" 

    },
    
    
    {
      image: work2,
      title: "El Nino effect: Cases of dengue have increased globally",
      text: "There has been a ten-fold increase in dengue cases between the years 2000 and 2019, according to an analysis by the World Health",
    },
    {
      image: work3,
      title: "Dengue Grips Sri Lanka, 6,000+ Cases in December Alone",
      text: "COLOMBO Sri Lanka's battle against dengue fever intensifies as the National Dengue Control Unit (NDCU) reports a staggering",
    },
    {
      image: work4,
      title: "El Nino effect: Cases of dengue have increased globally",
      text: "There has been a ten-fold increase in dengue cases between the years 2000 and 2019, according to an analysis by the World Health",
    },
    {
      image: work5,
      title: "Dengue Surging Globally as Climate Change Kicks in",
      text: " The world Health Organization says dengue, a mosquito-borne illness, is surging worldwide because of climate change, along with social.",
      link: "https://example.com" 

    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 <= newsInfoData.length - 3 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : newsInfoData.length - 3
    );
  };

  return (
    <div className="news-section-wrapper">
      <div className="content">
        <div className="work-section-top">
          <h2 className="work-heading">News & Updates</h2>
        </div>
        <div className="work-section-bottom">
          <button className="prev" onClick={prevSlide}>
            &#8249;
          </button>
          <div className="slider">
            {newsInfoData.slice(startIndex, startIndex + 3).map((data, index) => (
              <div className="news-section-info" key={index}>
                <div className="info-boxes-img-container">
                  <div className="image-container">
                    <img src={data.image} alt="" className="card-image" />
                  </div>
                </div>
                <div className="about-content">
                  <h2>{data.title}</h2>
                  <p>{data.text}</p>
                  <a href={data.link} className="read-more-link">Learn More</a>

                </div>
              </div>
            ))}
          </div>
          <button className="next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
        <button className="news-button">
            See More
          </button>
      </div>
    </div>
  );
};

export default Work;
