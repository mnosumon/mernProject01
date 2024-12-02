import React from "react";
import "./navbar.css";
import Logo from "../../assets/image/logo.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const [list, setList] = useState([]);
  const [buttonText, setButtonText] = useState();
  const [buttonShow, setButtonShow] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:8000/navitem");
      setList(data.data.menuItem.split(","));
      setButtonText(data.data.buttonText);
      setButtonShow(data.data.buttonShow);
    };
    fetchData();
  }, []);
  return (
    <section className="navSection">
      <nav className="navbar container">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {buttonShow && (
          <div className="contact-button">
            <a href="#">{buttonText}</a>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
