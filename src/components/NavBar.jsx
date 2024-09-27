import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div id="navbar">
            <img className="logo" src="" alt="" />
            <Link to={"/"}>Home</Link>
            <Link to={"/favorites"}>Favoritos</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/add-item"}>ADD</Link>
            <button id="theme-btn">THEME</button>
        </div>
    );
}

export default NavBar;