import React, { useState } from "react";
import "./navbar.css";
import axios from "axios";
import { useEffect } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);
  const [id, setId] = useState("");

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:8000/navitem");
      console.log(data.data);
      setMenu(data.data.menuItem);
      setButtonText(data.data.buttonText);
      setButtonShow(data.data.buttonShow);
      setId(data.data._id);
    };
    fetchData();
  }, []);

  return (
    <div className="form-container">
      <input
        value={menu}
        onChange={handleMenu}
        type="text"
        className="form-inpu"
      />
      <input
        value={buttonText}
        onChange={handleButtonText}
        type="text"
        className="form-inpu"
      />
      <input
        value={buttonShow}
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
