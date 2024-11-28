import React from "react";
import "./blog.css";
import Blog0 from "../../assets/portfolio/blog.png";
import Blog1 from "../../assets/portfolio/blog1.png";
import Blog2 from "../../assets/portfolio/blog2.png";
import FrameIcon from "../../assets/icon/frameIcon.png";

const Blog = () => {
  return (
    <section className="blog">
      <div className="textCenter">
        <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
        <span className="subtitle">My Blog</span>
      </div>
      <div className="container">
        <h2 className="blogHead">Latest Blog</h2>
        <div className="blog-container">
          <div className="blog-card">
            <img src={Blog0} alt="Blog Image" />
            <div className="bloContent">
              <span className="date">20 January, 2023</span>
              <h3>Become a UX/UI Designer With Career Foundry.</h3>
              <a href="#">Read More →</a>
            </div>
          </div>
          <div className="blog-card">
            <img src={Blog0} alt="Blog Image" />
            <div className="bloContent">
              <span className="date">20 January, 2023</span>
              <h3>Become a UX/UI Designer With Career Foundry.</h3>
              <a href="#">Read More →</a>
            </div>
          </div>
          <div className="blog-card">
            <img src={Blog0} alt="Blog Image" />
            <div className="bloContent">
              <span className="date">20 January, 2023</span>
              <h3>Become a UX/UI Designer With Career Foundry.</h3>
              <a href="#">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
