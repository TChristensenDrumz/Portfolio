import React from "react";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Styling
import "./Layout.css";

function Layout({ children, type }) {
  return (
    <>
      <Header type={type} />
      <div className="layout-grid">
        <div className="layout-content">{children}</div>
        <div className="layout-footer">
          <Footer type={type} />
        </div>
      </div>
    </>
  );
}

export default Layout;
