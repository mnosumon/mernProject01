import React from "react";
import "./resume.css";
import FrameIcon from "../../assets/icon/frameIcon.png";

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <div className="textCenter">
          <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
          <span className="subtitle">My Resume</span>
        </div>
        <h1>10+ YEARS OF EXPERIENCE</h1>

        <div className="section">
          <h2>Education</h2>
          <div className="grid">
            <div className="item">
              <h3>BSc in Computer Science</h3>
              <p className="academyName1P">University of ULAV (2018 - 2022)</p>
              <article>
                Hen our power of choice is untrammelled and when nothing
                prevents our being able
              </article>
            </div>
            <div className="item">
              <h3>BSc in Computer Science</h3>
              <p className="academyName1P">University of ULAV (2018 - 2022)</p>
              <article>
                When our power of choice is untrammelled and when nothing
                prevents our being able.
              </article>
            </div>
            <div className="item">
              <h3>BSc in Computer Science</h3>
              <p className="academyName1P">University of ULAV (2018 - 2022)</p>
              <article>
                When our power of choice is untrammelled and when nothing
                prevents our being able.
              </article>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Software Skills</h2>
          <div className="grid">
            <div className="item">
              <h3>UI/UX Design</h3>
              <p className="academyName1P">University of ULAV (2018 - 2022)</p>
              <article>
                When our power of choice is untrammelled and when nothing
                prevents our being able.
              </article>
            </div>
            <div className="item">
              <h3>Web Developer</h3>
              <p className="academyName1P">University of ULAV (2018 - 2022)</p>
              <article>
                When our power of choice is untrammelled and when nothing
                prevents our being able.
              </article>
            </div>
            <div className="item">
              <h3>App Development</h3>
              <p className="academyName1P">University of ULAV (2018 - 2022)</p>
              <article>
                When our power of choice is untrammelled and when nothing
                prevents our being able.
              </article>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <div className="grid">
            <div className="item">
              <h3>Web Developer & Trainer</h3>
              <p className="academyName1P">Brac Developer Team (2012 - 2016)</p>
              <article>
                Pomnis voluptas assumenda est, omnis dolor repellendus.
              </article>
            </div>
            <div className="item">
              <h3>Front-end Developer</h3>
              <p className="academyName1P">Brane (2020 - 2011)</p>
              <article>
                When our power of choice is untrammelled and when nothing
                prevents our being able.
              </article>
            </div>
            <div className="item">
              <h3>UI/UX Designer</h3>
              <p className="academyName1P">Google Out Tech (2017 - Present)</p>
              <article>
                When our power of choice is untrammelled and when nothing
                prevents our being able.
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
