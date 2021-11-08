import React from "react";
import { Helmet } from "react-helmet";

// Layout
import Layout from "../../layout/Layout";

// Styling
import "./GameDeveloper.css";

function GameDeveloper() {
  return (
    <>
      <Helmet>
        <title>Terrapin Christensen | Web Developer</title>
      </Helmet>
      <Layout type="Game"></Layout>
    </>
  );
}

export default GameDeveloper;
