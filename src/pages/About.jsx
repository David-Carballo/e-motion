import React from 'react'
import logoGithub from "/src/assets/github-icon.png"
import logoLinkedin from "/src/assets/linkedin-icon.png"

function About() {
    return(
        <div id="about"  className='flex-column'>
            <h1>About us</h1>

            <p>Descripción del proyecto</p>
            
            <div id="about-cards">
                <div className="card-personal">
                    <img src="" alt="profile image"></img>
                    <h3>Pedro Perez</h3>
                    <h6>Developer</h6>
                    <div className='flex-row gap-2'>
                        <a href="https://github.com/plperezp"><img src={logoGithub} alt="icon github" /></a>
                        <a href="https://www.linkedin.com/in/pedro-luis-perez-piris-66aa30165"><img src={logoLinkedin} alt="icon linkedin" /></a>
                    </div>
                </div>
                <div className="card-personal">
                    <img src="" alt="profile image"></img>
                    <h3>David Carballo</h3>
                    <h6>Developer</h6>
                    <div className='flex-row gap-2'>
                        <a href="https://github.com/David-Carballo"><img src={logoGithub} alt="icon github" /></a>
                        <a href="https://www.linkedin.com/in/as-solo"><img src={logoLinkedin} alt="icon linkedin" /></a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;