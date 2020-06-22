import React, {useState} from "react"
import {Link} from "react-router-dom"
import {faAsterisk}from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css"
import C1 from "./images/C1.jpg"


const Home = () => {

    return (
        <div>
        <section className="hero" id="hero">
            <div className="container">
                <h2 className="sub-headline">
                    <span className="first-letter">P</span>injaman Syariah
                </h2>
                <h1 className="headline"><strong className="brand"><span className="brand3">B<span className="brand4">e</span>li Baik</span></strong></h1>
                <div className="headline-description">
                    <div className="separator">
                        <div className="line line-left"></div>
                        <div className="asterisk"><FontAwesomeIcon icon={faAsterisk}/></div>
                        <div className="line line-right"></div>
                    </div>
                    <div className="single-animation">
                        <h5>mudah dan terpercaya</h5>
                        <Link to="#" className="btn halo">Tentang</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="discover-our-story">
            <div className="container">
                <div className="beli-info">
                    <div className="beli-description padding-right animate-left">
                        <div className="global-headline">
                        <h2 className="sub-headline">
                        <span className="first-letter">D</span>iscover
                        </h2>
                          <h1 className="headline headline-dark">About us</h1>
                        </div>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to="#" className="btn body-btn">About us</Link>
                    </div>
                    <div className="beli-info-img animate-right">
                        <img className="img-story" src={C1} alt="img story"/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )

    
}

export default Home