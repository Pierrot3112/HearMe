import React, { useState } from "react";
import {
  Home,
  HomeOutlined,
  MenuBook,
  MenuBookOutlined,
  School,
  SchoolOutlined,
  WorkspacePremium,
  WorkspacePremiumOutlined,
} from "@mui/icons-material"; // MUI Icon
import "./d.scss";
import UserImage from "../../assets/images/user.jpg";
import ProfileMenu from "./ProfileMenu";

const Sidebar = ({ onMenuClick }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    onMenuClick(menuName); // Change le contenu dans le composant parent
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <div className="logo">HEARME</div>
      <nav className="menu">
        <ul>
          <li
            className={activeMenu === "home" ? "active" : ""}
            onClick={() => handleMenuClick("home")}
          >
            {activeMenu === "home" ? (
              <Home fontSize="large" />
            ) : (
              <HomeOutlined fontSize="large" />
            )}
          </li>
          <li
            className={activeMenu === "courses" ? "active" : ""}
            onClick={() => handleMenuClick("courses")}
          >
            {activeMenu === "courses" ? (
              <MenuBook fontSize="large" />
            ) : (
              <MenuBookOutlined fontSize="large" />
            )}
          </li>
          <li
            className={activeMenu === "evaluation" ? "active" : ""}
            onClick={() => handleMenuClick("evaluation")}
          >
            {activeMenu === "evaluation" ? (
              <School fontSize="large" />
            ) : (
              <SchoolOutlined fontSize="large" />
            )}
          </li>
          <li
            className={activeMenu === "certification" ? "active" : ""}
            onClick={() => handleMenuClick("certification")}
          >
            {activeMenu === "certification" ? (
              <WorkspacePremium fontSize="large" />
            ) : (
              <WorkspacePremiumOutlined fontSize="large" />
            )}
          </li>
        </ul>
      </nav>
      <div className="profile-icon" onClick={toggleProfileMenu}>
        <img src={UserImage} alt="User" />
      </div>
      {profileMenuOpen && <ProfileMenu />}
    </div>
  );
};

export default Sidebar;
