import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

import HARMony from "../assets/harmonythegame.gif";

function Portfolio() {
    return (
        <>
            <Navbar />
                <div className="container-fluid ml-5">
                    <div className="row mt-5">
                        <div className="col-sm-9 col-xs-12">
                        <h1>Resume</h1>
                        <hr/>
                        <a href="https://drive.google.com/uc?id=1W3Be9OTF7-eNMKt1TvDaFjmPh-FFDP2j&export=download">Download PDF</a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-9 col-xs-12">
                            <div>
                                <h3 className="pl-5">HARMony</h3>
                                <img src={HARMony} className="img-fluid float-left pl-5" alt="HARMony"/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-9 col-xs-12">
                            <a className="pl-5" href="https://github.com/TChristensenDrumz/HARMony">https://github.com/TChristensenDrumz/HARMony</a>
                            <br/>
                            <a className="pl-5" href="https://harmonythegame.herokuapp.com/">https://harmonythegame.herokuapp.com/</a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-9 col-xs-12">
                            <div>
                                <h3 className="pl-5">NoGym</h3>
                                <img src="https://github.com/TChristensenDrumz/NoGym/raw/main/public/assets/images/gif/nogymtest.gif" className="img-fluid float-left pl-5" alt="NoGym"/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-9 col-xs-12">
                            <a className="pl-5" href="https://github.com/TChristensenDrumz/NoGym">https://github.com/TChristensenDrumz/NoGym</a>
                            <br/>
                            <a className="pl-5" href="https://nogym.herokuapp.com">https://nogym.herokuapp.com</a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-9 col-xs-12">
                            <h1>Projects</h1>
                            <hr/>
                            <div>
                                <h3 className="pl-5">Home Cooked Comfort</h3>
                                <img src="https://github.com/tchristensendrumz/Home-Cooked-Comfort/raw/main/assets/screencap.gif?raw=true" className="img-fluid float-left pl-5" alt="Home-Cooked-Comfort"/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-9 col-xs-12">
                            <a className="pl-5" href="https://tchristensendrumz.github.io/Home-Cooked-Comfort/">https://tchristensendrumz.github.io/Home-Cooked-Comfort/</a>
                            <br/>
                            <a className="pl-5" href="https://github.com/TChristensenDrumz/Home-Cooked-Comfort">https://github.com/TChristensenDrumz/Home-Cooked-Comfort</a>
                        </div>
                    </div>                   
                    <div className="filler"></div>
                </div>
            <Footer />
        </>
    );
}

export default Portfolio;