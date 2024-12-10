import React from "react";
import { PermIdentityOutlined, HistoryOutlined, CardTravelOutlined, LogoutOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Utilisation de Link pour éviter un rechargement complet de la page
import "./d.scss";

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <div className="profile-menu-content">
        <ul className="profile-options">
          {/* Liens avec React Router */}
          <li>
            <Link to="/user/profile">
              <PermIdentityOutlined />
              <p>Profile</p>
            </Link>
          </li>
          <li>
            <Link to="/user/history">
              <HistoryOutlined />
              <p>Historiques</p>
            </Link>
          </li>
          <li>
            <Link to="/user/abonment">
              <CardTravelOutlined />
              <p>Abonnement</p>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <LogoutOutlined />
              <p>Se Deconnecter</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
