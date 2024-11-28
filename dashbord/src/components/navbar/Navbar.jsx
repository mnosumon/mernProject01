import React, { useState } from "react";
import "./navbar.css";
import axios from "axios";

const Navbar = () => {
  const hanldeSubmit = () => {
    axios
      .post("http://localhost:8000/navbar", {
        menuItem: "Home, About, Service, Banner",
      })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="form-container">
      <form action="/submit-form" method="POST" class="form">
        <div class="form-group">
          <label for="file" class="form-label">
            Upload File
          </label>
          <input id="file" type="file" name="file" class="form-input" />
        </div>
        <div class="form-group">
          <label for="item1" class="form-label">
            Item 1
          </label>
          <input
            id="item1"
            type="text"
            name="item1"
            placeholder="Enter item 1"
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="item2" class="form-label">
            Item 2
          </label>
          <input
            id="item2"
            type="text"
            name="item2"
            placeholder="Enter item 2"
            class="form-input"
          />
        </div>
        <button onClick={hanldeSubmit} type="submit" class="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Navbar;
