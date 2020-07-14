import React from "react"
import "./Style.css"
import Ig from "../../images/instagram.svg"
import Fb from "../../images/facebook.svg"


const Footer = () => {

    return (
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
    )

}

export default Footer 