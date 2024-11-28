import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/image/footerLogo.png";
import LocationIcon from "../../assets/icon/locationIcon.png";
import LocationIcon1 from "../../assets/icon/locationIcon1.png";
import Be from "../../assets/icon/be.png";
import Vector from "../../assets/icon/vector.png";
import Facebook from "../../assets/icon/facebook.png";
import Twitter from "../../assets/icon/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerWrapper">
          <div className="footer-section">
            <div className="footerLeft">
              <div className="">
                <img src={FooterLogo} alt="Footer Logo" />
              </div>

              <p className="description">
                At vero eos et accusamus et iusto odio dign ducimus qui
                blanditiis praesentium volup deleniti atque corrupti quos
                dolores et molestias excepturi sint occaecati
              </p>
              <a href="mailto:credesign@gmail.com" className="email">
                credesign@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Explore Links</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>My Services</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Mobile App</li>
              <li>Graphics Design</li>
              <li>Web Developer</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="#" className="icon">
                <img src={Twitter} alt="twitrter icon" />
              </a>
              <a href="#" className="icon">
                <img src={Facebook} alt="facebook image" />
              </a>
              <a href="#" className="icon">
                <img src={Vector} alt="vector imsge" />
              </a>
              <a href="#" className="icon">
                <img src={Be} alt="Be image" />
              </a>
            </div>
            <div className="tickWrapper">
              <div className="timeLine">
                <img src={LocationIcon1} alt="tickIcon" />
                <address>202 Dog Hill Lane Beloit, KS 67420</address>
              </div>
              <div className="timeLine">
                <img src={LocationIcon} alt="tickIcon" />
                <address>1-800-915-6270</address>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>All rights reserved © 2023 CreDesign</span>
          <div className="footerBottomItem">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
