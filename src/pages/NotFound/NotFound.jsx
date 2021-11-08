import React from "react";
import { Helmet } from "react-helmet";

// Styling
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="not-found">
        <i class="far fa-frown"></i>
      </div>
    </>
  );
}

export default NotFound;
