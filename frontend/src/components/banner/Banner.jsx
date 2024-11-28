import React from "react";
import "./banner.css";
import BannerIMG from "../../assets/image/bannerIMG.jpg";
import FrameIcon from "../../assets/icon/frameIcon.png";

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="container banner_wrapper">
        <div className="content">
          <div className="subTitleWrapper">
            <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
            <span className="subtitle">I AM DESIGNER</span>
          </div>
          <h1>
            Creative Design and
            <br />
            Web Solutions
          </h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et.
          </p>
          <a href="#" className="btn">
            Download My CV
          </a>
        </div>
        <div className="image-container">
          <img src={BannerIMG} alt="Designer" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
