import React, {useEffect} from "react"
import {Link} from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import "./Home.css"
import C1 from "./images/C1.jpg"
import C2 from "./images/C2.jpg"
import B from "./images/google-play-badge.svg"

const Home = () => {

    useEffect(() => {
        Aos.init({duration: 500})

    }, [])

    return (
        <div>
            <section className="hero" id="hero">
                <div className="container">
                    <h1
                        className="headline animated zoomIn"
                        style={{
                        animationDuration: "2s",
                        animationDelay: "2s"
                    }}>
                        <strong className="brand">
                            <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                        </strong>
                    </h1>
                    <div
                        className="headline-description"
                        data-aos="fade-down"
                        data-aos-anchor-placement="top-bottom">
                        <div className="single-animation">
                            <h5
                                className="animated zoomInRight"
                                style={{
                                animationDuration: "2s",
                                animationDelay: "2s"
                            }}>mudah dan terpercaya</h5>
                        </div>
                        <div
                            className="google animated zoomInLeft"
                            style={{
                            margin: "0",
                            animationDuration: "2s",
                            animationDelay: "2s"
                        }}>
                            <span >
                                <Link to="/"><img className="google-btn" src={B} alt="google"/></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="discover-our-story">
                <div className="flix d-lg-flex ">
                    {/* <div className=" "> */}
                    <div data-aos="fade-right">
                        <img className="img1" src={C1} alt="sembarang"/>
                    </div>
                    <div data-aos="fade-left">
                        <h5 className="sub-headline shadow-text">
                            <span >Kenapa Harus Pembiyayan syariah</span>
                        </h5>
                        <h1 >
                            <strong>
                                <span className="brand5">B<span className="brand6">e</span>li Baik</span>
                            </strong>
                        </h1>
                        <div >
                            <p >Pembiyayan syariah adalah penyediaan uang atau tagihan yang dipersamakan
                                dengan itu berdasarkan persetujuan atau kesepakatan antara bank dengan pihak
                                yang dibiyayai</p>
                            <Link to="/" className="btn btn-info">Selengkapnya</Link>
                        </div>
                    </div>

                </div>
                {/* </div> */}
            </section>
            <section
                className="partner-beli"
                style={{
                marginTop: "10rem"
            }}>
                <div className="container-fluid">
                    <div data-aos="fade-down-left" data-aos-anchor-placement="top-center">
                        <h5 className="sub-headline1 shadow-text">Partner Kami</h5>
                    </div>
                    <div
                        className="container-fluid"
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center">
                        <div className="row mb-5">
                            <div className="col-2">
                                <div className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body ">
                                        <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                        <img className="name" src={C2} alt="img"/>
                                        <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="container-fluid"
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-botom">
                        <div className="row mb-5">
                        <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded">
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img className="name" src={C2} alt="img"/>
                                            <h5>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div style={{
                    background: "black"
                }}>
                    halo
                </div>
            </section>
        </div>
    )

}

export default Home