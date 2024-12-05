import { useEffect, useState } from 'react'

import data from '../utils/data.json';
import '../style/global.css';
import React from 'react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (label) => {
    setActiveMenu(label);
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      setIsScrolled(winScroll > 50);
    };

    window.addEventListener('scroll', handleScroll);

  }, []);
  const menuItems = [
    { label: data.header.menus.menu1 },
    { label: data.header.menus.menu2 },
    { label: data.header.menus.menu3 },
    { label: data.header.menus.menu4 }
  ];

  const buttonItems = [
    { label: data.header.buttons[1], className: "btn-1" },
    { label: data.header.buttons[2], className: "btn-2" }
  ];

  return (
    <div>
      <nav className={isScrolled ? "colored-bk navbar navbar-b navbar-trans navbar-expand-md fixed-top" : "navbar navbar-b navbar-trans navbar-expand-md fixed-top"} id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll" href="">{data.header.logo}</a>

          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav active">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${activeMenu === item.label ? "active" : ""}`}
                  onClick={() => handleMenuClick(item.label)}
                >
                  <a className="nav-link js-scroll" href={`#${item.label.toLowerCase()}`}>
                    {item.label}
                  </a>
                </li>
              ))}

              {buttonItems.map((button, index) => (
                <li key={index} className="nav-item btn-box">
                  <a
                    className={`nav-link ${button.className}`}
                    href="#auth">
                    {button.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}



export default Header;
