import React from "react";
import "./navbar.css";
import Logo from "../../assets/image/logo.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const [list, setList] = useState("");
  console.log(list);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:8000/navitem");
      setList(data.data.menuItem.split(","));
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
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="contact-button">
          <a href="#">Contact Us</a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
