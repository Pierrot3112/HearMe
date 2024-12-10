import React from "react";
import "./d.scss"; // Styles pour le composant

const Courses = () => {
  return (
    <div className="course">
      <header className="header">
        <h1>Formations</h1>
        <p>Alors apprenez les meilleures formations qui pourront vous aider.</p>
        <div className="categories">
          <button className="active">Débutant</button>
          <button>Intermédiaire</button>
          <button>Avancé</button>
        </div>
      </header>

      <section className="main-content">
        <div className="course-info">
          <h2>Agri-business <span>Gratuit</span></h2>
          <p>
            Ce cours est dédié aux passionnés et débutants dans le domaine de
            l’agri-business. Avec des modules de formations complètes.
          </p>
          <div className="author">
            <span>Mr Jeff</span>
            <span>❤️ 1,5k</span>
          </div>
        </div>
        <aside className="summary">
          <h3>Sommaire</h3>
          <ul>
            <li>Module 1: Initiation à l'agri-business</li>
            <li>Module 2: L'agri-business et l'IA</li>
            <li>Module 3: Startup avec l'agri-business</li>
          </ul>
          <button className="start-btn">Commencer votre formation</button>
        </aside>
      </section>
    </div>
  );
};

export default Courses;
