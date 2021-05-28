import React, { useState } from "react";
import emailjs from "emailjs-com";
import Alert from "react-bootstrap/Alert";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gs3wumj",
        "template_pf1wjpf",
        e.target,
        "user_6wej1p0kkFuF1IK4NKKIg"
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
          document.getElementById("form").reset();
        },
        (error) => {
          setError(true);
          setErrorText(error.text);
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div
        className="container-fluid ml-5 contact-header"
        style={{ paddingTop: "6rem" }}
      >
        <div className="row mt-5">
          <div className="col-sm-9 col-xs-12">
            <Alert
              style={success ? { visibility: "visible" } : { display: "none" }}
              key={"success"}
              variant={"info"}
            >
              Your message has been sent!
            </Alert>
            <Alert
              style={error ? { visibility: "visible" } : { display: "none" }}
              key={"success"}
              variant={"danger"}
            >
              {errorText}
            </Alert>
            <h1 className="pink">Contact</h1>
            <hr />
            <form className="contact-form" id="form" onSubmit={sendEmail}>
              <div className="form-group mr-5">
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mr-5">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mr-5">
                <label>Message</label>
                <textarea
                  className="form-control"
                  id="contact-message"
                  name="message"
                  placeholder="Message"
                />
              </div>
              <input type="submit" className="btn btn-info" value="Send" />
            </form>
          </div>
        </div>
        <section className="mt-5">
          <h3 className="pink">Connect with LinkedIn!</h3>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/terrapin-christensen-381a831b8/"
            target="_blank"
            rel="norefferer"
          >
            www.linkedin.com/TerrapinChristensen
          </a>
        </section>
        <section className="mt-5">
          <h3 className="pink">GitHub</h3>
          <a
            className="contact-link"
            href="https://github.com/TChristensenDrumz"
            target="_blank"
            rel="norefferer"
          >
            github.com/TChristensenDrumz
          </a>
        </section>
        <div className="filler"></div>
      </div>
    </>
  );
}

export default Contact;
