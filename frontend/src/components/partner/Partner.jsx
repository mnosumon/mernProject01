import React from "react";
import "./partner.css";
import FrameIcon from "../../assets/icon/frameIcon.png";
import Frame01 from "../../assets/icon/frame01.png";
import Frame02 from "../../assets/icon/frame02.png";
import Frame03 from "../../assets/icon/frame03.png";
import Frame04 from "../../assets/icon/frame04.png";
import Frame05 from "../../assets/icon/frame05.png";

const Partner = () => {
  return (
    <div class="partners-section">
      <div className="container">
        <div className="textCenter">
          <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
          <span className="subtitle">My partner</span>
        </div>
        <h2 className="contactHeading">REPUTED PARTNER</h2>
        <div className="partnerGrid">
          <div className="partner">
            <img src={Frame01} alt="Graphic Design Icon" />
          </div>
          <div className="partner">
            <img src={Frame01} alt="Graphic Design Icon" />
          </div>
          <div className="partner">
            <img src={Frame02} alt="Graphic Design Icon" />
          </div>
          <div className="partner">
            <img src={Frame03} alt="Graphic Design Icon" />
          </div>
          <div className="partner">
            <img src={Frame04} alt="Graphic Design Icon" />
          </div>
          <div className="partner">
            <img src={Frame05} alt="Graphic Design Icon" />
          </div>
          <div className="partner">
            <img src={Frame01} alt="Graphic Design Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
