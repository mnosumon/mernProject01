import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";

const App = () => {
  const [list, setList] = useState("navbar");

  const handleClick = (menu) => {
    setList(menu);
  };
  return (
    <div className="nav_wrapper">
      <div className="left">
        <ul className="items">
          <li onClick={() => handleClick("navbar")}>Navbar </li>
          <li onClick={() => handleClick("banner")}>Banner </li>
          <li onClick={() => handleClick("about")}>About </li>
          <li onClick={() => handleClick("service")}>Service </li>
          <li onClick={() => handleClick("resume")}>Resume </li>
          <li onClick={() => handleClick("portfolio")}>Portfoli </li>
          <li onClick={() => handleClick("testimon")}>Testimon</li>
          <li onClick={() => handleClick("blog")}>Blog </li>
        </ul>
      </div>
      <div className="right">
        {list == "navbar" && <Navbar />}
        {list == "banner" && <Banner />}
        {list == "about" && <h1>About</h1>}
        {list == "service" && <h1>service</h1>}
        {list == "resume" && <h1>resume</h1>}
        {list == "portfolio" && <h1>portfolio</h1>}
      </div>
    </div>
  );
};

export default App;
