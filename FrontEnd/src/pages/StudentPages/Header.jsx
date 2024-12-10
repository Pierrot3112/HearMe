import React from "react";
import "./d.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="user-info">
        <img
          src="path-to-profile-picture.jpg"
          alt="Eddy"
          className="profile-picture"
        />
        <div className="welcome-text">
          <h2>Bienvenue Eddy!</h2>
          <p>Débutant</p>
          <span>+0 Points</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
