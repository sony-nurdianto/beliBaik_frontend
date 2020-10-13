import React from "react";
import About from "../components/About/Syariah";
import Landing from "../components/Landing/index";
import Artikel from "../components/artikel/index";
// import Fitur from "../components/Fitur/index"
import Bank from "../components/Perbandingan/index";
import Form from "../components/Form/index";
import Footer from "../components/Footer/index";
import Video from "../components/videos/index";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section>
        <Landing />
      </section>
      <section id={"tentang"}>
        <About />
      </section>
      <section>
        <Video />
      </section>
      <section id={"artikel"}>
        <Artikel />
      </section>
      {/* <section>
                <Fitur />
            </section> */}
      <section id={"bank"}>
        <Bank />
      </section>
      <section id={"kontak"}>
        <Form />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
