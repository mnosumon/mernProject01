import React from "react";
import "./navbar.css";
import Logo from "../../assets/image/logo.png";

const Navbar = () => {
  return (
    <section className="navSection">
      <nav className="navbar container">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="contact-button">
          <a href="#">Contact Us</a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
