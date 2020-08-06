import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import "./Style.css"
import C2 from "../../images/2.png"
import { Swiper, Pagination, } from '../../../node_modules/swiper/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';

const Bank = () => {
    const params = {

        Swiper,

        modules: [Pagination],


        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 70,
        slidesPerView: "auto",
        loop: true,
        pagination: {
            el: '.swiper-pagination',

        }
    }
    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])

    return (
        <section >
            <span >
                <h1 className="fitur-name " data-aos="fade-down" data-aos-anchor-placement="top-center">Bank Pilihan</h1>
            </span>

            <div
                className="container container-bank"
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center">

                <ReactIdSwiperCustom {...params} >

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
                </ReactIdSwiperCustom>
                <br />
                <br />
                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default Bank