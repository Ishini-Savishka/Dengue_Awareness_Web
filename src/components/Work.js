import React from "react";
import work1 from "../Assets/work1.jpg";
import work2 from "../Assets/work2.svg";
import work3 from "../Assets/download.webp";

const Work = () => {
  const workInfoData = [
    {
      image: work1,
      title: "50%",
      text: "of the world's population is at risk of infection",
    },
    {
      image: work2,
      title: "390M",
      text: "infections per year ",
    },
    {
      image: work3,
      title: "85%",
      text: "increase in number of cases from 1990 to 2023",
    },
  ];
  return (
    <div className="work-section-wrapper">
        <div class="content">

      <div className="work-section-top">
        <h2 className="work-heading">Dengue in Our Community</h2>
        <p className="work-text">
        Dengue is the most widely distributed and rapidly spreading 
        mosquito-borne viral disease in the world, fuelled by climate 
        change, rapid urbanization and population growth. Dengue is 
        classified by the World Health Organization as one of the top 
        ten threats to public health.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Work;
