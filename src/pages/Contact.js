import React from "react";
import emailjs from "emailjs-com";

function Contact() {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div className="container-fluid ml-5">
        <div className="row mt-5">
          <div className="col-sm-9 col-xs-12">
            <h1>Contact</h1>
            <hr />
            <form className="contact-form" onSubmit={sendEmail}>
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
          <h3 className="turquoise">Connect with LinkedIn!</h3>
          <a href="https://www.linkedin.com/in/terrapin-christensen-381a831b8/">
            www.linkedin.com/TerrapinChristensen
          </a>
        </section>
        <section className="mt-5">
          <h3 className="turquoise">GitHub</h3>
          <a href="https://github.com/TChristensenDrumz">
            github.com/TChristensenDrumz
          </a>
        </section>
        <div className="filler"></div>
      </div>
    </>
  );
}

export default Contact;
