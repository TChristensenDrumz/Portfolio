import React from "react";
import { Helmet } from "react-helmet";

// Style
import "./Landing.css";

function Landing() {
  return (
    <>
      <Helmet>
        <title>Terrapin Christensen</title>
      </Helmet>
      <div className="landing-grid">
        <div className="landing-greeting">
          <div>Hi, I'm</div>
          <div>Terrapin Christensen</div>
          <div>What are you looking for?</div>
        </div>
        <div className="landing-web">
          <div>Web Developer</div>
        </div>
        <div className="landing-game">
          <div>Game Developer</div>
        </div>
        <div className="landing-product">
          <div>Product Manager</div>
        </div>
        <div className="landing-music">
          <div>Musician</div>
        </div>
      </div>
    </>
  );
}

export default Landing;
