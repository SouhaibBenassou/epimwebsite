import React from "react";
import DivAnimateY from "../utils/DivAnimateY";

const CategorySection2 = () => {
  return (
    <section
      className="top_cat__area section-padding overflow-hidden"
      style={{
        backgroundImage: "url(assets/img/bg/section-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <DivAnimateY className="container">
        <div className="section-title text-center">
          <h2>Découvrez nos Catégories Populaires</h2>
          <p>
            ous proposons une approche innovante de l'apprentissage. Explorez un large éventail de domaines et développez de nouvelles compétences grâce à nos formations spécialisées.
          </p>
        </div>
        <div className="row">
         <div className="col-lg-12 col-sm-12 col-xs-12">
          <div className="col-lg-12 col-sm-12 col-xs-12">
  <div className="cat_list">
    <ul>
      <li>
        <a href="#">
          <img src="assets/img/e1.png" alt="category-image" /> Marketing Digital
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e2.png" alt="category-image" /> Design UI/UX
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e3.png" alt="category-image" /> Design Visuel 3D
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e4.png" alt="category-image" /> Marketing de Contenu
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e5.png" alt="category-image" /> Photographie
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e6.png" alt="category-image" /> Gestion des Entreprises
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e7.png" alt="category-image" /> Art & Design
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e8.png" alt="category-image" /> Programmation
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e9.png" alt="category-image" /> Design Graphique
        </a>
      </li>
      <li>
        <a href="#">
          <img src="assets/img/e2.png" alt="category-image" /> Design d’Intérieur
        </a>
      </li>
    </ul>
  </div>
</div>

        </div>
        </div>
      </DivAnimateY>
    </section>
  );
};

export default CategorySection2;
