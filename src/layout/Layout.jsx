import React from "react";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Styling
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-grid">
      <Header />
      <div className="layout-content">{children}</div>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
