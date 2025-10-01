import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";
import NumberCounter from "../utils/NumberCounter";

const PromoSection = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Ce qui fait la différence de nos formations</h2>
              <p>
                Nos formations en ligne se distinguent par la qualité de l’enseignement dispensé au sein de notre école, la flexibilité des parcours proposés et l’accompagnement individualisé de chaque apprenant. Grâce à une équipe pédagogique expérimentée et des contenus adaptés aux besoins du monde actuel, nous offrons un environnement propice à l’apprentissage, que vous soyez débutant ou en reconversion. Avec notre école, vous avancez à votre rythme, tout en bénéficiant d’un réel suivi.
              </p>
              <ul>
                <li>
                  <span className="ti-check"></span> Accès à plus de 120 modules professionnels.
                </li>
                <li>
                  <span className="ti-check"></span> Thèmes populaires adaptés aux besoins des étudiants modernes

                </li>
                <li>
                  <span className="ti-check"></span>  Trouver le formateur idéal pour accompagner votre parcours

                </li>
              </ul>
              <Link className="btn_one" href="/course">
                View All Courses <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/about3.png"
                className="img-fluid"
                alt="image"
              />
              <div className="home_ps2">
                <span className="ti-book"></span>
                <NumberCounter number={279} durationToComplete={3} icon="+" />
                <p>lauréat</p>
              </div>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
