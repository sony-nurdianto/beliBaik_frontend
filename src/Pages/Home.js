import React, {useEffect, useRef} from "react"
import {Link} from "react-router-dom"
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
import Aos from "aos"
import "aos/dist/aos.css"
import "./Home.css"
import C1 from "./images/animasi.jpg"
import C2 from "./images/Bank_icon.png"
import B2 from "./images/landing.png"
import B from "./images/google-play-badge.svg"

const Home = () => {

    const swiper = useRef(null)
    useEffect(() => {
        swiper.current = new Swiper(".swiper-container", {
            // effect: 'coverflow', slidesPerView: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            //   coverflowEffect: {     rotate: 50,     stretch: 10,     depth: 100,
            // modifier: 1,     slideShadows: false,   },

            spaceBetween: 10,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50
                }
            }
        })
    }, [])

    useEffect(() => {
        Aos.init({duration: 500, disable: false})

    }, [])

    return (
        <div>
            <section className="animate__animated animate__backInDown ">
                <div className="landing ">

                    <div >
                        <img
                            src={B2}
                            alt="animasi background"
                            style={{
                            width: "100%",
                            height: "100vh"
                            
                        }} />
                    </div>
                    <div className="centering">

                        <div className="title">
                            <h1
                                className="headline "
                               >
                                <strong className="brand">
                                    <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                                </strong>
                            </h1>
                        </div>
                        <div className="description">
                            <p className="p1">
                                Beli baik merupakan platform Pembiyayan secara syariah Cara Bersih , Kenikmatan
                                Tanpa Riba, Hidup Bersih Dunia Akhirat
                            </p>
                        </div>
                        <div
                            className="container"
                            style={{
                            margin: "0"
                        }}>
                            <span className="center">
                                <Link to="/"><img className="google-btn" src={B} alt="google"/></Link>
                            </span>
                        </div>
                    </div>

                </div>
            </section>

            <section className="discover-our-story">
                <div className="flix d-sm-flex">
                    {/* <div > */}
                    <img
                        className="img1"
                        src={C1}
                        alt="sembarang"
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-center"/> {/* </div> */}
                    <span
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center"
                        className="container align-self-center">
                        <h5 className="sub-headline ">
                            Kenapa Harus Pembiayaan syariah dan Beli Baik ?
                        </h5>

                        <p className="p2">Pembiyayan syariah adalah penyediaan uang atau tagihan yang
                            dipersamakan dengan itu berdasarkan persetujuan atau kesepakatan antara bank
                            dengan pihak yang dibiyayai</p>
                        <div
                            className="container"
                            style={{
                            padding: "0"
                        }}>
                            <div className="center">
                                <Link to="/" className="btn btn-info">Selengkapnya</Link>
                            </div>
                        </div>
                    </span>

                    {/* </div> */}
                </div>
            </section>
            <section >
                <span >
                    <h1 className="fitur-name">Bank Pilihan</h1>
                </span>

                <div
                    className="swiper-container"
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top">

                    <div className="swiper-wrapper">

                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">BCA</p>
                            </div>
                        </div>
                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">Bni</p>
                            </div>
                        </div>
                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">Mandiri</p>
                            </div>
                        </div>
                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank"/>
                            <div className="card-body">
                                <p className="card-text">Mandiri</p>
                            </div>
                        </div>
                        <div className="card shadow swiper-slide">
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
