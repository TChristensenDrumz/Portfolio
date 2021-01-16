import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Contact() {
    return (
        <>
            <Navbar />
                <div class="container-fluid ml-5">
                    <div class="row mt-5">
                        <div class="col-sm-9 col-xs-12">
                            <h1>Contact</h1>
                            <hr/>
                            <form>
                                <div class="form-group mr-5">
                                    <label for="formGroupExampleInput">Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"/>
                                </div>
                                <div class="form-group mr-5">
                                    <label for="formGroupExampleInput2">Email</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email"/>
                                </div>
                                <div class="form-group mr-5">
                                    <label for="formGroupExampleInput">Message</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Message"/>
                                </div>
                                <button type="submit" class="btn btn-info">Submit</button>
                            </form>
                        </div>
                    </div>
                    <section class="mt-5">
                        <h3 class="turquoise">Connect with LinkedIn!</h3>
                        <a href="https://www.linkedin.com/in/terrapin-christensen-381a831b8/">www.linkedin.com/TerrapinChristensen</a>
                    </section>
                    <section class="mt-5">
                        <h3 class="turquoise">GitHub</h3>
                        <a href="https://github.com/TChristensenDrumz">github.com/TChristensenDrumz</a>
                    </section>
                    <div class="filler"></div>
                </div>
            <Footer />
        </>
    );
}

export default Contact;