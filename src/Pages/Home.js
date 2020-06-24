import React, {useEffect, useRef} from "react"
import {Link} from "react-router-dom"
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
import Aos from "aos"
import "aos/dist/aos.css"
import "./Home.css"
import C1 from "./images/C1.jpg"
import C2 from "./images/Bank_icon.png"
import B from "./images/google-play-badge.svg"

const Home = () => {

    const swiper = useRef(null)
    useEffect(() => {
        swiper.current = new Swiper(".swiper-container", {
            // effect: 'coverflow',
            // slidesPerView: 1,
            loop: true,
      loopFillGroupWithBlank: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
    //   coverflowEffect: {
    //     rotate: 50,
    //     stretch: 10,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: false,
    //   },
        
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
            }
        })
    }, [])

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
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                        <img className="img1" src={C1} alt="sembarang"/>
                    </div>
                    <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                        <h5 className="sub-headline ">
                            <span >Kenapa Harus Pembiayaan syariah dan Beli Baik ?</span>
                            {/* <strong>
                                <span className="brand5">B<span className="brand6">e</span>li Baik</span>
                            </strong> */}
                        </h5>
                        {/* <h1 >

                        </h1> */}
                        <div >
                            <p className="pbrand">Pembiyayan syariah adalah penyediaan uang atau tagihan
                                yang dipersamakan dengan itu berdasarkan persetujuan atau kesepakatan antara
                                bank dengan pihak yang dibiyayai</p>
                            <Link to="/" className="btn btn-info">Selengkapnya</Link>
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </section>
            <section >
                <span >
                    <h1 className="fitur-name">Bank Pilihan</h1>
                </span>

                <div className="swiper-container" data-aos="zoom-in" data-aos-anchor-placement="top-center">

                    <div className="swiper-wrapper">

                        <div
                            className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">BCA</p>
                            </div>
                        </div>
                        <div
                            className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">Bni</p>
                            </div>
                        </div>
                        <div
                            className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">Mandiri</p>
                            </div>
                        </div>
                        <div
                            className="card shadow swiper-slide"
                            style={{
                            width: '1rem'
                        }}>
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">Mandiri</p>
                            </div>
                        </div>
                        <div
                            className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">Mandiri</p>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </section>
        </div>
    )

}

export default Home

