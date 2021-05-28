import React from "react";
import "./TechList.css";

import JavaScript from "../../icons/javascript.png";
import ReactJS from "../../icons/reactjs.png";
import jQuery from "../../icons/jquery.png";
import NodeJS from "../../icons/nodejs.png";
import Express from "../../icons/express.png";
import MongoDB from "../../icons/mongodb.png";
import MySQL from "../../icons/mysql.png";
import Redux from "../../icons/redux.png";
import HTML from "../../icons/html.png";
import CSS from "../../icons/css.png";
import Git from "../../icons/git.png";
import Handlebars from "../../icons/handlebars.png";

function TechList() {
  return (
    <div>
      <h3 className="tech-title text-center">Technologies</h3>
      <div className="row">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={JavaScript} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">JavaScript ES6+</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={ReactJS} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">ReactJS</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={jQuery} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">jQuery</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={NodeJS} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Node.js</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Express} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Express</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={MongoDB} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">MongoDB</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={MySQL} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">MySQL</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Redux} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Redux</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={HTML} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">HTML5</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={CSS} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">CSS3</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Git} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Git</p>
        </div>
      </div>
      <div className="row pt-1">
        <div className="col-5 p-0">
          <img className="img-fluid float-right" src={Handlebars} />
        </div>
        <div className="col-7 pl-1 pt-1">
          <p className="skill float-left">Handlebars</p>
        </div>
      </div>
    </div>
  );
}

export default TechList;
