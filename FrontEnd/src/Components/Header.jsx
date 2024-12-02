import React from 'react'
import data from '../utils/data.json'

const Header = () => {
    return (
      <div>
        <nav>
            <ul>
                <li>{data.header.logo}</li>
                <li>{data.header.menus.menu1}</li>
                <li>{data.header.menus.menu2}</li>
                <li>{data.header.menus.menu3}</li>
                <li>{data.header.menus.menu4}</li>
                <li>{data.header.button[1]}</li>
                <li>{data.header.button[2]}</li>
            </ul>
        </nav>
      </div>
    )
}

export default Header;
