import React, { useEffect } from 'react'
import vid from "../../Video/TEAM SOCIAL MEDIA (Med Quality).mp4"
import "./Video.css"
import ReactPlayer from 'react-player'
import { Swiper, Pagination, EffectCoverflow } from '../../../node_modules/swiper/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
// import "../../../node_modules/video-react/dist/video-react.css";
import Aos from "aos"


const Video = () => {
    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])
    const params = {

        Swiper,

        modules: [Pagination, EffectCoverflow],

        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination',

        }

    }

    return (
        <section>
            <div className="video-section">
                <div className="video-title" data-aos="fade-down-right" data-aos-anchor-placement="top">
                    <h1 className="video-headline">Video Beli Baik
                    <span className="center-line">
                            <hr className="line" />
                            <hr className="line2" />
                        </span>
                    </h1>
                </div>
                <div className="container v-item" data-aos="fade-down-right" data-aos-anchor-placement="top-center">
                    <ReactIdSwiperCustom {...params} >
                        <div className="player-wrapper">
                            <ReactPlayer url={vid} controls width="100%" height="100%" />
                        </div>
                        <div className="player-wrapper">
                            <ReactPlayer url={vid} controls width="100%" height="100%" />
                        </div>
                        <div className="player-wrapper">
                            <ReactPlayer url={vid} controls width="100%" height="100%" />
                        </div>
                        <div className="player-wrapper">
                            <ReactPlayer url={vid} controls width="100%" height="100%" />
                        </div>
                    </ReactIdSwiperCustom>
                </div>
            </div>
        </section>
    )

}


export default Video