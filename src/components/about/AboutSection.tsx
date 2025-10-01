import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";

const AboutSection = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/about1.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Explorez Nos Branches et Formations</h2>
              <p>
                Notre école professionnelle en Informatique et Management propose des formations modernes et adaptées au monde globalisé. Nous offrons une approche innovante de l’apprentissage, permettant à nos étudiants de choisir parmi une large gamme de cours en ligne et de développer de nouvelles compétences.
              </p>
              <ul>
                <li> 
                  <span className="ti-check"></span> Accès à plus de 120 modules professionnels.
                </li>
                <li>
                  <span className="ti-check"></span> Thèmes populaires adaptés aux besoins des étudiants modernes
                </li>
                <li>
                  <span className="ti-check"></span> Trouver le formateur idéal pour accompagner votre parcours
                </li>
              </ul>
              <Link className="btn_one" href="/course">
               Voir toutes les branches<i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
