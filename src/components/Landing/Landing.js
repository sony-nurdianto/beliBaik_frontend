import React from 'react'
import { Link } from "react-router-dom"
import "./Style.css"
import B2 from "../../images/image1.png"
import B from "../../images/google-play-badge.svg"

const Landing = () => {
    return (

        <section className="animate__animated animate__backInUp"  >
            <div className="landing ">
                <div className="div-img">
                    <img src={B2} alt="animasi background" className="img-first" />
                </div>
                <div className="centering" >
                    <div className="title" >
                        <h1
                            className="headline animate__animated animate__bounce"
                        >
                            <strong className="brand">
                                <span className="brand3">B<span className="brand4">e</span>li Baik</span>
                            </strong>
                        </h1>
                    </div>
                    <div className="description">
                        <p className="p1"  >
                            Beli baik merupakan platform Pembiyayan secara syariah Cara Bersih ,Kenikmatan
                            Tanpa Riba ,Hidup Bersih Dunia Akhirat
                            </p>
                    </div>
                    <div
                        className="container"
                        style={{
                            margin: "0"
                        }}>
                        <span className="center">
                            <Link to="/"><img
                                className="google-btn shadow"
                                src={B}
                                alt="google"
                            /></Link>
                        </span>
                    </div>
                </div>

            </div >
        </section >

    )
}

export default Landing