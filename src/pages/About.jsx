import '../styles/About.css'
import React, { useEffect } from 'react'
import logoGithub from "/src/assets/github-icon.png"
import logoLinkedin from "/src/assets/linkedin-icon.png"
import pedroImg from "/src/assets/pedro.jpg"
import davidImg from "/src/assets/david.jpg"

function About({setColorTheme}) {

    useEffect(()=>{
        setColorTheme("dark");
    },[])

    return(
        <div id="about"  className='flex-column'>
            <h1>About us</h1>

            <p>Este proyecto es una aplicación web interactiva creada con React, diseñada para ofrecer recomendaciones personalizadas de películas,
                 música y libros en función del estado de ánimo del usuario. Los usuarios pueden crear y editar sus propias recomendaciones, así como explorar 
                 una selección de contenido multimedia, incluyendo videos. La interfaz es intuitiva y permite una experiencia fluida para descubrir nuevas 
                 opciones de entretenimiento adaptadas a cada momento emocional.</p>
            
            <div id="about-cards">
                <div className="card-personal">
                    <img src={pedroImg} alt="profile image"></img>
                    <h3>Pedro Perez</h3>
                    <h6>Developer</h6>
                    <div className='flex-row gap-2'>
                        <a href="https://github.com/plperezp"><img src={logoGithub} alt="icon github" /></a>
                        <a href="https://www.linkedin.com/in/pedro-luis-perez-piris-66aa30165"><img src={logoLinkedin} alt="icon linkedin" /></a>
                    </div>
                </div>
                <div className="card-personal">
                    <img src={davidImg} alt="profile image"></img>
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