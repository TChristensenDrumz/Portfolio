import React from "react";
import "./PackageList.css"

import JWT from "../../icons/jwt.png"
import Passport from "../../icons/passport.png"
import Mongoose from "../../icons/mongoose.png"
import Sequelize from "../../icons/sequelize.png"
import Axios from "../../icons/axios.png"
import ReactPDF from "../../icons/reactpdf.png"
import EmailJS from "../../icons/emailjs.png"
import Bootstrap from "../../icons/bootstrap.png"
import ReactBootstrap from "../../icons/reactbootstrap.png"
import MaterialUI from "../../icons/materialui.png"

function PackageList() {
  return <div>
      <h3 className="package-title text-center">Packages</h3>
      <img src={JWT}/><p className="skill text-center">JSON Web Token (JWT)</p>
      <img src={Passport}/><p className="skill text-center">Passport</p>
      <img src={Mongoose}/><p className="skill text-center">Mongoose</p>
      <img src={Sequelize}/><p className="skill text-center">Sequelize</p>
      <img src={Axios}/><p className="skill text-center">Axios</p>
      <img src={ReactPDF}/><p className="skill text-center">React PDF</p>
      <img src={EmailJS}/><p className="skill text-center">EmailJS</p>
      <img src={Bootstrap}/><p className="skill text-center">Bootstrap</p>
      <img src={ReactBootstrap}/><p className="skill text-center">React Bootstrap</p>
      <img src={MaterialUI}/><p className="skill text-center">Material-UI</p>
  </div>;
}

export default PackageList;
