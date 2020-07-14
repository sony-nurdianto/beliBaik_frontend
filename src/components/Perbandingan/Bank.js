import React, { useEffect } from "react"
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css'
// import 'swiper/js/swiper.min.js'
import Aos from "aos"
import "aos/dist/aos.css"
import "./Style.css"
import C2 from "../../images/2.png"

const Bank = () => {
    // const swiper = useRef(null)
    // useEffect(() => {
    // swiper.current = new Swiper(".swiper-container", {
    // effect: 'coverflow', slidesPerView: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: 'auto',
    //   coverflowEffect: {     rotate: 50,     stretch: 10,     depth: 100,
    // modifier: 1,     slideShadows: false,   }, direction : "vertical",
    // spaceBetween: 10,
    // init: false,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true
    //         },
    //         breakpoints: {
    //             640: {
    //                 slidesPerView: 2,
    //                 spaceBetween: 20
    //             },
    //             768: {
    //                 slidesPerView: 4,
    //                 spaceBetween: 40
    //             },
    //             1024: {
    //                 slidesPerView: 5,
    //                 spaceBetween: 50
    //             }
    //         }
    //     })
    // }, [])

    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])

    return (
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
                <br />
                <br />
                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default Bank