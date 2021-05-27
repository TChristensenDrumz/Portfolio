import React from "react";
import './Image.css'

function Image() {
  return (
    <div className="float-left pr-3">
      <div><img
        src="https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/terrapinchristensen.jpg"
        className="img-fluid about"
        alt="terrapinchristensen"
      /></div>
      <div className="pt-3 text-center"><a className="download-link" href="https://drive.google.com/uc?id=1W3Be9OTF7-eNMKt1TvDaFjmPh-FFDP2j&export=download" style={{ textDecoration: "underline", fontSize: "20px" }}>Download Resume</a></div>
    </div>
  );
}

export default Image;
