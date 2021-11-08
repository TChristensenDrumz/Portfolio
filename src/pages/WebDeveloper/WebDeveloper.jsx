import React from "react";
import { Helmet } from "react-helmet";

// Layout
import Layout from "../../layout/Layout";

// Styling
import "./WebDeveloper.css";

function WebDeveloper() {
  return (
    <>
      <Helmet>
        <title>Terrapin Christensen | Web Developer</title>
      </Helmet>
      <Layout type="Web"></Layout>
    </>
  );
}

export default WebDeveloper;
