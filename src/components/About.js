import React from "react";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <p>
          Terrapin Christensen, born in Dubuque, Iowa, is a professional drummer
          currently based in Glendale, California. Terrapin has preformed with
          groups including the Colburn Adult Jazz Combo. Terrapin is trained in
          a wide range of musical genres including jazz, rock, funk, latin,
          hip-hop, reggae, metal, and pop. Terrapin is known to be a hard
          working and collaborative worker with talents in leadership and
          project management. Terrapin excels in efficiently completing tasks
          with great attention to detail, organizational skill, and the ability
          to multitask. Terrapin also has a year of experience in JavaScript, is
          proficient in MongoDB, Express, ReactJS, and Node.js, and is an alumni
          of the UCLA Extension Fullstack Coding Bootcamp.
        </p>
        <p>
          During his time in UCLA Extension's Fullstack Coding Bootcamp,
          Terrapin worked on a variety of assignments and{" "}
          <a href="/portfolio" className="roboto">
            projects
          </a>{" "}
          that allowed him to hone his exsisting JavaScript skills as well as
          learn a multitude of useful new web development techniques.
        </p>
        <div className="space"></div>

        <article className="row mt-5">
          <article className="col-sm-9 col-xs-12">
            <h3>Dreams</h3>
            <p>
              Terrapin's dream is to start his own video game development
              company. He plays a wide variety of video games to study different
              genres of gaming and currently has a few small projects in the
              very early stages of deveopment.
            </p>
          </article>
        </article>
        <div className="space"></div>
      </div>
    </div>
  );
}

export default About;
