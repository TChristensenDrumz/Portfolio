import React from "react";

function About() {
  return (
    <div className="container pt-5" id="about" style={{ paddingTop: "9rem" }}>
      <h1 className="coffee">About Me</h1>
      <div>
        <p>
          Hello! I'm Terrapin, a full-stack web developer with well-balanced
          skills in both front-end and back-end development as well as a
          professional drummer. I pride myself on being an enthusiastic team
          player, goal-oriented, a very quick learner, and an efficient leader.
        </p>

        <article className="row mt-5">
          <article className="col-12">
            <h3>Coding</h3>
            <p>
              In terms of experience, I have more than a year of experience in
              JavaScript, am proficient in the MERN stack (MongoDB, Express,
              ReactJS, and Node.js), and am a proud alumni of the UCLA Extension
              Full Stack Coding Bootcamp. During my time at UCLA Extension's
              Full Stack Coding Bootcamp, I had the opportunity to work on a
              variety of assignments and projects, allowing me to hone my
              existing JavaScript skills as well as learn a multitude of useful
              new web development skills and techniques.
              <br />
              <br />I really enjoy working on coding projects, and whether I'm
              working with a team or coding by myself, I always put everything
              I've got into the project, every step of the way. The final
              outcome of any project is very important to me, which is why I
              consistently complete tasks efficiently with great attention to
              detail, use my organizational skills to prioritize key
              functionality, and when working with a team, stay flexible in
              order to multitask and jump from one issue to the next
            </p>
          </article>
        </article>

        <article className="row mt-5">
          <article className="col-12">
            <h3>Music</h3>
            <p>
              I have always always had a deep love for music, and began drumming
              at the age of 6. I have preformed with many local groups, most
              notably the Colburn Adult Jazz Combo. I am trained in a wide range
              of musical genres including jazz, rock, funk, latin, hip-hop,
              reggae, metal, and pop.
            </p>
          </article>
        </article>

        <article className="row mt-5">
          <article className="col-12">
            <h3>Goals</h3>
            <p>
              My dream is to one day start my own video game development
              company. I plays a wide variety of video games to study different
              genres of gaming and currently have a few small projects in the
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
