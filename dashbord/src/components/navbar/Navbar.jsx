import React, { useState } from "react";
import "./navbar.css";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  const hanldeSubmit = async () => {
    await axios
      .post("http://localhost:8000/navbar", {
        menuItem: menu,
        buttonText: buttonText,
        buttonShow: buttonShow,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMenu = (e) => {
    setMenu(e.target.value);
  };
  const handleButtonText = (e) => {
    setButtonText(e.target.value);
  };
  const handleButtonShow = (e) => {
    setButtonShow(e.target.checked);
  };
  return (
    <div className="form-container">
      <input onChange={handleMenu} type="text" className="form-inpu" />
      <input onChange={handleButtonText} type="text" className="form-inpu" />
      <input
        onChange={handleButtonShow}
        type="checkbox"
        className="form-inpu"
      />

      <button onClick={hanldeSubmit} className="form-button">
        Submit
      </button>
    </div>
  );
};

export default Navbar;
