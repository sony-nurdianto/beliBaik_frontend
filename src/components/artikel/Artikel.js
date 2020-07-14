import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "./Artikel.css"
import Art1 from "../../images/muhammad-haikal-sjukri-DZ0WPLmvK_c-unsplash-1024x683.jpg"
import Art2 from "../../images/Mr.Whiskey-shutterstock_1351312772-1024x681.jpg"
import Art3 from "../../images/Laboo-Studio-shutterstock_1437954938-1024x683.jpg"
import { Swiper, Pagination, EffectFlip } from '../../../node_modules/swiper/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import Aos from "aos"

const Artikel = () => {


    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])

    const params = {
        Swiper,
        modules: [Pagination, EffectFlip],
        effect: 'flip',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            600: {


                spaceBetween: 30,
                grabCursor: true,

            },

        },

    }




    return (
        <section>
            <div className="Artikel mt-5">
                <div className="artikel-title mb-5">
                    <h1 className="video-headline" >Artikel Syariah
                    <span className="center-line">
                            <hr className="line" />
                            <hr className="line2" />
                        </span></h1>
                </div>
                <div className="artikel-item mb-5" >
                    <Link to="/" className="card-center">
                        <div className="card bg-dark text-white card-size shadow" >
                            <img src={Art1} className="card-img " alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="card-center">
                        <div className="card bg-dark text-white card-size mr-5 ml-5  shadow" >
                            <img src={Art2} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="card-center">
                        <div className="card bg-dark text-white card-size shadow" >
                            <img src={Art3} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card-mobile" >
                    <ReactIdSwiperCustom {...params} className="card-mobile">
                        <Link to="/" className="card-center">
                            <div className="card bg-dark text-white card-size shadow" >
                                <img src={Art1} className="card-img " alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="card-center">
                            <div className="card bg-dark text-white card-size  shadow" >
                                <img src={Art2} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="card-center">
                            <div className="card bg-dark text-white card-size shadow" >
                                <img src={Art3} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </Link>
                    </ReactIdSwiperCustom >
                </div>
            </div>
        </section >
    )

}

export default Artikel