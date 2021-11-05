import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";

// Style
import "./Landing.css";

function Landing() {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Terrapin Christensen</title>
      </Helmet>
      <div className="landing-grid">
        <div className="landing-greeting">
          <div>Hi, I'm</div>
          <div className="teal-text">Terrapin Christensen</div>
          <div>What are you looking for?</div>
        </div>
        <div className="landing-web" onClick={() => history.push("/web")}>
          <div className="white-block">Web Developer</div>
        </div>
        <div className="landing-game" onClick={() => history.push("/game")}>
          <div className="white-block">Game Developer</div>
        </div>
        <div
          className="landing-product"
          onClick={() => history.push("/product")}
        >
          <div className="white-block">Product Manager</div>
        </div>
        <div className="landing-music" onClick={() => history.push("/music")}>
          <div className="white-block">Musician</div>
        </div>
      </div>
    </>
  );
}

export default Landing;
