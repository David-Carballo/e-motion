import React from 'react'
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo.png"

function NavBar() {
    return(
        <div id="navbar" className='flex-row space-between pd-20'>
            <img className="logo" src={logo} alt="logo website" />
            <div id="navbar-links" className='flex-row space-between'>
                <Link to={"/"}>Home</Link>
                <Link to={"/favorites"}>♡ Favoritos</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/add-item"}>+ Añadir</Link>
                <button id="theme-btn">THEME</button>
            </div>
        </div>
    );
}

export default NavBar;