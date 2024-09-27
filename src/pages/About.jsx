import React from 'react'

function About() {
    return(
        <div id="about">
            <h1>About</h1>

            <p>Descripción del proyecto</p>
            
            <div className="cards-about">
                <div className="card-personal">
                    <h3>Pedro Perez</h3>
                    <button>Github</button>
                    <button>Linkedin</button>
                </div>
                <div className="card-personal">
                    <h3>David Carballo</h3>
                    <button>Github</button>
                    <button>Linkedin</button>
                </div>
            </div>

        </div>
    );

}

export default About;