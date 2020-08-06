import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "./Artikel.css"
import { Swiper, Pagination, EffectFlip } from '../../../node_modules/swiper/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import Art1 from "../../images/artike_ syariah_.jpg"
import Art2 from "../../images/animasiOrang.jpeg"
import Art3 from "../../images/keuangan-syariah-ilustrasi-_130118131611-135.jpg"
import Art4 from "../../images/paktua.jpeg"
import Art5 from "../../images/wakilpresiden.jpg"
import Art6 from "../../images/paktuapeci.jpg"
import Art7 from "../../images/Dana-Syariah-Untuk-Usahamu-Apa-Itu-dan-Kenapa-ini-Penting-1024x682.jpeg"
import Art8 from "../../images/tank.png"



import Aos from "aos"

const Artikel = () => {


    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])

    const params = {

        Swiper,

        modules: [Pagination, EffectFlip],

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },


    }

    return (
        <section>
            <div className="Artikel">
                <div className="artikel-title mb-5" data-aos="fade-up">
                    <h1 className="video-headline">Media Coverage
                    <span className="center-line">
                            <hr className="line" />
                            <hr className="line2" />
                        </span>
                    </h1>
                </div>
                <div className="artikel-sub-title" data-aos="fade-up">
                    <h4>Syariah</h4>
                    <h5>Most Popular</h5>
                </div>
                <div className="artikel-item">
                    <Link to="/artikel1" className="card-center" data-aos="fade-up-right" data-aos-anchor-placement="top-center">
                        <div className="card bg-dark text-white card-size1 shadow-lg" >
                            <img src={Art1} className="card-img " alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Apa Bedanya Kredit Multiguna
                                Syariah dan Kredit Multiguna Konvensional?</h5>
                            </div>
                        </div>
                    </Link>
                    <div className="artikel-item-col">
                        <Link to="/artikel2" className="card-center" data-aos="fade-down-left" data-aos-anchor-placement="top-center">
                            <div className="card bg-dark text-white card-size mb-3 shadow-lg" >
                                <img src={Art2} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Tips Mengatur Keuangan
                                    dengan Prinsip Syariah</h5>

                                </div>
                            </div>
                        </Link>
                        <Link to="/artikel3" className="card-center" data-aos="fade-up-left" data-aos-anchor-placement="top-center">
                            <div className="card bg-dark text-white card-size shadow-lg" >
                                <img src={Art3} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Kenali Keuangan Syariah
                                        Sejak Muda</h5>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="artikel-item-masalah-keunagan mt-5">
                    <div className="artikel-sub-title mb-3">
                        <h4>Masalah Keuangan</h4>
                    </div>
                    <div className="artikel-item-masalah-keunagan" data-aos="flip-left" data-aos-anchor-placement="top-center">


                        <div className="container m-keungan">
                            <Link to="/artikel4" className="link-artikel">
                                <div className="card size-card-m shadow" >
                                    <img src={Art4} className="card-img-top" alt="..." />
                                    <div className="card-body text-pst">
                                        <h4>Peran Keuangan Syariah di Tengah Pandemi Covid-19</h4>
                                        <small className="link-small">3 Agustus 2020</small>
                                    </div>
                                </div>
                            </Link>
                            <div className="card size-card-m shadow" >
                                <img src={Art5} className="card-img-top" alt="..." />
                                <div className="card-body text-pst">
                                    <h5>Keuangan Syariah Solusi Ekonomi Mikro Saat Pandemi Covid-19</h5>
                                    <small className="link-small">3 Agustus 2020</small>
                                </div>
                            </div>
                            <div className="card size-card-m shadow" >
                                <img src={Art6} className="card-img-top" alt="..." />
                                <div className="card-body text-pst">
                                    <h4>Perbankan Syariah Solid Hadapi Pandemi</h4>
                                    <small className="link-small">3 Agustus 2020</small>
                                </div>
                            </div>
                        </div>

                        {/* </ReactIdSwiperCustom> */}

                    </div>
                </div>
                <div className="artikel-item-masalah-keunagan mt-5">
                    <div className="artikel-sub-title mb-3">
                        <h4>Perencanaan Keuangan</h4>
                    </div>
                    <div className="artikel-item-masalah-keunagan">
                        <div className="container m-keungan ">
                            <Link to="/artikel7" className="link-artikel" data-aos="flip-up" data-aos-anchor-placement="top-center">
                                <div className="card size-card-mp shadow-lg" >
                                    <img src={Art7} className="card-img-top" alt="..." />
                                    <div className="card-body text-pst">
                                        <h3>Dana Syariah Untuk Usahamu, Apa Itu dan Kenapa ini Penting?</h3>
                                        <small className="link-small">3 Agustus 2020</small>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="artikel-item-masalah-keunagan mt-5">
                    <div className="artikel-sub-title mb-3">
                        <h4>Tentang Riba</h4>
                    </div>
                    <div className="artikel-item-masalah-keunagan">
                        <div className="container m-keungan " >
                            <Link to="/artikel8" className="link-artikel" data-aos="flip-right" data-aos-anchor-placement="top-center">
                                <div className="card size-card-mp shadow-lg" >
                                    <img src={Art8} className="card-img-top" alt="..." />
                                    <div className="card-body text-pst">
                                        <h1>Ada Riba disekitar Kita?</h1>
                                        <small className="link-small">3 Agustus 2020</small>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )

}

export default Artikel