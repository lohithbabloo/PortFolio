import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <header className="nav-bar">
        <img
          src="/images/my-logo-removebg-preview.png"
          className="mylogo"
        ></img>
        <a href="mailto:lohithkumartangeti@gmail.com">
          <button>Contact me</button>
        </a>
      </header>
      <div className="mid-container">
        <img src="/images/dp.jpg" />
        <div className="details">
          <h2>Web Designer</h2>
          <h1>LOHITH KUMAR</h1>
          <p>Aiming to be a best world class frontend developer</p>
        </div>
      </div>
      <fieldset className="aboutme">
        <legend>About Me</legend>
        <p>
          I am a 21 year old web developer who started recently learning and
          trying a lot other things to use and work and integrate into my own
          projects to make it look good and im extending my knowledge to work on
          bankend too.
        </p>
      </fieldset>
      <div className="projects">
        <h2>Projects</h2>
        <p>Yet to be done</p>
      </div>
      <h3>Skills I Have</h3>
      <div className="Skills">
        <div className="react">
          <p>React</p>
        </div>
        <div className="git">
          <p>Git</p>
        </div>
        <div className="python">
          <p>Python</p>
        </div>
      </div>
      <div className="socialmedia">
        <a href="https://github.com/lohithbabloo">
          <img src="images/github.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/tangeti-lohith-kumar-917798224/">
          <img src="images/linkedin.png"></img>
        </a>
        <a href="https://www.instagram.com/lohithkumartangeti/">
          <img src="images/instagram.png"></img>
        </a>
      </div>
    </>
  );
};

export default Home;
