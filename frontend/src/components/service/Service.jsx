import React from "react";
import "./service.css";
import Icon1 from "../../assets/icon/icon1.png";
import Icon2 from "../../assets/icon/icon2.png";
import Icon3 from "../../assets/icon/icon3.png";
import Icon4 from "../../assets/icon/icon4.png";
import Icon5 from "../../assets/icon/icon5.png";
import Icon6 from "../../assets/icon/icon6.png";
import Icon7 from "../../assets/icon/icon7.png";
import Icon8 from "../../assets/icon/icon8.png";
import FrameIcon from "../../assets/icon/frameIcon.png";

const Service = () => {
  return (
    <section className="services container">
      <div className="textCenter">
        <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
        <span className="subtitle">My Service</span>
      </div>
      <h1 className="serviceHead">Services I Offer</h1>
      <div className="services-grid">
        <div className="service">
          <img src={Icon2} alt="UI/UX Design Icon" />
          <h2>UI/UX Design</h2>
          <p>
            When our power of choice is untrammelled and nothing prevents our
            being able.
          </p>
        </div>
        <div className="service">
          <img src={Icon1} alt="Mobile App Icon" />
          <h2>Mobile App</h2>
          <p>
            When our power of choice is untrammelled and nothing prevents our
            being able.
          </p>
        </div>
        <div className="service">
          <img src={Icon8} alt="Graphic Design Icon" />
          <h2>Graphic Design</h2>
          <p>
            When our power of choice is untrammelled and nothing prevents our
            being able.
          </p>
        </div>
        <div className="service">
          <img src={Icon3} alt="Web Developer Icon" />
          <h2>Web Developer</h2>
          <p>
            When our power of choice is untrammelled and nothing prevents our
            being able.
          </p>
        </div>
        <div className="service">
          <img src={Icon7} alt="SEO Optimization Icon" />
          <h2>SEO Optimization</h2>
          <p>
            When our power of choice is untrammelled and nothing prevents our
            being able.
          </p>
        </div>
        <div className="service">
          <img src={Icon6} alt="WordPress Developer Icon" />
          <h2>WordPress Developer</h2>
          <p>
            When our power of choice is untrammelled and nothing prevents our
            being able.
          </p>
        </div>
        <div className="service">
          <img src={Icon4} alt="App Development Icon" />
          <h2>App Development</h2>
          <p>
            When our power of choice is untrammelled and nothing prevents our
            being able.
          </p>
        </div>
        <div className="service">
          <img src={Icon5} alt="Business Strategy Icon" />
          <h2>Business Strategy</h2>
          <p>
            When our power of choice is untrammelled and nothing prevents our
            being able.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
