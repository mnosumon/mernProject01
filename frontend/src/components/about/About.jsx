import React from "react";
import "./about.css";
import AboutIMG from "../../assets/image/aboutIMG.png";
import FrameIcon from "../../assets/icon/frameIcon.png";
import ProjectIcon from "../../assets/icon/projectIcon.png";
import TimeIcon from "../../assets/icon/timeIcon.png";
import tickIcon from "../../assets/icon/tickIcon.png";

const About = () => {
  return (
    <section className="hero_section">
      <div className="container banner_wrapper">
        <div className="image-container">
          <img src={AboutIMG} alt="Designer" />
        </div>
        <div className="content">
          <div className="subTitleWrapper">
            <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
            <span className="subtitle">About Me</span>
          </div>
          <h1>
            I Can Design <br /> Anything You Want
          </h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit.
          </p>
          <div className="timelineWrapper">
            <div className="timeLine">
              <div className="imgWithIcon">
                <img className="image" src={ProjectIcon} alt="ProjectIcon" />
              </div>
              <div className="timeLineDesc">
                <h3>350+</h3>
                <h3>Complete Project</h3>
              </div>
            </div>
            <div className="timeLine">
              <div className="imgWithIcon">
                <img className="image" src={TimeIcon} alt="TimeIcon" />
              </div>
              <div className="timeLineDesc">
                <h3>16+</h3>
                <h3>Year of experience</h3>
              </div>
            </div>
          </div>
          <div className="tickWrapper">
            <div className="timeLine">
              <img src={tickIcon} alt="tickIcon" />
              <span>Work simple and cline design</span>
            </div>
            <div className="timeLine">
              <img src={tickIcon} alt="tickIcon" />
              <span>New idea and user friendly design</span>
            </div>
          </div>
          <a href="#" className="btn">
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
