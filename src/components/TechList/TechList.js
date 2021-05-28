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
      <img src={JavaScript}/><p className="skill text-center">JavaScript ES6+</p>
      <img src={ReactJS}/><p className="skill text-center">ReactJS</p>
      <img src={jQuery}/><p className="skill text-center">jQuery</p>
      <img src={NodeJS}/><p className="skill text-center">Node.js</p>
      <img src={Express}/><p className="skill text-center">Express</p>
      <img src={MongoDB}/><p className="skill text-center">MongoDB</p>
      <img src={MySQL}/><p className="skill text-center">MySQL</p>
      <img src={Redux}/><p className="skill text-center">Redux</p>
      <img src={HTML}/><p className="skill text-center">HTML5</p>
      <img src={CSS}/><p className="skill text-center">CSS3</p>
      <img src={Git}/><p className="skill text-center">Git</p>
      <img src={Handlebars}/><p className="skill text-center">Handlebars</p>
    </div>
  );
}

export default TechList;
