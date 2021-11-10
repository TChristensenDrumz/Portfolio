import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";

// Layout
import Layout from "../../layout/Layout";

// Styling
import "./Musician.css";

function Musician() {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Terrapin Christensen | Musician</title>
      </Helmet>
      {/* <Layout type="Music"></Layout> */}
      <div className="music">
        <i class="fas fa-headphones m-icon"></i>
        <div className="m-header">Recording in progress</div>
        {/* <div className="m-header">in progress</div> */}
        <div className="m-text">This page will be available when</div>
        <div className="m-text m-pb">all musical assets are ready</div>
        <button className="m-button" onClick={() => history.push("/")}>
          Return to Home
        </button>
      </div>
    </>
  );
}

export default Musician;
