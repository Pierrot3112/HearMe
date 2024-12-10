import React from "react";
import "./d.scss";

const Evaluation = () => {
  return (
    <div className="evaluation">
      <header className="header">
        <h1>Evaluations</h1>
        <p>
          Découvrez votre niveau de compétence et recevez des recommandations
          d'apprentissage personnalisées.
        </p>
        <div className="categories">
          <button className="active">Débutant</button>
          <button>Intermédiaire</button>
          <button>Avancé</button>
        </div>
      </header>
      <section className="evaluation-grid">
        <div className="card">
          <h2>Agri-business</h2>
          <p>
            Ce cours est dédié aux passionnés et débutants dans le domaine de
            l’agri-business. Avec des modules de formations complètes.
          </p>
          <span className="status">Gratuit</span>
        </div>
        <div className="card">
          <h2>Marketing Digitale</h2>
          <p>
            Ce cours est dédié aux passionnés et débutants dans le domaine du
            marketing digital. Avec des modules de formations complètes.
          </p>
          <span className="status">25 questions</span>
        </div>
        <div className="card">
          <h2>Art Digital</h2>
          <p>
            Ce cours est dédié aux passionnés et débutants dans le domaine de
            l’art digital. Avec des modules de formations complètes.
          </p>
        </div>
        <div className="card">
          <h2>Médias & Technologie</h2>
          <p>
            Ce cours est dédié aux passionnés et débutants dans le domaine des
            médias et de la technologie. Avec des modules de formations
            complètes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Evaluation;
