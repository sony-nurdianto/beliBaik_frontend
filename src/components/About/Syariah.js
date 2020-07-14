import React, { useEffect } from 'react'
import imgStory from "../../images/image2.png"
import "./Style.css"

// import Swiper from 'react-id-swiper';
import '../../../node_modules/swiper/swiper-bundle.css';
import { Swiper, Pagination, EffectFlip } from '../../../node_modules/swiper/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import Aos from "aos"




const Syariah = () => {
    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])
    const params = {
        // Provide Swiper class as props
        Swiper,
        // Add modules you need
        modules: [Pagination, EffectFlip],

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        // },
        spaceBetween: 30,
        effect: 'flip',
        grabCursor: true,
    }

    return (
        <div className="syari" data-aos="fade-down-right" data-aos-anchor-placement="top-center">
            <ReactIdSwiperCustom {...params}>


                <div className=" flix">
                    <div >
                        <img className="img1" src={imgStory} alt="animasi" />
                    </div>
                    <div className="syariah-description">
                        <h1 className="sub-headline">
                            Kenapa Harus Pembiyaan Syariah ?
                        <span className="center-line">
                                <hr className="line" />
                                <hr className="line2" />
                            </span>
                        </h1>
                        <div className="syariahP">
                            <p className="p2">
                                Pembiayaan syariah adalah penyediaan uang atau tagihan
                                yang dipersamakan dengan itu berdasarkan persetujuan atau
                                kesepakatan antara bank dengan pihak yang dibiayai untuk
                                mengembalikan uang atau tagihan tersebut setelah jangka waktu
                                tertentu dengan imbalan bagi hasil .
                    </p>
                            <p className="p2p">
                                Pemberian pinjaman/pembiayaan bagi nasabah berdasarkan prinsip
                                bagi hasil,jual beli, atau sewa beli yang terbebas dari penetapan bunga
                                dan memberikan rasa aman,karena yang diberikan kepada nasabah
                                adalah barang bukan uang dan tidak ada beban bunga yang ditetapkan
                                di muka.(Rudy Badrudin dan Subagyo:124)
                    </p>
                        </div>
                    </div>
                </div>

                <div className=" flix ">
                    <span >
                        <img className="img1" src={imgStory} alt="animasi" />
                    </span>
                    <div className="syariah-centerP">
                        <h1 className="sub-headline">
                            Kenapa Harus Beli Baik ?
                        <span className="center-line">
                                <hr className="line" />
                                <hr className="line2" />
                            </span>
                        </h1>

                        <p className="p3">
                            Beli Baik merupakan platform pembiayaan
                            secara syariah
                    </p>
                        <p className="p3">
                            Cara Bersih, Kenikmatan Dunia Tanpa Riba,
                            Hidup Berkah Dunia Akhirat
                    </p>
                    </div>
                </div>




            </ReactIdSwiperCustom>
        </div>
    )

}

export default Syariah


