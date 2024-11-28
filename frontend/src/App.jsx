import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Partner from "./components/partner/Partner";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Resume />
      <Portfolio />
      <Partner />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
