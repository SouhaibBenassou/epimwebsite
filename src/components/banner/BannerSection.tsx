import React from "react";
import DivAnimateX from "../utils/DivAnimateX";
import NumberCounter from "../utils/NumberCounter";

const BannerSection = () => {
  return (
    <section
      className="home_bg hb_height overflow-hidden"
      style={{
        backgroundImage: "url(assets/img/bg/home-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <DivAnimateX position={-60} className="col-lg-6 col-12">
            <div className="hero-text ht_top">
              <h1>
               <span></span>Votre avenir en informatique et management commence ici
              </h1>
              <p>
                Des formations de qualité pour préparer votre réussite dans le monde professionnel.
              </p>
            </div>
           
          </DivAnimateX>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-text-img">
              <img
                src="assets/img/home-img2.png"
                className="img-fluid"
                alt=""
              />
              <div className="home_ps">
                <span className="ti-user"></span>
                <NumberCounter number={229} durationToComplete={3} icon="+" />
                <p>Étudiants actifs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
