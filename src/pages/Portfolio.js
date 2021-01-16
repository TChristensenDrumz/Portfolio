import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Portfolio() {
    return (
        <>
            <Navbar />
                <div class="container-fluid ml-5">
                    <div class="row mt-5">
                        <div class="col-sm-9 col-xs-12">
                        <h1>Resume</h1>
                        <hr/>
                        <a href="./assets/Terrapin_Christensen_Resume_2020.pdf">Download PDF</a>
                        </div>
                    </div>
                    <div class="row mt-5">
                            <div class="col-sm-9 col-xs-12">
                                <h1>Projects</h1>
                                <hr/>
                                <div>
                                    <h3 class="pl-5">Home Cooked Comfort</h3>
                                    <img src="https://github.com/tchristensendrumz/Home-Cooked-Comfort/raw/main/assets/screencap.gif?raw=true" class="img-fluid float-left pl-5" alt="Home-Cooked-Comfort"/>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5">
                        <div class="col-sm-9 col-xs-12">
                            <a class="pl-5" href="https://tchristensendrumz.github.io/Home-Cooked-Comfort/">https://tchristensendrumz.github.io/Home-Cooked-Comfort/</a>
                            <br/>
                            <a class="pl-5" href="https://github.com/TChristensenDrumz/Home-Cooked-Comfort">https://github.com/TChristensenDrumz/Home-Cooked-Comfort</a>
                        </div>
                        </div>
                        <div class="row mt-5">
                        <div class="col-sm-9 col-xs-12">
                            <div>
                                <h3 class="pl-5">NoGym</h3>
                                <img src="https://github.com/TChristensenDrumz/NoGym/raw/main/public/assets/images/gif/nogymtest.gif" class="img-fluid float-left pl-5" alt="NoGym"/>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-9 col-xs-12">
                        <a class="pl-5" href="https://github.com/TChristensenDrumz/NoGym">https://github.com/TChristensenDrumz/NoGym</a>
                        <br/>
                        <a class="pl-5" href="https://nogym.herokuapp.com">https://nogym.herokuapp.com</a>
                        </div>
                    </div>
                    <div class="filler"></div>
                </div>
            <Footer />
        </>
    );
}

export default Portfolio;