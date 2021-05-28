import React from "react";
import "./PackageList.css";

import JWT from "../../icons/jwt.png";
import Passport from "../../icons/passport.png";
import Mongoose from "../../icons/mongoose.png";
import Sequelize from "../../icons/sequelize.png";
import Axios from "../../icons/axios.png";
import ReactPDF from "../../icons/reactpdf.png";
import Nodemailer from "../../icons/nodemailer.png"
import EmailJS from "../../icons/emailjs.png";
import BcryptJS from "../../icons/bcryptjs.jpg"
import Bootstrap from "../../icons/bootstrap.png";
import ReactBootstrap from "../../icons/reactbootstrap.png";
import MaterialUI from "../../icons/materialui.png";

function PackageList() {
  return (
    <div>
      <h3 className="package-title text-center">Packages</h3>
      <div className="row">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={JWT} alt="JWT"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">JSON Web Token (JWT)</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Passport} alt="Passport"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Passport</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Mongoose} alt="Mongoose"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Mongoose</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Sequelize} alt="Sequelize"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Sequelize</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Axios} alt="Axios"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Axios</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={ReactPDF} alt="ReactPDF"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">React PDF</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Nodemailer} alt="EmailJS"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Nodemailer</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={EmailJS} alt="EmailJS"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">EmailJS</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={BcryptJS} alt="EmailJS"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">BcryptJS</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Bootstrap} alt="Bootstrap"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Bootstrap</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={ReactBootstrap} alt="ReactBootstrap"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">React Bootstrap</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={MaterialUI} alt="MaterialUI"/>
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Material-UI</p>
        </div>
      </div>
    </div>
  );
}

export default PackageList;
