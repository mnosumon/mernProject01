import React from "react";
import "./portfolio.css";
import Placeholder from "../../assets/portfolio/placeholder.png";
import Placeholder1 from "../../assets/portfolio/placeholder1.png";
import Placeholder2 from "../../assets/portfolio/placeholder2.png";
import Placeholder3 from "../../assets/portfolio/placeholder3.png";
import Placeholder4 from "../../assets/portfolio/placeholder4.png";
import Placeholder5 from "../../assets/portfolio/placeholder5.png";
import FrameIcon from "../../assets/icon/frameIcon.png";

const Portfolio = () => {
  return (
    <section class="portfolio">
      <div className="container">
        <div className="textCenter">
          <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
          <span className="subtitle">My Portfolio</span>
        </div>
        <h2>Visit My Portfolio</h2>
        <div class="portfolio-container">
          <div className="">
            <img src={Placeholder} alt="Portfolio Image" />
          </div>
          <div className="">
            <img src={Placeholder1} alt="Portfolio Image" />
          </div>
          <div className="">
            <img src={Placeholder2} alt="Portfolio Image" />
          </div>
          <div className="">
            <img src={Placeholder3} alt="Portfolio Image" />
          </div>
          <div className="">
            <img src={Placeholder4} alt="Portfolio Image" />
          </div>
          <div className="">
            <img src={Placeholder5} alt="Portfolio Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
