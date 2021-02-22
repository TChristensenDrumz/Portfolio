import React from "react";

function About() {
  return (
    <div className="container pt-5" id="about" style={{ paddingTop: "9rem" }}>
      <h1 className="coffee">About Me</h1>
      <div>
        <p>
          Terrapin Christensen, from Chicago, Illinois, is a fullstack web
          developer and professional drummer currently based in Glendale,
          California. Terrapin is known to be a hard working and collaborative
          worker with talents in leadership and project management. Terrapin
          excels in efficiently completing tasks with great attention to detail,
          organizational skill, and the ability to multitask.
        </p>

        <article className="row mt-5">
          <article className="col-12">
            <h3>Coding</h3>
            <p>
              Terrapin has more than a year of experience in JavaScript, is
              proficient in MongoDB, Express, ReactJS, and Node.js, and is an
              alumni of the UCLA Extension Fullstack Coding Bootcamp. During his
              time in UCLA Extension's Fullstack Coding Bootcamp, Terrapin
              worked on a variety of assignments and projects that allowed him
              to hone his existing JavaScript skills as well as learn a
              multitude of useful new web development techniques.
            </p>
          </article>
        </article>

        <article className="row mt-5">
          <article className="col-12">
            <h3>Music</h3>
            <p>
              Terrapin has always had a deep love for music, and began drumming
              at the age of 6. Terrapin has preformed with many local groups,
              most notably the Colburn Adult Jazz Combo. Terrapin is trained in
              a wide range of musical genres including jazz, rock, funk, latin,
              hip-hop, reggae, metal, and pop.
            </p>
          </article>
        </article>

        <article className="row mt-5">
          <article className="col-12">
            <h3>Goals</h3>
            <p>
              Terrapin's dream is to start his own video game development
              company. He plays a wide variety of video games to study different
              genres of gaming and currently has a few small projects in the
              very early stages of development.
            </p>
          </article>
        </article>
        <div className="space"></div>
      </div>
    </div>
  );
}

export default About;
