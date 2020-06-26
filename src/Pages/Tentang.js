import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
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
import F1 from "./images/undraw_newspaper_k72w.svg"
import F2 from "./images/undraw_business_plan_5i9d.svg"
import Fb from "./images/facebook.svg"
import Ig from "./images/instagram.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Tentang = () => {

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
            // modifier: 1,     slideShadows: false,   }, direction : "vertical",
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
        Aos.init({ duration: 500, disable: false })

    }, [])

    return (
        <div>
            <section className="animate__animated animate__backInDown">
                <div className="landing ">

                    <div className="div-img">
                        <img src={B2} alt="animasi background" className="img-first" />
                    </div>
                    <div className="centering">
                        <div className="title">
                            <h1
                                className="headline "
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-center">
                                <strong className="brand">
                                    <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                                </strong>
                            </h1>
                        </div>
                        <div className="description">
                            <p className="p1" data-aos="fade-up" >
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
                                <Link to="/"><img
                                    className="google-btn"
                                    src={B}
                                    alt="google"
                                /></Link>
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
                        data-aos-anchor-placement="top" /> {/* </div> */}
                    <span className="container align-self-center">
                        <h5
                            className="sub-headline "
                            data-aos="fade-down-right"
                            data-aos-anchor-placement="top-center">
                            Kenapa Harus Pembiayaan syariah dan Beli Baik ?
                        </h5>

                        <p className="p2" data-aos="fade-down-right">Pembiyayan syariah adalah
                        penyediaan uang atau tagihan yang dipersamakan dengan itu berdasarkan
                            persetujuan atau kesepakatan antara bank dengan pihak yang dibiyayai</p>
                        <div
                            className="container"
                            style={{
                                padding: "0"
                            }}>
                            <div className="center">
                                <Link to="/" className="btn btn-info" data-aos="fade-down-right" data-aos-anchor-placement="top">Selengkapnya</Link>
                            </div>
                        </div>
                    </span>

                    {/* </div> */}
                </div>
            </section>
            <section>
                <div className="manfaat ">
                    <div className="container">
                        <div className="manfaat-isi">
                            <h1 data-aos="fade-down-right" data-aos-anchor-placement="top">manfaat pinjaman syariah beli baik</h1>
                        </div>
                        <div className="manfaat-card2">
                            <div className="content-card" data-aos="flip-left">
                                <i />
                                <h4>aman</h4>
                                <p>Bagian standar dari teks Lorem Ipsum yang digunakan sejak tahun 1500an kini
                                di reproduksi kembali di bawah ini untuk mereka yang tertarik. Bagian 1.10.32
                                dan 1.10.33 dari "de Finibus Bonorum et Malorum" karya Cicero juga di reproduksi
                                persis seperti bentuk aslinya, diikuti oleh versi bahasa Inggris yang berasal
                                dari terjemahan tahun 1914 oleh H. Rackham.</p>
                            </div>
                            <div className="content-card" data-aos="flip-right">
                                <i />
                                <h4>terjangkau</h4>
                                <p>Bagian standar dari teks Lorem Ipsum yang digunakan sejak tahun 1500an kini
                                di reproduksi kembali di bawah ini untuk mereka yang tertarik. Bagian 1.10.32
                                dan 1.10.33 dari "de Finibus Bonorum et Malorum" karya Cicero juga di reproduksi
                                persis seperti bentuk aslinya, diikuti oleh versi bahasa Inggris yang berasal
                                dari terjemahan tahun 1914 oleh H. Rackham.</p>
                            </div>
                            <div className="content-card" data-aos="flip-up">
                                <i />
                                <h4>terpercaya</h4>
                                <p>Bagian standar dari teks Lorem Ipsum yang digunakan sejak tahun 1500an kini
                                di reproduksi kembali di bawah ini untuk mereka yang tertarik. Bagian 1.10.32
                                dan 1.10.33 dari "de Finibus Bonorum et Malorum" karya Cicero juga di reproduksi
                                persis seperti bentuk aslinya, diikuti oleh versi bahasa Inggris yang berasal
                                dari terjemahan tahun 1914 oleh H. Rackham.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section>
                <div className="manfaat">
                    <div className="manfaat-isi">
                        <h1 data-aos="fade-down" data-aos-anchor-placement="top">Fitur Beli Baik </h1>
                    </div>
                    <div className="manfaat-card" data-aos="fade-up">
                        <div className="card shadow">
                            <img className="card-img-top" src={F1} alt="artikel" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card shadow" >
                            <img className="card-img-top" src={F2} alt="seminar" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <span >
                    <h1 className="fitur-name " data-aos="fade-down" data-aos-anchor-placement="top-center">Bank Pilihan</h1>
                </span>

                <div
                    className="swiper-container"
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-center">

                    <div className="swiper-wrapper">

                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank" />
                            <div className="card-body">
                                <p className="card-text">BCA</p>
                            </div>
                        </div>
                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank" />
                            <div className="card-body">
                                <p className="card-text">Bni</p>
                            </div>
                        </div>
                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank" />
                            <div className="card-body">
                                <p className="card-text">Mandiri</p>
                            </div>
                        </div>
                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank" />
                            <div className="card-body">
                                <p className="card-text">Mandiri</p>
                            </div>
                        </div>
                        <div className="card shadow swiper-slide">
                            <img className="card-img-top" src={C2} alt="bank" />
                            <div className="card-body">
                                <p className="card-text">Mandiri</p>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </section>
            <section>
                <div className="container masukan">
                    <h1 className="masukan-title" data-aos="zoom-in-left" data-aos-anchor-placement="top-center">Masukan anda motivasi untuk kami</h1>
                    <div className="masukan-form">
                        <div className="cardform" data-aos="fade-down-right" >
                            <div className="card p-3 rounded shadow masukan-card" >
                                <form >
                                    <div className="jarak">
                                        <h2 className="masukan-title" >Kontak</h2>
                                        <hr className="masukan-line" />
                                        <h6>silahkan kirim kritik dan saran anda</h6>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="name"
                                        //   value={data.name}
                                        //   onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Pesan"
                                        //   value={data.email}
                                        //   onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group form-check"></div>
                                    <button type="submit" className="btn  btn-primary">
                                        Kirim
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <section>
                <div>
                    section Terdaftar dan diawasi
                </div>
            </section> */}
            <section>
                <div className="jumbotron-fluid footer">
                    <div>
                        <h5>www.belibaik.com</h5>
                    </div>
                    <div>
                        <h5>Bantuan</h5>
                        <div>
                            <h6>tentang</h6>
                            <h6>Faq</h6>
                            <h6>ketentuan</h6>
                            <h6>kontak & klaim</h6>
                        </div>
                    </div>
                    <div>
                        <h5>Artikel</h5>
                        <div>
                            <h6>Pembiyayan syariah
                            </h6>
                            <h6>Gaya Hidup</h6>
                            <h6>perbankan Syariah</h6>
                        </div>
                    </div>
                    <div className="img-footer">
                        <img src={Ig} alt="instagram" />
                        <img src={Fb} alt="facebook" />
                    </div>
                </div>

            </section>
        </div >
    )

}

export default Tentang
