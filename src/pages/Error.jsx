import React, { useEffect } from "react";
import logo from "/src/assets/error500.jpg";
import { Link } from "react-router-dom";

function Error({setColorTheme}) {

  useEffect(()=>{
    setColorTheme("dark");
  },[])

  return (
    <div id="error">
      <img src={logo} alt="img" style={{ width: "300px", height: "300px" }} />
      <h1>💥 Oops! Algo salió mal. 😅</h1>
      <p>
        Parece que nuestro servidor se fue de fiesta 🎉 y no ha vuelto aún.
        Estamos trabajando duro para arreglar esto 🛠️.
      </p>
      <p>Mientras tanto, puedes:</p>
      <ul>
        <Link to={"/"}>
          <li>Volver al inicio 🏠</li>
        </Link>
        <li>
          O tomarte un descanso ☕, ¡quizás todo se arregle cuando vuelvas!
        </li>
      </ul>
      <p>Gracias por tu paciencia 🙏.</p>
    </div>
  );
}

export default Error;
