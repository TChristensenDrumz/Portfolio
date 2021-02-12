import React from "react";
import Image from "./Image";
import List from "./List";

function Skills() {
  return (
    <div>
      <div className="container-fluid ml-5 pr-5">
        <div className="row mt-5">
          <div className="col-sm-9 col-xs-12">
            <Image />
            <div>
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
