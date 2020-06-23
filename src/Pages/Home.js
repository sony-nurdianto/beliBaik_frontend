import React from "react"
import {Link} from "react-router-dom"
import {faAsterisk} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Home.css"
import C1 from "./images/C1.jpg"
import C2 from "./images/C2.jpg"
import C3 from "./images/C3.jpg"
import B from "./images/google-play-badge.svg"



const Home = () => {

   

    return (
        <div>
            <section className="hero" id="hero">
                <div className="container">
                    {/* <h2 className="sub-headline">
                        <span className="first-letter">P</span>embanding Syariah
                    </h2> */}
                    <h1 className="headline animated zoomIn"     
                            style={{
                                animationDuration: "2s",
                                animationDelay: "4.5s"
                            }}>
                        <strong className="brand">
                            <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                        </strong>
                    </h1>
                    <div className="headline-description">
                        <div className="single-animation">
                            <h5
                                className="animated zoomInRight"
                                style={{
                                animationDuration: "2s",
                                animationDelay: "4.5s"
                            }}>mudah dan terpercaya</h5>
                        </div>
                        <div
                            className="animated zoomInLeft"
                            style={{
                            margin: "0",
                            animationDuration: "2s",
                            animationDelay: "4.5s"
                        }}>
                            <span>
                                <Link><img
                                    src={B}
                                    alt="google"
                                    style={{
            width: "10vw",
            height: "13vh",
            marginRight: "1rem"
        }}/></Link>
                            </span>
                            {/* <span ><Link to="/" className="btn btn-info" style={{marginLeft:"1rem"}}>Download</Link></span> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="discover-our-story">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <img src={C1} alt="sembarang"/>
                        </div>
                        <div className="col-6  global-headline" >
                            {/* <div className=""> */}
                            <h5 className="sub-headline shadow-text" ><span >Kenapa Harus Pembiyayan syariah</span></h5>
                            <h1 className="headline animated zoomIn">

                                <strong>
                                    <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                                </strong>
                            </h1>
                            {/* </div> */}
                            <div >
                                <p >Pembiyayan syariah adalah penyediaan uang atau tagihan yang dipersamakan
                                    dengan itu berdasarkan persetujuan atau kesepakatan antara bank dengan pihak
                                    yang dibiyayai</p>
                                <Link className="btn btn-info">Selengkapnya</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="partner-beli"
                style={{
                marginTop: "10rem"
            }}>
                <div className="container-fluid">
                    <div >
                        <h5
                            className="sub-headline shadow-text"
                            style={{
                            textAlign: "center",
                            fontSize: "10rem",
                            marginBottom: "5rem"
                        }}>Partner Kami</h5>
                    </div>
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body ">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                   className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">

                                <div
                                   className="card shadow p-3 mb-5 bg-white rounded"
                                    style={{
                                    width: "18rem"
                                }}>
                                    <Link to="/" className="btn">
                                        <div className="card-body">
                                            <img src={C2} alt="img"/>
                                            <h5
                                                style={{
                                                textAlign: "center",
                                                marginBottom: "1rem"
                                            }}>mandiri</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Home