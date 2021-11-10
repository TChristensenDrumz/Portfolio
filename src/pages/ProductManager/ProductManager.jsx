import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";

// Layout
import Layout from "../../layout/Layout";

// Styling
import "./ProductManager.css";

function ProductManager() {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Terrapin Christensen | Product Manager</title>
      </Helmet>
      {/* <Layout type="Product"></Layout> */}
      <div className="product-manager">
        <i class="fas fa-hard-hat pm-icon"></i>
        <div className="pm-header">This page is</div>
        <div className="pm-header pm-pb">under construction</div>
        <div className="pm-text">Please try again later</div>
        <button className="pm-button" onClick={() => history.push("/")}>
          Return to Home
        </button>
      </div>
    </>
  );
}

export default ProductManager;
