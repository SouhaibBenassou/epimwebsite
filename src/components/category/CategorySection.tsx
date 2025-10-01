import React from "react";
import DivAnimateY from "../utils/DivAnimateY";
type Props = {
  style?: string;
};
const CategorySection = ({ style }: Props) => {
  return (
    <section
      className={`top_cat__area section-padding ${style} overflow-hidden`}
      style={{
        backgroundImage: "url(assets/img/bg/shape-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <DivAnimateY className="container">
        <div className="section-title text-center">
          <h2>Démarrez votre avenir avec nous</h2>
          <p>
            Notre école professionnelle en <strong>Informatique et Management</strong>  
             vous propose une formation moderne et adaptée au marché du travail. 
            Développez vos compétences, innovez et préparez-vous à réussir 
            dans un monde en constante évolution.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp">
            <div className="single_tp">
              <span className="sc_one">01</span>
              <h3>
                Engagement
              </h3>
              <p>
                Un enseignement de qualité pour la réussite et l’épanouissement de chaque étudiant.
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <div className="single_tp">
              <span className="sc_two">02</span>
              <h3>
                Qualité
              </h3>
              <p>
                Des programmes rigoureux et des formateurs experts pour une formation valorisée.
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-wow-offset="0"
          >
            <div className="single_tp">
              <span className="sc_three">03</span>
              <h3>
                Innovation
              </h3>
              <p>
                Une pédagogie moderne alliant technologie et management.
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-wow-offset="0"
          >
            <div className="single_tp">
              <span className="sc_four">04</span>
              <h3> 
                Encadrement
              </h3>
              <p>
               Accompagnement personnalisé pour le développement académique et professionnel.
              </p>
            </div>
          </div>
        </div>
      </DivAnimateY>
    </section>
  );
};

export default CategorySection;
