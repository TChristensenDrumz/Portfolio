import React from "react";
import { Helmet } from "react-helmet";

// Layout
import Layout from "../../layout/Layout";

// Styling
import "./ProductManager.css";

function ProductManager() {
  return (
    <>
      <Helmet>
        <title>Terrapin Christensen | Product Manager</title>
      </Helmet>
      <Layout type="Product"></Layout>
    </>
  );
}

export default ProductManager;
