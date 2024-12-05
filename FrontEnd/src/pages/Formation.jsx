import React from "react"; // Importation du fichier JSON
import FormationCard from "../Components/FormationCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Features from "../Components/Features";

const Formations = () => { // Accéder à la clé 'formations' du fichier JSON

  return (
    <>
      <Header />
      <Features />
      <div className="formations-container">
        <h1>Nos Formations</h1>
        <p>Choisissez votre cours</p>
        <FormationCard />
      </div>
      <Footer />
    </>
  );
};

export default Formations;
