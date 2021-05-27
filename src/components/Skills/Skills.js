import React from "react";
import Image from "../Image/Image";
import TechList from "../TechList/TechList";
import PackageList from "../PackageList/PackageList";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" style={{ paddingTop: "9rem" }}>
      <div className="container-fluid ml-5 pr-5">
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="tech-skills">Technical Skills</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <Image />
          </div>
          <div className="col-4">
            <TechList />
          </div>
          <div className="col-4">
            <PackageList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
