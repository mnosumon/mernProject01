import React, { useState } from "react";
import "./banner.css";

const Banner = () => {
  const [subHeading, setSubHeading] = useState("");
  const [heading, setHeading] = useState("");
  const [paregraph, setParegraph] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonShow, setButtonShow] = useState(false);

  const handleSubmit = () => {
    console.log("hello");
  };
  const handleSubHeading = (e) => {
    setSubHeading(e.target.value);
  };
  const handleHeading = (e) => {
    setHeading(e.target.value);
  };
  const handleParegrap = (e) => {
    setParegraph(e.target.value);
  };
  const handleButtonText = (e) => {
    setButtonText(e.target.value);
  };
  const handleButtonShow = (e) => {
    setButtonShow(e.target.checked);
  };

  return (
    <div class="input-container">
      <input
        onChange={handleSubHeading}
        type="text"
        class="input-field"
        placeholder="Subheading"
      />
      <input
        onChange={handleHeading}
        type="text"
        class="input-field"
        placeholder="Heading"
      />
      <input
        onChange={handleParegrap}
        type="text"
        class="input-field"
        placeholder="Paragraph"
      />
      <input
        onChange={handleButtonText}
        type="text"
        class="input-field"
        placeholder="button text"
      />
      <label onChange={handleButtonShow} class="checkbox-wrapper">
        <input type="checkbox" class="checkbox" />
        <span>Agree to terms</span>
      </label>
      <input
        onClick={handleSubmit}
        type="button"
        class="styled-button"
        value="Submit"
      />
    </div>
  );
};

export default Banner;
