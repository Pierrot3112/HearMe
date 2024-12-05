import React from 'react';
import data from '../utils/data.json';
import homeBack from '../assets/video/backHomee.mp4'
import '../style/home.scss';


const Hero = () => {
  return (
    <div className='hero-home'>
      <div className="video-home">
        <video src={homeBack} style={{ height: "100%", width: "100%" }} autoPlay loop muted />
      </div>
      <section className="section">
        <h1>
          {data.hero.home.title} <span>{data.header.logo}</span>
        </h1>
        <div className='description'>
          <p> {data.hero.home.description} </p>
        </div>
        <div className="btn-box">
          <a href="/login">
            {data.hero.home.button}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
