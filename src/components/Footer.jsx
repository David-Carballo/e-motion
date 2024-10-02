import '../styles/Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logoGithub from "/src/assets/github-icon.png"

function Footer() {
  return (
    
    <div id="footer" className='flex-row gap-10'>
      <Link to={"https://github.com/David-Carballo/e-motion"} className='flex-row'>     
        Repository
      </Link>
      <Link to={"/about"}>About us</Link>
    </div>
    
  )
}

export default Footer