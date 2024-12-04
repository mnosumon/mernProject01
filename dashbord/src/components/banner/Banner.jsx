import React from "react";
import "./banner.css";

const Banner = () => {
  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div class="input-container">
      <input type="text" class="input-field" placeholder="Subheading" />
      <input type="text" class="input-field" placeholder="Heading" />
      <input type="text" class="input-field" placeholder="Paragraph" />
      <label class="checkbox-wrapper">
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
