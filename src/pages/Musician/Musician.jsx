import React from "react";
import { Helmet } from "react-helmet";

// Layout
import Layout from "../../layout/Layout";

// Styling
import "./Musician.css";

function Musician() {
  return (
    <>
      <Helmet>
        <title>Terrapin Christensen | Musician</title>
      </Helmet>
      <Layout type="Music"></Layout>
    </>
  );
}

export default Musician;
