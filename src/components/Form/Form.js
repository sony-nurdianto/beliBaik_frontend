import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import "./Style.css"


const Form = () => {
    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])
    return (
        <section>
            <div className="masukan">
                <div data-aos="zoom-in-left" data-aos-anchor-placement="top">
                    <h1 className="masukan-title" >Masukan anda motivasi untuk kami</h1>
                </div>
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
    )
}

export default Form