import React from 'react'
import { Link } from 'react-router-dom';
import menuIcon from "/src/assets/menu-icon.png"
import Brand from "/src/assets/logo-emotion.png"

function NavBar() {
    return(
        <div id="navbar" className='flex-row space-between pd-20'>
            <Link to="/"><img className="logo" src={Brand} alt="logo website" /></Link>
            <img src={menuIcon} alt="menu icon" />
            <div id="navbar-links" className='flex-row space-between'>
                <Link to={"/"}>Home</Link>
                <Link to={"/favorites"}>♡ Favoritos</Link>
                <Link to={"/add-item"} className='navbar-add'>+ Añadir</Link>
            </div>
        </div>
    );
}

export default NavBar;