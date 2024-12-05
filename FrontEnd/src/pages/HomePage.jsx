import React from 'react';
import Header from '../Components/Header';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import FormationCard from '../Components/FormationCard';
import Hero from '../Components/Hero.homePage';
import Decouvert from '../Components/Decouvert';


function HomePage() {
  return (
    <div>
      <Header />
      <div>
        <Hero />
      </div>
      <Features />
      <div className="formations-container">
        <h1>Nos Formations</h1>
        <p>Choisissez votre cours</p>
        <FormationCard />
      </div>
      <div className="btn-free-start">
        <p>
          <a>Commencer Gratuitement</a>
        </p>
      </div>
      <div>
        <Decouvert />
      </div>
      <div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
