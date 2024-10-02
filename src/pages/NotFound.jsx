import React, { useEffect } from 'react'
import logo from "/src/assets/error404.png"
import { useNavigate } from 'react-router-dom'

function NotFound({setColorTheme}) {
  const navigate = useNavigate()
 

  useEffect( () =>{
    setColorTheme("dark")
    const setTimeoutId = setTimeout (() =>{
      navigate("/")
    },10000) 
  }, [])
  
  return (
    <div id="not-found">
     
      <img src={logo} alt="logo404" style={{width: "500px", height:"500px"}}/>

      <h1>😕 ¡Oops! Página no encontrada.</h1>
      <p>
        Parece que esta página decidió tomarse un descanso... pero no te preocupes,
        ¡aquí estamos para levantarte el ánimo!
      </p>
      <p>
        Mientras encontramos lo que buscabas, ¿qué tal si te ayudamos a elegir un plan perfecto según cómo te sientas?
      </p>

      <p>Trataremos de redirigirte de manera automatica dentro de 10 segundos</p>
      
        <button>😊 Return Home</button>

    </div>
  )
}

export default NotFound