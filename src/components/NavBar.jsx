import React from 'react'
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo.png"
import menuIcon from "/src/assets/menu-icon.png"
import Brand from "/src/assets/logo-emotion.png"

function NavBar({handleToggleTheme}) {
    return(
        <div id="navbar" className='flex-row space-between pd-20'>
            <Link to="/"><img className="logo" src={Brand} alt="logo website" /></Link>
            <img src={menuIcon} alt="menu icon" />
            <div id="navbar-links" className='flex-row space-between'>
                <Link to={"/"}>Home</Link>
                <Link to={"/favorites"}>♡ Favoritos</Link>
                <Link to={"/add-item"}>+ Añadir</Link>
                <button onClick={handleToggleTheme} id="theme-btn">THEME</button>
            </div>
        </div>
    );
}

export default NavBar;