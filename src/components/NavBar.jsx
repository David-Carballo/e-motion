import '../styles/NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom';
import menuIcon from "/src/assets/menu-icon.png"
import Brand from "/src/assets/logo-emotion.png"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

function NavBar() {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return(
        <div id="navbar" className='flex-row space-between pd-20'>
            <Link to="/"><img className="logo" src={Brand} alt="logo website" /></Link>

            <Button
            id= "basic-button"
            aria-controls = {open ? "basic-menu" : undefined}
            aria-haspopup= "true"
            aria-expanded ={open ? "true" : undefined}
            onClick={handleClick}
            >
           
           <img src={menuIcon} alt="menu icon" />
            </Button>

            <Menu
            id= "basic-menu"
            anchorEl ={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                "aria-labelledby": "basic-button",
            }}
            >
            <Link to="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to ="/favorites">
            <MenuItem onClick={handleClose}>Favoritos</MenuItem>
            </Link>
            <Link to = "/add-item">
            <MenuItem onClick={handleClose}>Añadir</MenuItem>
            </Link>
            </Menu>

            
            <div id="navbar-links" className='flex-row space-between'>
                <Link to={"/"}>Home</Link>
                <Link to={"/favorites"}>♡ Favoritos</Link>
                <Link to={"/add-item"} className='navbar-add'>✏️ Añadir</Link>
            </div>
        </div>
    );
}

export default NavBar;