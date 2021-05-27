import React from "react";
import './Image.css'

function Image() {
  return (
    <div className="float-left pr-3">
      <div><img
        src="https://ca.slack-edge.com/T01C8L6GK9Q-U01CWJ19YBT-f614b873e04d-512"
        className="img-fluid about"
        alt="terrapinchristensen"
      /></div>
      <div className="pt-3 text-center"><a className="contact-link" href="https://drive.google.com/uc?id=1W3Be9OTF7-eNMKt1TvDaFjmPh-FFDP2j&export=download" style={{ textDecoration: "underline", fontSize: "20px" }}>Download Resume</a></div>
    </div>
  );
}

export default Image;
