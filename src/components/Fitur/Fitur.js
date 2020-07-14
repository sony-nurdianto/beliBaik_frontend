import React, { useEffect } from "react"
import Aos from "aos"
// import "aos/dist/aos.css"
import F1 from "../../images/undraw_newspaper_k72w.svg"
import F2 from "../../images/undraw_business_plan_5i9d.svg"
import "./Style.css"

const Fitur = () => {
    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])

    return (
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
    )
}

export default Fitur