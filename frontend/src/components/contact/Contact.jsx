import React from "react";
import "./contact.css";
import FrameIcon from "../../assets/icon/frameIcon.png";
import Locate from "../../assets/icon/locate.png";
import Call from "../../assets/icon/call.png";
import Email from "../../assets/icon/email.png";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="textCenter">
          <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
          <span className="subtitle">My Contact</span>
        </div>
        <h2 className="contactHeading">I WANT TO HEAR FROM YOU</h2>
        <div className="fromWrapper">
          <form class="contact-form">
            <div className="inputWrapper">
              <div class="form-group formInpu">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                />
              </div>
              <div class="form-group formInpu">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  required
                />
              </div>
              <div class="form-group formInpu">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  aria-label="Your Phone"
                  required
                />
              </div>
              <div class="form-group formInpu">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  required
                />
              </div>
            </div>
            <div class="form-group teAR">
              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="conatactlineWrapper">
              <div className="timeLine">
                <div className="contactIcon">
                  <img className="image" src={Locate} alt="ProjectIcon" />
                </div>
                <div className="timeLineDesc">
                  <h3>350+</h3>
                  <h3>Complete Project</h3>
                </div>
              </div>
              <div className="timeLine">
                <div className="contactIcon">
                  <img className="image" src={Call} alt="TimeIcon" />
                </div>
                <div className="timeLineDesc">
                  <h3>16+</h3>
                  <h3>Year of experience</h3>
                </div>
              </div>
              <div className="timeLine">
                <div className="contactIcon">
                  <img className="image" src={Email} alt="TimeIcon" />
                </div>
                <div className="timeLineDesc">
                  <h3>16+</h3>
                  <h3>Year of experience</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
