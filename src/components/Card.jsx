import React from 'react'

function Card(props){

    const {title, year, genre, URL, length, rating, type, isFavorite} = props

  //MouseEnter estado en true => display Titulo y Boton Favoritos
  //MouseLeave estado en falso

    return(
        <div id="card">
            <p>{title}</p>
            <p>{year}🤩</p>
            <img src={URL} alt="" />
        </div>
    );
}

export default Card;