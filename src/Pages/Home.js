import React, {useState} from "react"
import {Link} from "react-router-dom"
import {faAsterisk} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Home.css"
import C1 from "./images/C1.jpg"
import C2 from "./images/C2.jpg"
import C3 from "./images/C3.jpg"
import old from "./images/old-1130743_1920.jpg"
// import ScrollReveal from "scrollreveal"


const Home = () => {

    // window.sr = ScrollReveal();
    // ScrollReveal().reveal(document.querySelector(".animate-left"),{
    //     origin :"left",
    //     duration : 1000,
    //     distance : "25rem"
    // })

    return (
        <div>
            <section className="hero" id="hero">
                <div className="container">
                    <h2 className="sub-headline">
                        <span className="first-letter">P</span>injaman Syariah
                    </h2>
                    <h1 className="headline">
                        <strong className="brand">
                            <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                        </strong>
                    </h1>
                    <div className="headline-description">
                        <div className="separator">
                            <div className="line line-left"></div>
                            <div className="asterisk"><FontAwesomeIcon icon={faAsterisk}/></div>
                            <div className="line line-right"></div>
                        </div>
                        <div className="single-animation">
                            <h5>mudah dan terpercaya</h5>
                            <Link to="#" className="btn btn-info">Tentang</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="discover-our-story">
                <div className="container">
                    <div className="beli-info">
                        <div className="beli-description padding-right animate-left" >
                            <div className="global-headline">
                                <h2 className="sub-headline">
                                    <span className="first-letter">S</span>ekilas Tentang
                                </h2>
                                <h1>
                                    <strong className="brand">
                                        <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                                    </strong>
                                </h1>
                                {/* <div className="asterisk"><FontAwesomeIcon icon={faAsterisk}/></div> */}
                            </div>
                            <div
                                className="row"
                                style={{
                                marginTop: "2rem"
                            }}>
                                <div className="col-6">
                                    <img className="img-story" src={C1} alt="img story"/>
                                </div>
                                <div className="col-6 mt-5">
                                    <p
                                        style={{
                                        marginLeft: "1rem"
                                    }}>
                                        Beli Baik merupakan platform pembiayaan secarah Syariah Cara bersih , Kenikmatan
                                        Dunia Tanpa Riba , Hidup Berkah Dunia Akhirat
                                        <br/>
                                        <Link to="#" className="btn btn-info mt-3">Lebih Banyak</Link>
                                    </p>
                                </div>
                            </div>

                        </div>
                        {/* <div className="beli-info-img animate-right">
                        <img className="img-story" src={C1} alt="img story"/>
                    </div> */}
                    </div>
                </div>
            </section>
            <section className="baik-item between">
                <div className="container">
                    <div className="beli-description padding-right animate-left">
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline1">
                                    <span className="first-letter">A</span>lasan memakai
                                </h2>
                            </div>
                            <div className="animate-bottom">
                                <h1>
                                    <strong className="brand">
                                        <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                                    </strong>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="beli-bank">
                <div className="container">
                    <div className="beli-info">
                        <div className="image-group padding-right animate-left">
                            <img src={C1} alt="bank"/>
                            <img src={C2} alt="bank"/>
                            <img src={C3} alt="bank"/>
                            <img src={C3} alt="bank"/>
                        </div>
                    </div>
                    <div className="beli-description animate-right">
                        <div className="global-headline">
                            <h2 className="sub-headline">
                                <span className="first-letter">P</span>artner
                            </h2>
                            <h1>
                                <strong className="brand">
                                    <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                                </strong>
                            </h1>
                            {/* <div className="asterisk"><FontAwesomeIcon icon={faAsterisk}/></div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Home