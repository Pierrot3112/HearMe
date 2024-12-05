import React from "react";
import data from "../utils/data.json";
// import "../style/formation.scss";

const FormationCard = () => {
  const formations = data.formations;

  return (
    <div className="formations-grid">
      {formations.map((formation) => (
        <div key={formation.id} className="formation-card">
          <img
            src={formation.image}
            alt={formation.title}
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">{formation.title}</h3>
            <p className="card-description">{formation.description}</p>
            <div className="card-foot">
              <img
                src={formation.author || "/logo.jpg"} // Ajout d'une image par défaut si non définie
                alt="Author"
                className="author-image"
              />
              <span
                className={`card-status ${formation.statut === "Payant >>" ? "status-payant" : ""
                  }`}
              >
                {formation.statut}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormationCard;
