import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";

// Styling
import "./NotFound.css";

function NotFound() {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="not-found">
        <i class="far fa-frown nf-icon"></i>
        <div className="nf-header">404</div>
        <div className="nf-text">Page Not Found</div>
        <button className="nf-button" onClick={() => history.push("/")}>
          Return to Home
        </button>
      </div>
    </>
  );
}

export default NotFound;
